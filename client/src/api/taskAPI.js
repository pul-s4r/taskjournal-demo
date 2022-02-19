const serverurl = 'http://localhost:8000';

const TaskAPI = {
  getTasks: () => {
    const options = {
      method: "GET",
    };
    var result = fetch(`${serverurl}${"/getTasks"}`, options)
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
  createTask: (name, desc, due, fee) => {
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8"
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
        "Content-Type": "application/json;charset=utf-8"
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
        "Content-Type": "application/json;charset=utf-8"
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
        "Content-Type": "application/json;charset=utf-8"
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

};

export default TaskAPI;