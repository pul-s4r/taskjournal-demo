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
    const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      formData.append("files", files[i]);
    }
    formData.set("info", JSON.stringify({
      "name": name,
      "type": type,
      "link" : "",
      "main": main
    }));
    const options = {
      method: "POST",
      headers: {
        // "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${Utils.getToken()}`,
      },
      // mode: "no-cors",
      body: formData,
    };
    var result = fetch(`${serverurl}${"/contract/definition/add"}`, options)
      .then((res) => {
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
  }
};

export default ContractAPI;
