import express from 'express';
import mongoose from 'mongoose';
import { check, validationResult } from 'express-validator';
import { ExtractJwt } from 'passport-jwt';
import jwt_decode from "jwt-decode";

import { User, ContractDef } from '../database/models/index.js';

const extractJwtFromBearer = ExtractJwt.fromAuthHeaderAsBearerToken();

const contractdefController = express.Router();

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

contractdefController.post('/add', [checkAuth, ...adddefValidation], async (req, res) => {
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
      message: "[Add] Contract definition could not be added"
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
