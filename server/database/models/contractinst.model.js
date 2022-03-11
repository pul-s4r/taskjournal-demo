import mongoose from 'mongoose';
import contractinstSchema from '../schemas/contractinst.schema.js';

const ContractInst = mongoose.model('ContractInst', contractinstSchema);

export default ContractInst;
