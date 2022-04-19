import Web3 from 'web3';

import BaseDeployer from './deployer.base.js';

class Web3Deployer {
  constructor(config) {
    this.config = config;

    this.provider = null;
    this.instance = null;
    this.bytecode = null;
    this.signer = null;

    this.provAccount = null;
    this.provPrivateKey = null;
  }

  initProvider() {
    const { ethereumUrl } = this.config;
    if (!ethereumUrl) {
      ethereumUrl = "http://localhost:8545";
    }
    this.provider = new Web3.providers.HttpProvider(ethereumUrl);
    this.web3 = new Web3(this.provider);
  }

  initProvisioningAccount(address, pkey) {
    this.provAccount = address;
    this.pkey = pkey;
    this.signer = this.web3.eth.accounts.privateKeyToAccount(
      pkey
    );
    this.web3.eth.accounts.wallet.add(this.signer);
  }

  initAccounts() {
    return Promise.all([
      new Promise((resolve, reject) => {
      this.web3.eth.getAccounts()
        .then((data) => {
          this.accounts = data;
          resolve(data);
          return data;
        })
        .catch((err) => {
          reject(err);
        });
      }),
      new Promise((resolve, reject) => {
        this.web3.eth.net.getId()
          .then((data) => {
            this.networkId = data;
            resolve(data);
            return data;
          })
          .catch((err) => {
            reject(err);
          })
        })
      ]);
  }

  initContractDef(artifact) {
    this.contractdef = new this.web3.eth.Contract(artifact.abi);
    this.bytecode = artifact.bytecode;
  }

  async setup(address="", pkey="") {
    this.initProvider();
    this.initProvisioningAccount(address, pkey);
    await this.initAccounts();
  }

  async deploy(account = null) {
    account = this.web3.utils.isAddress(account) ? account : this.provAccount;
    return new Promise((resolve, reject) => {
      if (process.env.NODE_ENV === "production") {
        this.contractdef.options.data = this.bytecode;
        const deployTx = this.contractdef.deploy();
        const deployedContract = deployTx.send({
          from: account,
          gas: 5000000,
        })
        .then((deployment) => {
          console.log("[Prod] deployed at: ", deployment.options.address);
          this.instance = deployment;
          this.address = deployment.options.address;
          resolve(deployment);
          return deployment;
        })
        .catch((err) => {
          console.error(err);
          reject(err);
          return err;
        });
      } else {
        this.contractdef.deploy({data: this.bytecode})
          .send({
            from: account,
            gas: 5000000,
          })
          .then((deployment) => {
            this.instance = deployment;
            this.address = deployment.options.address;
            resolve(deployment);
            return deployment;
          })
          .catch((err) => {
            console.error(err);
            reject(err);
            return err;
          });
      }
    });
  }
}

export default Web3Deployer;
