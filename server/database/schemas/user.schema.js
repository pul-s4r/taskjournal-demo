import mongoose from 'mongoose';
import sha256 from 'sha256';

const Mixed = mongoose.Schema.Types.Mixed; 
const ObjectId = mongoose.Schema.Types.ObjectId;

const userSchema = new mongoose.Schema({
  hashedPassword: { type: String, required: true },
  email: { type: String, required: true },
  accountType: { type: String, enum: ["OWNER", "CONTRACTOR"], default: "CONTRACTOR" },
  settings: { type: Mixed },
  content: {
    contractDefinitions: { type: [ObjectId] },
    contractInstances: { type: [ObjectId] },
  }
});

/**
 * @param {*} password
 */
userSchema.methods.comparePassword = function comparePassword(password) {
  return this.hashedPassword === sha256(password);
};

userSchema.methods.getPublicFields = function getPublicFields() {
  return {
    email: this.email,
    accountType: this.accountType,
  };
};

export default userSchema;
