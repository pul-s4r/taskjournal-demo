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
  createTask: (name, desc, timestr) => {
    const options = {};

    var result = "";
  },
  modifyTask: (id, desc, reason) => {
    const options = {};

    var result = "";
  },
  delayTask: (id, numDays, reason) => {
    const options = {};

    var result = "";
  }
};

export default TaskAPI;
