import Utils from './utils.js';

const serverurl = 'http://localhost:8000';

const ContractAPI = {
  getContractDefs: () => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Utils.getToken()}`,
      }
    };
    var result = fetch(`${serverurl}${"/contract/definition"}`, options)
      .then((res) => {
        console.log(res);
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(`Error in call to getTasks: ${res.json()}`);
        }
      })
      .catch((error) => {
        console.warn(`API_ERROR: ${error}`);
      });
    return result;
  },
  addContractDef: (name, type, files, main) => {
    
  }
};

export default ContractAPI;
