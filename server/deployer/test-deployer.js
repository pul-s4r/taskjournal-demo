import Web3 from 'web3';

import { readFile } from 'fs/promises';
import Web3Deployer from './deployer.web3.js';

const artifact = JSON.parse(
  await readFile(new URL('../../build/contracts/TaskJournal.json', import.meta.url))
);
const artifact2 = JSON.parse(
  await readFile(new URL('../../build/contracts/PayableBasic.json', import.meta.url))
);

const w3deployer = new Web3Deployer({ ethereumUrl: "http://localhost:8545" });
await w3deployer.setup();
console.log(w3deployer.accounts);

w3deployer.initContractDef(artifact);
const instance = await w3deployer.deploy();
console.log("Instance: ", instance);

w3deployer.initContractDef(artifact2);
const instance2 = await w3deployer.deploy();
console.log("Instance: ", instance2);
