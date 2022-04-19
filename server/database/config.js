export const config = {
  env: {
    mongoDBUri: process.env.NODE_ENV === 'production' ? 'mongodb+srv://tdb_access:C2022Riu34.@cluster0.ptvac.mongodb.net/taskdata?retryWrites=true&w=majority' : 'mongodb://localhost/test',
    mongoHostName: process.env.NODE_ENV === 'production' ? 'mongodbAtlas' : 'localhost',
  },
};
