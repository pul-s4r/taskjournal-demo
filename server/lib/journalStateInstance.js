import JournalState from './journalState.js';

import { readFile } from 'fs/promises';

const config = JSON.parse(
  await readFile(new URL('../appconfig.json', import.meta.url))
);

var taskJournal = new JournalState(config);
taskJournal.setup()
  .then(() => {
    console.log('Successfully initialised contract state');
    console.log('at address: ', taskJournal.address);
    console.log('using account: ', taskJournal.ownerAccount);
  })
  .catch((error) => {
    console.error(`Error initialising contract state: ${error}`);
  })
;

export default taskJournal;
