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
    return new Promise((resolve, reject) => {
      taskJournal.instance.getTaskIds()
        .then((taskIds) => {
          const taskList = [];
          taskIds.forEach((taskId) => {
            taskList.push(taskJournal.instance.getTask(taskId));
          });
          res.status(200).json({'status': 'Success', 'payload': taskList});
          return Promise.all(taskList);
        })
        .then((tasks) => {
          resolve(tasks);
        })
        .catch((error) => {
          reject(error);
        });
    });
  },
  getTaskIds: async (req, res) => {
    return new Promise((resolve, reject) => {
      taskJournal.instance.getTaskIds()
        .then((taskIds) => {
          res.status(200).json({'status': 'Success', 'payload': taskIds});
          resolve(taskIds);
        })
        .catch((error) => {
          reject(error);
          res.status(400).json({'error': error});
        });
    });
  },
  createTask: async (req, res) => {
    let { name, desc, due } = req.body;
    due = new Date(due);
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
      taskJournal.instance.modifyTaskDesc(id, desc, reason)
        .then(() => {
          console.log('Attempted task modify');
          res.status(200).json({'payload': 'Success'});
        })
        .catch((error) => {
          console.log(`Error encountered in modify task: ${error}`)
          res.status(400).json({'error': error});
        });
    });
  },
  delayTask: async (data) => {
    // let dueDate = data.newDueDate;
    // let numDays = data.numDays;
    // let reason  = data.reason; // check
    let { id, numDays, reason } = data;
    return new Promise((resolve, reject) => {
      taskJournal.instance.delayTaskByDays(id, numDays, reason)
        .then(() => {
          console.log('Attempted task delay');
          res.status(200).json({'payload': 'Success'});
        })
        .catch((error) => {
          console.log(`Error encountered in delay task: ${error}`)
          res.status(400).json({'error': error});
        });
    });
  }
}

export default JournalActions;
