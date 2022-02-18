// SPDX-License-Identifier: MIT
pragma solidity >=0.5.9;

contract TaskJournal {
  struct TaskEntry {
    uint id;
    string name;
    string description;
    uint dateCreated;
    uint dateDue;
    uint fee;
    bool complete;
  }

  mapping(uint => TaskEntry) tasks;
  uint[] taskIds;
  uint taskIdCtr = 0;

  event TaskCreated(uint id, string name, string description, uint dateCreated, uint dateDue, uint fee, bool complete);
  event TaskModifiedDesc(uint id, string oldDescription, string newDescription, string reason);
  event TaskModifiedDate(uint id, uint oldDate, uint newDate, string reason);
  event TaskModifiedFee(uint id, uint oldFee, uint newFee, string reason);
  event TaskCompleted(uint id);

  constructor() {

  }

  // Fill in this function ...
  function createTask(string memory _name, string memory _description, uint _dateDue, uint _fee) public {
    taskIdCtr++;
    tasks[taskIdCtr] = TaskEntry(taskIdCtr, _name, _description, block.timestamp, _dateDue, _fee, false);
    taskIds.push(taskIdCtr);
    emit TaskCreated(taskIdCtr, _name, _description, block.timestamp, _dateDue, _fee, false);
  }

  function getTaskIds() public view returns(uint[] memory) {
    return taskIds;
  }

  function getTask(uint id) taskExists(id) public view returns(uint, string memory, string memory, uint, uint, uint) {
    return(
      id,
      tasks[id].name,
      tasks[id].description,
      tasks[id].dateCreated,
      tasks[id].dateDue,
      tasks[id].fee
    );
  }

  function getTaskCompletionStatus(uint id) taskExists(id) public view returns(bool) {
    return tasks[id].complete; 
  }

  function modifyTaskDesc(uint id, string memory _newDescription, string memory _reason) taskExists(id) public {
    string memory _oldDescription = tasks[id].description;
    tasks[id].description = _newDescription;
    emit TaskModifiedDesc(id, _oldDescription, _newDescription, _reason);
  }

  function modifyTaskDate(uint id, uint _newDate, string memory _reason) taskExists(id) public {
    uint _oldDate = tasks[id].dateDue;
    tasks[id].dateDue = _newDate;
    emit TaskModifiedDate(id, _oldDate, _newDate, _reason);
  }

  function modifyTaskFee(uint id, uint _newFee, string memory _reason) taskExists(id) public {
    uint _oldFee = tasks[id].fee;
    tasks[id].dateDue = _newFee;
    emit TaskModifiedFee(id, _oldFee, _newFee, _reason);
  }

  function delayTaskByDays(uint id, uint _numDays, string memory _reason) taskExists(id) public {
      modifyTaskDate(id, tasks[id].dateDue + _numDays * 1 days, _reason);
  }

  function markComplete(uint id) taskExists(id) public {
    tasks[id].complete = true;
    emit TaskCompleted(id);
  }

  modifier taskExists(uint id) {
    if(tasks[id].id <= 0) {
      revert();
    }
    _;
  }
}
