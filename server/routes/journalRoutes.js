import express from 'express';
import JournalActions from '../lib/journalActions.js';

const router = express.Router();

const sendStatusMessage = async (req, res) => {
  try {
    res.status(200).json({"status": "Active"});
  } catch (error) {
    res.status(400).json({"error": error});
  }
};

router.get('/', sendStatusMessage);
router.get('/getTasks', JournalActions.getTasks);
router.get('/getTaskIds', JournalActions.getTaskIds);
router.post('/create', JournalActions.createTask);
router.post('/modify', JournalActions.modifyTaskDesc);
router.post('/delay', JournalActions.getTasks);

export default router;
