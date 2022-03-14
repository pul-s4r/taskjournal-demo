import Web3 from 'web3';

import BaseDeployer from './deployer.base.js';

class Web3Deployer {
  constructor(config) {
    this.config = config;

    this.provider = null;
    this.instance = null;
    this.bytecode = null;
  }

  initProvider() {
    const { ethereumUrl } = this.config;
    if (!ethereumUrl) {
      ethereumUrl = "http://localhost:8545";
    }
    this.provider = new Web3.providers.HttpProvider(ethereumUrl);
    this.web3 = new Web3(this.provider);
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

  async setup() {
    this.initProvider();
    await this.initAccounts();
  }

  async deploy(account = null) {
    account = this.web3.utils.isAddress(account) ? account : this.accounts[0];
    return new Promise((resolve, reject) => {
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
    });
  }
}

export default Web3Deployer;
