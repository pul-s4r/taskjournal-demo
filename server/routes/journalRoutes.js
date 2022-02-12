import express from 'express';
import JournalActions from '../lib/journal.js';

const router = express.Router();

router.get('/', JournalActions.getTasks);

export default router;
