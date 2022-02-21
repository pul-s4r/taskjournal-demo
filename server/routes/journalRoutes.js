import express from 'express';
import JournalActions from '../lib/journalActions.js';
import PaymentActions from '../lib/paymentActions.js'

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
router.get('/isFinalised', JournalActions.isFinalised);

router.post('/create', JournalActions.createTask);
router.post('/modify', JournalActions.modifyTaskDesc);
router.post('/delay', JournalActions.delayTaskRequest);
router.post('/delayOutcome', JournalActions.delayTaskOutcome);
router.post('/complete', JournalActions.completeTask);
router.post('/finalise', JournalActions.finaliseContract);

router.get('/getAmountPayable', PaymentActions.getAmountPayable);
router.get('/isPaid', PaymentActions.isPaid);
router.get('/isReleased', PaymentActions.isReleased);

router.post('/payContract', PaymentActions.makePaymentFromOwner);
router.post('releaseFunds', PaymentActions.transferPaymentToContractor);

export default router;
