// SPDX-License-Identifier: MIT
// Adapted from https://solidity-by-example.org/payable/
pragma solidity ^0.8.10;

contract PayableBasic {
    // Payable address can receive Ether
    address payable public owner;
    address payable public payee;

    event Transfer(address indexed _from, address indexed _to, uint256 _value);

    constructor() payable {
        owner = payable(msg.sender);
    }

    function setPayee(address payable _from) public {
      payee = _from;
    }

    function deposit() public payable {}

    function withdraw() public {
        uint amount = address(this).balance;

        (bool success, ) = owner.call{value: amount}("");
        require(success, "Failed to send Ether");
    }

    function transferToAddress(address payable _to, uint _amount) addressIsValid(_to) public {
        (bool success, ) = _to.call{value: _amount}("");
        require(success, "Failed to send Ether");
        emit Transfer(owner, _to, _amount); 
    }

    function transfer(uint _amount) addressIsValid(payee) public {
      transferToAddress(payee, _amount);
    }

    modifier addressIsValid(address payable _to) {
      if (_to != address(_to)) {
        revert();
      }
      _;
    }
}
