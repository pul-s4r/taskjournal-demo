import mongoose from 'mongoose';
import sha256 from 'sha256';

const userSchema = new mongoose.Schema({
  hashedPassword: { type: String, required: true },
  email: { type: String, required: true },
  accountType: { type: String, enum: ["OWNER", "CONTRACTOR"], default: "CONTRACTOR" }, 
});

/**
 * @param {*} password
 */
userSchema.methods.comparePassword = function comparePassword(password) {
  return this.hashedPassword === sha256(password);
};

export default userSchema;
