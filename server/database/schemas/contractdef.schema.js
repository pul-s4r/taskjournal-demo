import mongoose from 'mongoose';

const Mixed = mongoose.Schema.Types.Mixed;
const ObjectId = mongoose.Schema.Types.ObjectId;

const contractdefSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: false },
  input: { content: { type: String, required: true }, type: Mixed, required: true },
  abi: { type: Mixed, required: true },
  owner: { type: ObjectId, required: true },
  users: { type: [{ id: ObjectId, role: { type: String, enum: ["EDITOR", "VIEWER"] } }], required: false },
});

export default contractdefSchema;
