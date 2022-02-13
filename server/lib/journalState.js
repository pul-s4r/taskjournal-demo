import Web3 from 'web3';
import TruffleContract from '@truffle/contract';

// import artifact from '../../build/contracts/TaskJournal.json';
import AccountActions from './accountActions.js';
import artifact from '../temp/artifact.js';


class JournalState {
  constructor(config) {
    this.config = config;
  }

  setup() {
    const { ethereumUrl } = this.config;
    this.web3 = new Web3(new Web3.providers.HttpProvider(ethereumUrl));

    this.contractdef = TruffleContract(artifact);
    this.contractdef.setProvider(this.web3.currentProvider);

    this.networks = Object.keys(artifact.networks);
    this.network = this.networks[this.networks.length - 1];
    this.address = artifact.networks[this.network].address;

    // this.account = async () => {
    //   var account = await AccountActions.getAccount(this.web3);
    //   return account;
    // };
    // this.account = AccountActions.getAccount(this.web3);
    // this.instance = this.contractdef.at(this.address);

    return new Promise((resolve, reject) => {
      AccountActions.getAccount(this.web3)
        .then((account) => {
          this.account = account;
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

  // getTasks() {
  //   var tasks = await JournalActions.getTasks();
  //   return tasks;
  // }
  //
  // createTask(name, desc, due) {
  //   await JournalActions.createTask(name, desc, due);
  // }
  //
  // modifyTaskDesc() {
  //   await JournalActions.modifyTaskDesc
  // }
  //
  // delayTask() {
  //
  // }
}

export default JournalState;
