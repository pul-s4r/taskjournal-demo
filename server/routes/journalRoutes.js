import express from 'express';
import JournalActions from '../lib/journalActions.js';
import PaymentActions from '../lib/paymentActions.js';
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
router.get('/getTasks', checkAuth, JournalActions.getTasks);
router.get('/getTaskIds', checkAuth, JournalActions.getTaskIds);
router.get('/isFinalised', checkAuth, JournalActions.isFinalised);

router.post('/create', checkAuth, JournalActions.createTask);
router.post('/modify', checkAuth, JournalActions.modifyTaskDesc);
router.post('/delay', checkAuth, JournalActions.delayTaskRequest);
router.post('/delayOutcome', JournalActions.delayTaskOutcome);
router.post('/complete', checkAuth, JournalActions.completeTask);
router.post('/finalise', checkAuth, JournalActions.finaliseContract);

router.get('/contractAddress', checkAuth, PaymentActions.getContract); 
router.get('/ownerAddress', checkAuth, PaymentActions.getOwnerAccount);
router.get('/ownerBalance', checkAuth, PaymentActions.getOwnerAccountBalance);
router.get('/contractorAddress', checkAuth, PaymentActions.getContractorAccount);
router.get('/contractorBalance', checkAuth, PaymentActions.getContractorAccountBalance);
router.get('/smcBalance', checkAuth, PaymentActions.getContractBalance);
router.get('/getAmountPayable', checkAuth, PaymentActions.getAmountPayable);
router.get('/isPaid', checkAuth, PaymentActions.isPaid);
router.get('/isReleased', checkAuth, PaymentActions.isReleased);

router.post('/setOwnerAddress', checkAuth, PaymentActions.setOwnerAccount);
router.post('/setContractorAddress', checkAuth, PaymentActions.setContractorAccount);
router.post('/payContract', checkAuth, PaymentActions.makePaymentToContract);
router.post('/releaseFunds', checkAuth, PaymentActions.transferPaymentToContractor);

export default router;
