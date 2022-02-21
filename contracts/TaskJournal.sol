// SPDX-License-Identifier: MIT
pragma solidity >=0.5.9;

import './PayableBasic.sol';

contract TaskJournal is PayableBasic {
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
  bool finalised = false;

  event TaskCreated(uint id, string name, string description, uint dateCreated, uint dateDue, uint fee, bool complete);
  event TaskModifiedDesc(uint id, string oldDescription, string newDescription, string reason);
  event TaskModifiedDate(uint id, uint oldDate, uint newDate, string reason);
  event TaskModifiedFee(uint id, uint oldFee, uint newFee, string reason);
  event TaskCompleted(uint id, string reason);
  event ContractFinalised();

  constructor() {

  }

  // Fill in this function ...
  function createTask(string memory _name, string memory _description, uint _dateDue, uint _fee) contractNotFinalised public {
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

  function modifyTaskDesc(uint id, string memory _newDescription, string memory _reason) taskExists(id) contractNotFinalised public {
    string memory _oldDescription = tasks[id].description;
    tasks[id].description = _newDescription;
    emit TaskModifiedDesc(id, _oldDescription, _newDescription, _reason);
  }

  function modifyTaskDate(uint id, uint _newDate, string memory _reason) taskExists(id) contractNotFinalised public {
    uint _oldDate = tasks[id].dateDue;
    tasks[id].dateDue = _newDate;
    emit TaskModifiedDate(id, _oldDate, _newDate, _reason);
  }

  function modifyTaskFee(uint id, uint _newFee, string memory _reason) taskExists(id) contractNotFinalised public {
    uint _oldFee = tasks[id].fee;
    tasks[id].dateDue = _newFee;
    emit TaskModifiedFee(id, _oldFee, _newFee, _reason);
  }

  function delayTaskByDays(uint id, uint _numDays, string memory _reason) taskExists(id) contractNotFinalised public {
      modifyTaskDate(id, tasks[id].dateDue + _numDays * 1 days, _reason);
  }

  function markComplete(uint id, string memory _reason) taskExists(id) taskIsIncomplete(id) contractNotFinalised public {
    tasks[id].complete = true;
    emit TaskCompleted(id, _reason);
  }

  function sumFeeTotal() public view returns(uint) {
    uint total = 0;
    for (uint i = 0; i < taskIdCtr; i++) {
      total = total + tasks[i].fee;
    }
    return total;
  }

  function sumFeeCompleted() public view returns (uint) {
    uint total = 0;
    for (uint i = 0; i < taskIdCtr; i++) {
      total = tasks[i].complete == true ? total + tasks[i].fee : total;
    }
    return total;
  }

  function isPaid() public view returns (bool) {
    return address(this).balance >= sumFeeCompleted();
  }

  function isComplete() public view returns (bool) {
    for (uint i = 0; i < taskIdCtr; i++) {
      if (!tasks[i].complete) { return false; }
    }
    return true;
  }
  
  function isFinalised() public view returns (bool) {
    return finalised; 
  }

  function markFinalised() contractNotFinalised onlyOwner public {
    finalised = true;
    emit ContractFinalised();
  }

  function deposit() override public payable contractFinalised {
    super.deposit();
  }

  function withdraw() override public contractFinalised {
    super.withdraw();
  }

  function transfer(uint _amount) override addressIsValid(payee) onlyOwner contractFinalised public {
    super.transfer(_amount);
  }

  modifier taskExists(uint id) {
    if(tasks[id].id <= 0) {
      revert();
    }
    _;
  }

  modifier taskIsIncomplete(uint id) {
    if (tasks[id].complete) {
      revert();
    }
    _;
  }

  modifier contractNotFinalised() {
    if (finalised) {
      revert();
    }
    _;
  }

  modifier contractFinalised() {
    if (!finalised) {
      revert();
    }
    _;
  }
}
