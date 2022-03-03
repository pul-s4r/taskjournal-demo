export const config = {
  passport: {
    secret: 'TRo2Gxic9X3GKwhG9mvMrHyogHj0mL1A',
    expiresIn: 10000,
  },
  env: {
    mongoDBUri: 'mongodb://localhost/test',
    mongoHostName: process.env.ENV === 'prod' ? 'mongodbAtlas' : 'localhost',
  },
};
export const underscoreId = '_id';
