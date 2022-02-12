import Web3 from 'web3';
import TruffleContract from '@truffle/contract';

import artifact from '../../build/contracts/TaskJournal.json';
import JournalActions from './journalActions.js';

class App {
  constructor(config) {
    this.config = config;
  }

  setup() {}
}

export default App;
