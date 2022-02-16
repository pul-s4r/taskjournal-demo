import JournalState from './journalState.js';
import fetch from "node-fetch";
import axios from 'axios';

const config = {
  ethereumUrl: 'http://localhost:9545',
};
const bpeBaseUrl = 'http://localhost:8080/engine-rest';
const bpeProcessName = 'ApproveClaim';
const bpeEndpoint = `/process-definition/key/${bpeProcessName}/start`;

/* TODO: Set up long polling of camunda instance */
/* TODO: Convert data structure to map*/
var bpeProcessId = {};
var bpeProcessDefId = {};
// const historicalEndpoint = `/history/variable-instance?variableName=${"approved"}?processInstanceId=${processInstanceId}`;

const delayTaskActionStateDefault = {
  id: 0,
  numDays: 0,
  reason: "",
};

var delayTaskActionState = {};
// ... {[id]: {numDays: 2, reason: "Something"}}

var taskJournal = new JournalState(config);
taskJournal.setup()
  .then(() => {
    console.log('Successfully initialised contract state');
    console.log('at address: ', taskJournal.address);
    console.log('using account: ', taskJournal.account);
  })
  .catch((error) => {
    console.error(`Error initialising contract state: ${error}`);
  })
;

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

          return Promise.all(taskList);
        })
        .then((tasks) => {
          res.status(200).json({'status': 'Success', 'payload': tasks});
          resolve(tasks);
        })
        .catch((error) => {
          reject(error);
          res.status(400).json({'status': 'Error', 'error': error});
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
          res.status(400).json({'status': 'Error', 'error': error});
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
          res.status(400).json({'status': 'Error', 'error': error});
        });
    });
  },
  modifyTaskDesc: async (req, res) => {
    let { id, desc, reason } = req.body;
    return new Promise((resolve, reject) => {
      taskJournal.instance.modifyTaskDesc(Number(id), desc, reason, {from: taskJournal.account, gas:1000000})
        .then(() => {
          console.log('Attempted task modify');
          res.status(200).json({'payload': 'Success'});
        })
        .catch((error) => {
          console.log(`Error encountered in modify task: ${error}`)
          res.status(400).json({'status': 'Error', 'error': error});
        });
    });
  },
  delayTaskRequest: async (req, res) => {
    // Fill this in with call to Camunda process engine
    let { id, numDays, reason } = req.body;
    const vars = {
      "variables": {
        "id": {
          "value": id,
          "type": "Long"
        },
        "numDays": {
          "value": numDays,
          "type": "Long"
        },
        "reason": {
          "value": reason,
          "type": "String"
        },
        "approved": {
          "value": "CLAIM_PENDING",
          "type": "String"
        }
      },
      "businessKey": null
    };

    // Start task on process engine
    // TODO: Rewrite to poll the task engine for the outcome variable
    await axios.post(`${bpeBaseUrl}${bpeEndpoint}`, vars)
      .then((response) => { return response.data; })
      .then((data) => {
        bpeProcessId[id] = data.id;
        bpeProcessDefId[id] = data.definitionId;
        const reqData = req.body;
        delayTaskActionState[reqData.id] = {id: reqData.id, numDays: reqData.numDays, reason: reqData.reason};
        console.log("DelayTaskActionStateHash: ", delayTaskActionState);
        return Promise.resolve(data);
      }).catch((error) => {
        console.log(`Error requesting delaying task: ${error}`);
        res.status(400).json({'status': 'Failure', 'error': error});
        return Promise.reject(error);
      });

    return new Promise((resolve, reject) => {
      res.status(200).json({'status': 'Pending'});
    });
  },
  delayTaskOutcome: async (req, res) => {
    // Do processing
    const { id, processId, processDefinitionId, outcome } = req.body;
    var result = {};
    if (outcome === true && id in delayTaskActionState && typeof bpeProcessId[id] !== 'undefined' && processId === bpeProcessId[id]) {
      console.log("Attempting task delay with data: ", delayTaskActionState[id]);

      req = {
        ...req,
        method: "POST",
        headers: {
          "Content-Type": "application/json;charset=utf-8"
        },
        body: delayTaskActionState[id],
      };

      result = await JournalActions.delayTask(req, res).then((data) => {
        bpeProcessId[id] = '';
        bpeProcessDefId[id] = '';
        delete delayTaskActionState[id];
        return Promise.resolve({'status': 'Success'});
      }).catch((error) => {
        console.log(`Error delaying task: ${error}`);
        return Promise.reject({status: 'Error', error: new Error(error)});
      });

      return new Promise((resolve, reject) => {
        resolve(result);
      });
    } else if (outcome === true) {
      console.log(`Warning: IDs do not match (expected: ${bpeProcessId[id]}, got: ${id})`);
      return new Promise((resolve, reject) => {
        resolve({'status': 'Failure', 'reason': 'Task IDs do not match or not found'});
      });
    } else {
      console.log("Delay attempt rejected");
      return new Promise((resolve, reject) => {
        bpeProcessId[id] = '';
        bpeProcessDefId[id] = '';
        delete delayTaskActionState[id];
        resolve({'status': 'Failure', 'reason': 'Change rejected'});
      });
    }
  },
  delayTask: async (req, res) => {
    let { id, numDays, reason } = req.body;
    return new Promise((resolve, reject) => {
      taskJournal.instance.delayTaskByDays(Number(id), Number(numDays), reason, {from: taskJournal.account, gas:1000000})
        .then(() => {
          console.log('Attempted task delay: success');
          res.status(200).json({'payload': 'Success'});
          resolve({'payload': 'Success'});
        })
        .catch((error) => {
          console.log(`Error encountered in delay task: ${error}`)
          res.status(400).json({'status': 'Error', 'error': error});
          reject({'status': 'Error', 'error': error});
        });
    });
  }
}

export default JournalActions;
