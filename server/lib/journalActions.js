import JournalState from './journalState.js';

const config = {
  ethereumUrl: 'http://localhost:9545',
};

var taskJournal = new JournalState(config);
taskJournal.setup()
  // .then(() => {
  //   return taskJournal.init();
  // })
  .then(() => {
    console.log('Successfully initialised contract state');
    console.log('at address: ', taskJournal.address);
    console.log('using account: ', taskJournal.account);
    // console.log("contract member 'createTask': ", taskJournal.instance.createTask);
  })
  .catch((error) => {
    console.error(`Error initialising contract state: ${error}`);
  })
;

// console.log('State: ', taskJournal.instance);
// console.log('address: ', taskJournal.address);
// console.log('account: ', taskJournal.account);

const JournalActions = {
  // rewrite to accept taskjournal
  getTasks: async (req, res) => {
    // try {
    //   res.status(200).json({"message": "Test"});
    // } catch (error) {
    //   res.status(400).json({"error": error});
    // }
    return new Promise((resolve, reject) => {
      taskJournal.getTaskIds()
        .then((taskIds) => {
          const promises = [];
          taskIds.forEach((taskId) => {
            promises.push(taskJournal.instance.getTask(taskId));
          });
          return Promise.all(promises);
        })
        .then((tasks) => {
          resolve(tasks);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  createTask: async (req, res) => {
    // let name = data.name;
    // let desc = data.description;
    // let due  = data.dueDate; // check
    // console.log("Request payload", req);
    let { name, desc, due } = req.body;
    due = new Date(due);
    // console.log("contract member 'createTask': ", taskJournal.instance.createTask);
    console.log("Call data for create: ", req.body);
    console.log("Due date: ", due);
    return new Promise((resolve, reject) => {
      taskJournal.instance.createTask(name, desc, Math.floor(due.getTime()/1000), {from: taskJournal.account, gas:1000000})
        .then(() => {
          console.log('Attempted task create');
          res.status(200).json({'status': 'Success'});
        })
        .catch((error) => {
          console.log(`Error encountered in create task: ${error}`);
          res.status(400).json({'error': error});
        });
    });
  },
  modifyTaskDesc: async (data) => {
    // let id = data.id;
    // let desc = data.description;
    // let reas  = data.reason; // check
    let { id, desc, reason } = data;
    return new Promise((resolve, reject) => {
      taskJournal.modifyTaskDesc(id, desc, reason)
        .then(() => {
          console.log('Attempted task modify');
        })
        .catch((error) => {
          console.log(`Error encountered in modify task: ${error}`)
        });
    });
  },
  delayTask: async (data) => {
    // let dueDate = data.newDueDate;
    // let numDays = data.numDays;
    // let reason  = data.reason; // check
    let { id, numDays, reason } = data;
    return new Promise((resolve, reject) => {
      taskJournal.delayTaskByDays(id, numDays, reason)
        .then(() => {
          console.log('Attempted task delay');
        })
        .catch((error) => {
          console.log(`Error encountered in delay task: ${error}`)
        });
    });
  }
}

export default JournalActions;
