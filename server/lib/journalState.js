import Web3 from 'web3';
import TruffleContract from '@truffle/contract';
import { readFile } from 'fs/promises';

// import artifact from '../../build/contracts/TaskJournal.json';
import AccountActions from './accountActions.js';
// import artifact from '../temp/artifact.js';
const artifact = JSON.parse(
  await readFile(new URL('../../build/contracts/TaskJournal.json', import.meta.url))
);

class JournalState {
  constructor(config) {
    this.config = config;
    this.provider = null;
  }

  initProvider() {
    const { ethereumUrl } = this.config;
    this.provider = new Web3.providers.HttpProvider(ethereumUrl);
  }

  setup() {
    this.initProvider();
    this.web3 = new Web3(this.provider);

    this.contractdef = TruffleContract(artifact);
    this.contractdef.setProvider(this.web3.currentProvider);

    this.networks = Object.keys(artifact.networks);
    this.network = this.networks[this.networks.length - 1];
    this.address = artifact.networks[this.network].address;

    const contractorAccPromise = new Promise((resolve, reject) => {
      AccountActions.getAccountIndexed(this.web3, 1).then((account) => {
        this.contractorAccount = account;
        resolve(this.contractorAccount);
      });
    });

    return new Promise((resolve, reject) => {
      AccountActions.getAccount(this.web3)
        .then((account) => {
          this.ownerAccount = account;
          return this.contractdef.at(this.address);
        })
        .then((instance) => {
          this.instance = instance;
          resolve(instance);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  getOwnerAccount() {
    return this.ownerAccount;
  }

  setOwnerAccount(newAddress) {
    try {
      if (this.web3.utils.isAddress(newAddress)) {
        this.ownerAccount = newAddress;
        this.instance.setOwner(newAddress, {from: this.ownerAccount, gas:100000});
      } else { console.log("INVALID"); }
    } catch (error) {
      console.log("ERROR: ", error);
    }
  }

  getContractorAccount() {
    return this.contractorAccount;
  }

  setContractorAccount(newAddress) {
    try {
      if (this.web3.utils.isAddress(newAddress)) {
        this.contractorAccount = newAddress;
        this.instance.setOwner(newAddress, {from: this.ownerAccount, gas:100000});
      } else { console.log("INVALID"); }
    } catch (error) {
      console.log("ERROR: ", error);
    }
  }
}

export default JournalState;
