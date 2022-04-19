export const config = {
  env: {
    mongoDBUri: process.env.NODE_ENV === 'production' ? `mongodb+srv://${process.env.MONGODB_ATLAS_USERNAME}:${process.env.MONGODB_ATLAS_PASSWORD}@${process.env.MONGODB_ATLAS_ENDPOINT}/${process.env.MONGODB_ATLAS_DBNAME}?retryWrites=true&w=majority` : 'mongodb://localhost/test',
    mongoHostName: process.env.NODE_ENV === 'production' ? 'mongodbAtlas' : 'localhost',
  },
};
