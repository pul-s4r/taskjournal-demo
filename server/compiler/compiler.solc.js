import solc from 'solc';
import linker from 'solc/linker.js';
import { readFile } from 'fs/promises';

class SolcCompiler {
  constructor() {
    this.compiler = solc;
    this.input = {
      language: "Solidity",
      sources: {},
      settings: {
        outputSelection: {
          '*': {
            '*': ['*']
          }
        }
      },
    };
  }

  async buildSourcesFromStorage(prefix="../../contracts", ...filenames) {
    var sources = await Promise.all(
      filenames.map(async (file) => {
          try {
            const contents = await readFile(new URL(prefix + "/" + file, import.meta.url));
            return [file, {content: contents.toString()}];
          } catch (error) {
            throw new Error(error);
          }
        }
      )
    );
    this.input.sources = Object.fromEntries(new Map([...sources]));
  }

  async appendSourcesFromStorage(prefix="../../contracts", filename) {
    const contents = await readFile(new URL(file, import.meta.url));
    this.input.sources = {... sources, [filename]: {content: contents}};
  }

  async appendSources(filename, contents) {
    // assert contents is a string
    if (typeof filename !== 'string' || typeof contents !== 'string') {
      throw "Assertion failed: either filename or source is not a string";
    }
    this.input.sources = {... this.input.sources, [filename]: {content: contents}};
  }

  async clearSources() {
    this.input.sources = {};
  }

  async compile() {
    try {
      const result = this.input ? this.compiler.compile(JSON.stringify(this.input)) : null;
      return JSON.parse(result);
    } catch (error) {
      throw new Error(error);
    }
  }
}

export default SolcCompiler;
