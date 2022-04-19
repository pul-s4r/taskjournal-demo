export const config = {
  development: {
    host: "127.0.0.1",     // Localhost (default: none)
    port: 8545,            // Standard Ethereum port (default: none)
    network_id: "*",       // Any network (default: none)
    gas: 4600000,
    secret: ""
  },
  production: {
    host: process.env.INFURA_URI,
    port: 9000,
    network_id: "*",
    gas: 1500000,
    secret: process.env.INFURA_SECRET
  },
};
