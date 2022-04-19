export const config = {
  env: {
    mongoDBUri: process.env.NODE_ENV === 'production' ? `mongodb+srv://${process.env.MONGODB_ATLAS_USERNAME}:${process.env.MONGODB_ATLAS_PASSWORD}@cluster0.ptvac.mongodb.net/taskdata?retryWrites=true&w=majority` : 'mongodb://localhost/test',
    mongoHostName: process.env.NODE_ENV === 'production' ? 'mongodbAtlas' : 'localhost',
  },
};

console.log(config.env.mongoDBUri);
