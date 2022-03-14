import express from 'express';
import mongoose from 'mongoose';
import { check, validationResult } from 'express-validator';
import { ExtractJwt } from 'passport-jwt';
import jwt_decode from "jwt-decode";

import { User, ContractDef } from '../database/models/index.js';
import upload from '../middleware/upload.js';
import SolcCompiler from '../compiler/compiler.solc.js';

const extractJwtFromBearer = ExtractJwt.fromAuthHeaderAsBearerToken();

const contractdefController = express.Router();
const compiler = new SolcCompiler();

import {
  checkAuth
} from '../store/utils.js';

const adddefValidation = [
  check('name')
    .exists()
    .withMessage("Name not specified"),
  // check('type'),
  check('input')
    .exists()
    .withMessage("Input files not specified"),
  check('abi')
    .exists()
    .withMessage("Application binary interface not specified"),
  // check('users'),
];

function createDefinition(name, type, input, bytecode, abi, owner) {
  return new ContractDef({
    name,
    type,
    input,
    bytecode,
    abi,
    owner,
    dateCreated: new Date(Date.now()),
    dateModified: new Date(Date.now()),
  }).save();
}

contractdefController.get('/:email', checkAuth, async (req, res) => {
  try {
    const { email } = req.params;
    const user = await User.findOne({ email });
    const id = user.id;
    ContractDef.find({owner: id}, (err, result) => {
      res.status(200).json({
        data: result,
      });
    });
  } catch (e) {
    res.status(500).json({
      code: 500,
      errors: [e.message],
      message: "[Get by Email] Contract definition could not be queried"
    });
  }
});

contractdefController.get('/byid/:id', checkAuth, async (req, res) => {
  try {
    const { id } = req.params;
    ContractDef.findOne({_id: id}, (err, result) => {
      res.status(200).json({
        data: result,
      });
    });
  } catch (e) {
    res.status(500).json({
      code: 500,
      errors: [e.message],
      message: "[Get by ID] Contract definition could not be queried"
    });
  }
});

// Get method list/ABI: use this to initialise contracts on the frontend
contractdefController.get("/abi/:id", checkAuth, async (req, res) => {
  const { id } = req.params;
  try {
    ContractDef.findOne({_id: id}).then((result) => {
      res.status(200).json({
        data: result.abi,
      });
    }).catch((error) => {
      res.status(500).json({
        code: 500,
        errors: [error.message],
        message: "[Get ABI] Contract or JSON interface not found"
      });
    });
  } catch (error) {
    res.status(500).json({
      code: 500,
      errors: [error.message],
      message: "[Get ABI] Contract JSON interface could not be called"
    });
  }
});

contractdefController.post('/add', [checkAuth, upload.array("files")], async (req, res) => {
  try {
    const { name, type, link, main } = JSON.parse(req.body.info);
    const files = req.files;
    const filenames = [];

    const jwt = jwt_decode(extractJwtFromBearer(req));
    const email = jwt.email;
    const user = await User.findOne({ email });
    const ownerId = user.id;

    // Form compiler input
    compiler.clearSources();
    for (let file of req.files) {
      filenames.push(file.originalname);
      await compiler.appendSource(file.originalname, Buffer.from(file.buffer).toString("utf-8"));
    }
    compiler.compile().then(async (result) => {
      const contractSourceName = (Object.keys(result.contracts).includes(main)) ? main : Object.keys(result.contracts)[0];
      const contractName = Object.keys(result.contracts[contractSourceName])[0];
      const bytecode = result.contracts[contractSourceName][contractName].evm.bytecode.object;
      const abi = result.contracts[contractSourceName][contractName].abi;
      // console.log(`${contractName}: \n[B/C] ${bytecode} \n[ABI]${JSON.stringify(abi[3])}`);
      const newDef = await createDefinition(name, type, compiler.input, bytecode, abi, ownerId);
    }).catch((error) => {
      console.error("[Add by sources] Error compiling contract: ", error);
    });
    res.status(202).json({
      data: {
        name,
        type,
        filenames,
      },
    });
  } catch (e) {
    res.status(500).json({
      code: 500,
      errors: [e.message],
      message: "[Add by sources] Contract definition could not be added"
    });
  }
});

contractdefController.post('/add/compiled', [checkAuth, ...adddefValidation], async (req, res) => {
  const errorsAfterValidation = validationResult(req);
  try {
    if (errorsAfterValidation.isEmpty()) {
      const { name, type, input, bytecode, abi } = req.body;
      const jwt = extractJwtFromBearer(req);
      const decodedJwt = jwt_decode(jwt);
      const email = decodedJwt.email;
      const user = await User.findOne({ email });
      const ownerId = user.id;
      const newDef = await createDefinition(name, type, input, bytecode, abi, ownerId);

      const userResult = await User.updateOne({_id: ownerId}, {
        $push: {"content.contractDefinitions": newDef.id}
      }, {upsert: true});
      res.status(200).json(newDef.getSummaryFields());
    } else {
      res.status(400).json({
        code: 400,
        errors: errorsAfterValidation.mapped(),
      });
    }
  } catch (e) {
    res.status(500).json({
      code: 500,
      errors: [e.message],
      message: "[Add compiled entry] Contract definition could not be added"
    });
  }
});

// Requires optional validator for each field
contractdefController.patch('/edit', [checkAuth], async (req, res) => {
  try {
    const body = req.body;
    const id = body.id;
    delete body.id;
    const existing = await ContractDef.findById(id).exec();
    if (existing) {
      var updated = {$set: {}};
      for (let key in body) {
        if (existing[key] && existing[key] !== req.body[key])
          updated.$set[key] = req.body[key];
      }
      updated.$set['dateModified'] = new Date(Date.now());
      const result = await ContractDef.findOneAndUpdate({ id: id }, updated);
      res.status(200).send(result.getSummaryFields());
    } else {
      res.status(404).send({
        code: 404,
        errors: ["[Edit] Contract definition not found"],
      })
    }
  } catch (e) {
    res.status(500).json({
      code: 500,
      errors: [e.message],
      message: "[Edit] Contract definition could not be edited"
    });
  }

});

contractdefController.delete('/delete', [checkAuth], async (req, res) => {
  try {
    const id = req.body.id;
    const found = ContractDef.findOne({ id: id });

    if (mongoose.isValidObjectId(id) && found) {
      const result = await ContractDef.findByIdAndRemove(id);
      console.log("Find by ID and remove:", result);
      const ownerId = found.owner;

      const userResult = await User.updateOne({_id: ownerId}, {
        $pull: {"content.contractDefinitions": found.id}
      });
      res.status(200).send(result);
    } else {
      res.status(404).send({
        code: 404,
        errors: ["[Delete] Contract definition not found"]
      })
    }
  } catch (e) {
    res.status(500).json({
      code: 500,
      errors: [e.message],
      message: "[Delete] Contract definition could not be removed"
    });
  }
});

export default contractdefController;
