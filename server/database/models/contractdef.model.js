import mongoose from 'mongoose';
import contractdefSchema from '../schemas/contractdef.schema.js';

const ContractDef = mongoose.model('ContractDef', contractdefSchema);

export default ContractDef;
