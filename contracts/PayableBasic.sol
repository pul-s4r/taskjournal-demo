// SPDX-License-Identifier: MIT
// Adapted from https://solidity-by-example.org/payable/
pragma solidity ^0.8.10;

contract PayableBasic {
    // Payable address can receive Ether
    address payable public owner;
    address payable public payee;
    bool public released;

    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    constructor() payable {
        owner = payable(msg.sender);
        released = false;
    }

    function getBalance() view public returns (uint) {
      return address(this).balance;
    }

    function setPayee(address payable _from) public {
      payee = _from;
    }

    function setOwner(address payable _from) public {
      owner = _from;
    }

    function deposit() public virtual payable {}

    // @notice Will receive any eth sent to the contract
    receive () external payable {}

    function withdraw() public virtual {
        uint amount = address(this).balance;

        (bool success, ) = owner.call{value: amount}("");
        require(success, "Failed to send Ether");
    }

    function transferToAddress(address payable _to, uint _amount) addressIsValid(_to) public virtual {
        (bool success, ) = _to.call{value: _amount}("");
        require(success, "Failed to send Ether");
        emit Transfer(owner, _to, _amount);
    }

    function transfer(uint _amount) addressIsValid(payee) onlyOwner public virtual {
      transferToAddress(payee, _amount);
      released = true;
    }

    modifier addressIsValid(address payable _to) {
      if (_to != address(_to)) {
        revert();
      }
      _;
    }

    modifier onlyOwner() {
      require(msg.sender == owner, 'Not owner');
      _;
    }
}
