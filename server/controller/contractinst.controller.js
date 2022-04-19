import express from 'express';
import mongoose from 'mongoose';
import { check, validationResult } from 'express-validator';
import { ExtractJwt } from 'passport-jwt';
import jwt_decode from "jwt-decode";

import { User, ContractDef, ContractInst } from '../database/models/index.js';
import Web3Deployer from '../deployer/deployer.web3.js';
import { config as networkconf } from '../deployer/network.conf.js';

const extractJwtFromBearer = ExtractJwt.fromAuthHeaderAsBearerToken();

const contractinstController = express.Router();

const ethNodeUri = process.env.NODE_ENV === "production" ? `${networkconf.production.host}` : `http://${networkconf.development.host}:${networkconf.development.port}`;
const deployer = new Web3Deployer({ ethereumUrl: ethNodeUri });
await deployer.setup(process.env.PROVISIONING_ACCOUNT, process.env.PROVISIONING_PKEY);

import {
  checkAuth
} from '../store/utils.js';

function createInstance(name, contractdefId, contractdefName, networkId, providerUrl, address, owner) {
  return new ContractInst({
    name,
    contractdefId,
    contractdefName,
    networkId,
    providerUrl,
    address,
    owner,
    dateCreated: new Date(Date.now()),
  }).save();
}

contractinstController.get("/:email?", checkAuth, async (req, res) => {
  try {
    const jwt = jwt_decode(extractJwtFromBearer(req));
    const email = req.params['email'] ? req.params.email : jwt.email;

    const user = await User.findOne({ email });
    const id = user.id;
    ContractInst.find({owner: id}, (err, result) => {
      res.status(200).json({
        data: result,
      });
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      errors: [error.message],
      message: "[Get by Email] Contract definition could not be queried"
    });
  }
});

contractinstController.get("/byid/:id", checkAuth, async (req, res) => {
  try {
    const { id } = req.params;
    ContractInst.findOne({_id: id}, (err, result) => {
      res.status(200).json({
        data: result,
      });
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      errors: [error.message],
      message: "[Get by ID] Contract instance could not be queried"
    });
  }
});

contractinstController.post("/deploy", checkAuth, async (req, res) => {
  try {
    const { name, contractdefId } = req.body;

    const jwt = jwt_decode(extractJwtFromBearer(req));
    const email = jwt.email;
    const user = await User.findOne({ email });
    const ownerId = user.id;

    const contract = await ContractDef.findById(contractdefId);
    deployer.initContractDef({ abi: contract.abi, bytecode: contract.bytecode });
    const contractdefName = contract.name;
    const instance = await deployer.deploy();

    const networkId = await deployer.web3.eth.net.getId();

    const newInst = await createInstance(name, contractdefId, contractdefName, networkId, instance.currentProvider.host, instance.options.address, ownerId);
    const userUpdate = await User.updateOne({_id: ownerId}, {
      $push: {"content.contractInstances": newInst.id}
    }, {upsert: true});

    res.status(200).json({
      address: instance.options.address,
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      errors: [error.message],
      message: "[Deploy] Contract could not be deployed"
    });
  }
});

/* Note: this is intended for testing only
Fetch ABI/address on frontend, initialise contract and call methods from frontend instead
*/
contractinstController.post("/call", checkAuth, async (req, res) => {
  try {
    const { name, address, method, params, account, gas, calltype } = req.body;

    const contract = await ContractInst.findOne({ name });
    const contractdef = await ContractDef.findOne({ id: contract.contractdefId });
    if (contract && contractdef) {
      const contractinst = new deployer.web3.eth.Contract(contractdef.abi, address);
      const contractmethod = contractinst.methods[method](... Object.values(params));
      calltype === "SEND" ? contractmethod.send(
        {from: account, gas: gas}
      ).then((result) => {
        res.status(200).json({
          data: result,
        });
      })
      : calltype === "CALL" ? contractmethod.call().then((result) => {
        res.status(200).json({
          data: result,
        });
      }) : res.status(202).json({
        data: {message: "No call type specified"},
      });
    } else {
      res.status(404).send({
        code: 404,
        errors: ["[Call] Contract definition not found"]
      });
    }
  } catch (error) {
    res.status(500).json({
      code: 500,
      errors: [error.message],
      message: "[Call] Contract instance could not be called"
    });
  }
});

// TODO: set address of current instance
// TODO: remove instance
/* Remove instance: delete contracts (development purposes only)
  Should consider long-term persistence/life of instance in DB
*/
contractinstController.delete("/delete/:id?", checkAuth, async (req, res) => {
  try {
    const id = Object.keys(req.body).length > 0 ? req.body.id : req.params.id;
    const found = await ContractInst.findOne({ id: id });
    if (mongoose.isValidObjectId(id) && found) {
      const result = await ContractInst.findByIdAndRemove(id);
      const ownerId = found.owner;

      const userResult = await User.updateOne({_id: ownerId}, {
        $pull: {"content.contractInstances": found.id}
      });
      res.status(200).send(result);
    } else {
      res.status(404).send({
        code: 404,
        errors: ["[Delete] Contract instance not found"]
      });
    }
  } catch (error) {
    res.status(500).json({
      code: 500,
      errors: [error.message],
      message: "[Delete] Contract instance could not be called"
    });
  }
});

export default contractinstController;
