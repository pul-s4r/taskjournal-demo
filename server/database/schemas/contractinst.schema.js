import mongoose from 'mongoose';
const ObjectId = mongoose.Schema.Types.ObjectId;

const contractinstSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  contractdefId: { type: ObjectId, required: true },
  networkId: { type: Number, required: true },
  providerUrl: { type: String, required: true },
  address: { type: String, required: true },
  owner: { type: ObjectId, required: true },
  users: { type: [ObjectId], required: false },
  dateCreated: { type: Date, required: false },
});

export default contractinstSchema;
