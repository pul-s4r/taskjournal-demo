import mongoose from 'mongoose';

const Mixed = mongoose.Schema.Types.Mixed;
const ObjectId = mongoose.Schema.Types.ObjectId;

const contractdefSchema = new mongoose.Schema({
  name: { type: String, required: true },
  type: { type: String, required: true, enum: ["CONTRACT", "LIBRARY"], default: "CONTRACT" },
  input: { content: { type: String, required: true }, type: Mixed, required: true },
  bytecode: { type: String, required: true },
  abi: { type: Mixed, required: true },
  owner: { type: ObjectId, required: true },
  users: { type: [{ id: ObjectId, role: { type: String, enum: ["EDITOR", "VIEWER"] } }], required: false },
  output: {type: Mixed, required: false},
});

contractdefSchema.methods.getPublicFields = function getPublicFields() {
  return {
    id: this._id,
    name: this.name,
    type: this.type,
    input: this.input,
    bytecode: this.bytecode,
    abi: this.abi
  };
};

contractdefSchema.methods.getSummaryFields = function getSummaryFields() {
  return {
    id: this._id,
    name: this.name,
    type: this.type
  };
};

export default contractdefSchema;
