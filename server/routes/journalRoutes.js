import express from 'express';
import { checkAuth } from '../store/utils.js';

const router = express.Router();

const sendStatusMessage = async (req, res) => {
  try {
    res.status(200).json({"status": "Active"});
  } catch (error) {
    res.status(400).json({"error": error});
  }
};

router.get('/', sendStatusMessage);

export default router;
