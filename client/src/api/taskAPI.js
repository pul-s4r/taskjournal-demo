import Utils from './utils.js';

const serverurl = 'http://localhost:8000';

const TaskAPI = {
  getTasks: () => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Utils.getToken()}`,
      }
    };
    var result = fetch(`${serverurl}${"/getTasks"}`, options)
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
  createTask: (name, desc, due, fee) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${Utils.getToken()}`,
      },
      body: JSON.stringify({
        "name": name,
        "desc": desc,
        "due": due,
        "fee": fee,
      }),
    };

    var result = fetch(`${serverurl}${"/create"}`, options)
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
  },
  modifyTask: (id, desc, reason) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${Utils.getToken()}`,
      },
      body: JSON.stringify({
        "id": id,
        "desc": desc,
        "reason": reason,
      }),
    };

    var result = fetch(`${serverurl}${"/modify"}`, options)
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
  },
  delayTask: (id, numDays, reason) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${Utils.getToken()}`,
      },
      body: JSON.stringify({
        "id": id,
        "numDays": numDays,
        "reason": reason,
      }),
    };

    var result = fetch(`${serverurl}${"/delay"}`, options)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error(`Error in call to delayTask: ${res.json()}`);
        }
      })
      .catch((error) => {
        console.warn(`API_ERROR: ${error}`);
      });
    return result;
  },
  completeTask: (id, reason) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${Utils.getToken()}`,
      },
      body: JSON.stringify({
        "id": id,
        "reason": reason,
      }),
    };

    var result = fetch(`${serverurl}${"/complete"}`, options)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          // throw new Error(`Error in call to completeTask: ${res.json()}`);
          console.log(`Error in call to completeTask: ${res.json()}`);
          return res.json();
        }
      })
      .catch((error) => {
        console.warn(`API_ERROR: ${error}`);
        return {'status': 'Error', 'error': error};
      });
    return result;
  },
  isFinalised: () => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Utils.getToken()}`,
      }
    };
    var result = fetch(`${serverurl}${"/isFinalised"}`, options).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        console.log(`Error in call to completeTask: ${res.json()}`);
        return res.json();
      }
    })
    .catch((error) => {
      console.warn(`API_ERROR: ${error}`);
      return {'status': 'Error', 'error': error};
    });
    return result;
  },
  getAmountPayable: () => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Utils.getToken()}`,
      }
    };
    var result = fetch(`${serverurl}${"/getAmountPayable"}`, options).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        console.log(`Error in call to completeTask: ${res.json()}`);
        return res.json();
      }
    })
    .catch((error) => {
      console.warn(`API_ERROR: ${error}`);
      return {'status': 'Error', 'error': error};
    });
    return result;
  },
  isPaid: () => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Utils.getToken()}`,
      }
    };
    var result = fetch(`${serverurl}${"/isPaid"}`, options).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        console.log(`Error in call to completeTask: ${res.json()}`);
        return res.json();
      }
    })
    .catch((error) => {
      console.warn(`API_ERROR: ${error}`);
      return {'status': 'Error', 'error': error};
    });
    return result;
  },
  isReleased: () => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Utils.getToken()}`,
      }
    };
    var result = fetch(`${serverurl}${"/isReleased"}`, options).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        console.log(`Error in call to completeTask: ${res.json()}`);
        return res.json();
      }
    })
    .catch((error) => {
      console.warn(`API_ERROR: ${error}`);
      return {'status': 'Error', 'error': error};
    });
    return result;
  },
  getContract: () => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Utils.getToken()}`,
      }
    };
    var result = fetch(`${serverurl}${"/contractAddress"}`, options).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        console.log(`Error in call to completeTask: ${res.json()}`);
        return res.json();
      }
    })
    .catch((error) => {
      console.warn(`API_ERROR: ${error}`);
      return {'status': 'Error', 'error': error};
    });
    return result;
  },
  getOwnerAccount: () => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Utils.getToken()}`,
      }
    };
    var result = fetch(`${serverurl}${"/ownerAddress"}`, options).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        console.log(`Error in call to completeTask: ${res.json()}`);
        return res.json();
      }
    })
    .catch((error) => {
      console.warn(`API_ERROR: ${error}`);
      return {'status': 'Error', 'error': error};
    });
    return result;
  },
  getOwnerAccountBalance: () => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Utils.getToken()}`,
      }
    };
    var result = fetch(`${serverurl}${"/ownerBalance"}`, options).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        console.log(`Error in call to completeTask: ${res.json()}`);
        return res.json();
      }
    })
    .catch((error) => {
      console.warn(`API_ERROR: ${error}`);
      return {'status': 'Error', 'error': error};
    });
    return result;
  },
  getContractorAccountBalance: () => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Utils.getToken()}`,
      }
    };
    var result = fetch(`${serverurl}${"/contractorBalance"}`, options).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        console.log(`Error in call to completeTask: ${res.json()}`);
        return res.json();
      }
    })
    .catch((error) => {
      console.warn(`API_ERROR: ${error}`);
      return {'status': 'Error', 'error': error};
    });
    return result;
  },
  getContractBalance: () => {
    const options = {
      method: "GET",
      headers: {
        Authorization: `Bearer ${Utils.getToken()}`,
      }
    };
    var result = fetch(`${serverurl}${"/smcBalance"}`, options).then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        console.log(`Error in call to completeTask: ${res.json()}`);
        return res.json();
      }
    })
    .catch((error) => {
      console.warn(`API_ERROR: ${error}`);
      return {'status': 'Error', 'error': error};
    });
    return result;
  },
  finalise: () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${Utils.getToken()}`,
      },
    };

    var result = fetch(`${serverurl}${"/finalise"}`, options)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          // throw new Error(`Error in call to completeTask: ${res.json()}`);
          console.log(`Error in call to completeTask: ${res.json()}`);
          return res.json();
        }
      })
      .catch((error) => {
        console.warn(`API_ERROR: ${error}`);
        return {'status': 'Error', 'error': error};
      });
    return result;
  },
  payFromOwner: async (value) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${Utils.getToken()}`,
      },
      body: JSON.stringify({
        "value": value,
      }),
    };

    var result = fetch(`${serverurl}${"/payContract"}`, options)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          // throw new Error(`Error in call to completeTask: ${res.json()}`);
          console.log(`Error in call to completeTask: ${res.json()}`);
          return res.json();
        }
      })
      .catch((error) => {
        console.warn(`API_ERROR: ${error}`);
        return {'status': 'Error', 'error': error};
      });
    return result;
  },
  transferToContractor: () => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
        Authorization: `Bearer ${Utils.getToken()}`,
      },
    };

    var result = fetch(`${serverurl}${"/releaseFunds"}`, options)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          console.log(`Error in call to completeTask: ${res.json()}`);
          return res.json();
        }
      })
      .catch((error) => {
        console.warn(`API_ERROR: ${error}`);
        return {'status': 'Error', 'error': error};
      });
    return result;
  },
};

export default TaskAPI;
