// SPDX-License-Identifier: MIT
pragma solidity >=0.5.9;

contract TaskJournal {
  struct TaskEntry {
    uint id;
    string name;
    string description;
    uint dateCreated;
    uint dateDue;
  }

  mapping(uint => TaskEntry) tasks;
  uint[] taskIds;
  uint lastTaskId = 1;

  event TaskCreated(uint id, string name, string description, uint dateCreated, uint dateDue);
  event TaskModifiedDesc(uint id, string oldDescription, string newDescription, string reason);
  event TaskModifiedDate(uint id, uint oldDate, uint newDate, string reason);

  constructor() {

  }

  function createTask(uint id, string memory _name, string memory _description, uint _dateDue) public {

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

  function delayTaskByDays(uint id, uint _from, uint _numDays, string memory _reason) taskExists(id) public {
      modifyTaskDate(id, _from + _numDays * 1 days, _reason);
  }

  modifier taskExists(uint id) {
    if(tasks[id].id == 0) {
      revert();
    }
    _;
  }
}
