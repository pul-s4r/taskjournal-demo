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
const deployer = new Web3Deployer({ ethereumUrl: `http://${networkconf.development.host}:${networkconf.development.port}` });
await deployer.setup();

import {
  checkAuth
} from '../store/utils.js';

function createInstance(name, contractdefId, networkId, providerUrl, address, owner) {
  return new ContractInst({
    name,
    contractdefId,
    networkId,
    providerUrl,
    address,
    owner,
    dateCreated: new Date(Date.now()),
  }).save();
}

contractinstController.get("/:email", checkAuth, async (req, res) => {
  try {
    const { email } = req.params;
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
    const instance = await deployer.deploy();

    const networkId = await deployer.web3.eth.net.getId();

    const newInst = await createInstance(name, contractdefId, networkId, instance.currentProvider.host, instance.options.address, ownerId);
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
contractinstController.post("/call", checkAuth, async (req, res) => {
  try {
    res.status(200).json({
      data: {},
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      errors: [error.message],
      message: "[Call] Contract instance could not be called"
    });
  }
});

// TODO: get method list/ABI
// TODO: set address of current instance
// TODO: remove instance

export default contractinstController;
