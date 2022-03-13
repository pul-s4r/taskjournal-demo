import SolcCompiler from './compiler.solc.js';

const solccompiler = new SolcCompiler();
const prefix = "../../contracts";
var filenames = ["Migrations.sol", "PayableBasic.sol", "TaskJournal.sol"];
// filenames = filenames.map((elem) => prefix + "/" + elem);
await solccompiler.buildSourcesFromStorage("../../contracts", ...filenames);

console.log("Input: ", solccompiler.input);

const result = await solccompiler.compile();
// console.log("Result: ", result);

console.log("PayableBasic: ", result.contracts['PayableBasic.sol']);
