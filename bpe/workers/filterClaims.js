const { Client, logger } = require("camunda-external-task-client-js");
const { Variables } = require("camunda-external-task-client-js");
const fetch = import("node-fetch");
const axios = require('axios');

// configuration for the Client:
//  - 'baseUrl': url to the Process Engine
//  - 'logger': utility to automatically log important events
const config = { baseUrl: "http://localhost:8080/engine-rest", use: logger };

// create a Client instance with custom configuration
const client = new Client(config);

// susbscribe to the topic: 'creditScoreChecker'
client.subscribe("ScreenDetails", async function({ task, taskService }) {
  // Put your business logic
  const id = task.variables.get("id");
  const numDays = task.variables.get("numDays");
  const reason = task.variables.get("reason");

  // Reason approval logic: must contain "impact" or "circumstances"
  // const pattern = /^.*(impact|circumstances).*$/;
  const pattern = /(impact|circumstances)/;
  // const notEmpty = (value) => typeof value !== 'undefined';
  // const found = pattern.exec(reason); - use match for all groups, found.every(notEmpty)
  console.log(`Running test on: ${reason}`);
  const found = pattern.test(reason);
  console.log(`Result: ${found}`);
  const response = found === true ? "Change approved" : "Change rejected: insufficient reason";
  console.log(`Response: ${response}`);
  const processVariables = new Variables();
  processVariables.set("response", response);

  if (found === true) {
    // complete the task
    await taskService.complete(task, processVariables);
  } else {
    // throw a BPMN error
    await taskService.handleBpmnError(task, "REJECT_CHANGE", "Change rejected: insufficient reason", processVariables);
  }
});

client.subscribe("ApproveClaimFinishSuccess", async function({ task, taskService }) {
  // Query server with amend request
  console.log("Delay approved, notifying client");

  const processVariables = new Variables();
  await taskService.complete(task, processVariables);
  axios.post(`http://localhost:8000/delayOutcome`, {
    id: task.variables.get("id"), 
    processId: task.executionId,
    processDefinitionId: task.processDefinitionId,
    outcome: true
  }).then((response) => {
    console.log(`Message sent: approved with response ${response}`);
  }).catch((error) => {
      console.log(`Notification error: ${error}`);
  });


});

client.subscribe("ApproveClaimFinishFailure", async function({ task, taskService }) {
  // Send failure status
  console.log("Delay rejected, notifying client");

  const processVariables = new Variables();
  await taskService.complete(task, processVariables);

  axios.post(`http://localhost:8000/delayOutcome`, {
    id: task.variables.get("id"), 
    processId: task.executionId,
    processDefinitionId: task.processDefinitionId,
    outcome: false
  }).then((response) => {
    console.log(`Message sent: rejected with response ${response}`);
  }).catch((error) => {
      console.log(`Notification error: ${error}`);
  });

});
