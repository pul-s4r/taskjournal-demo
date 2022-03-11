import mongoose from 'mongoose';

const contractinstSchema = new mongoose.Schema({
  name: {},
  id: {},
  network: {},
  address: {},
  users: {},
});

export default contractinstSchema;
