const artifact = {
  "contractName": "TaskJournal",
  "abi": [
    {
      "inputs": [],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "description",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "dateCreated",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "dateDue",
          "type": "uint256"
        }
      ],
      "name": "TaskCreated",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "oldDate",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "newDate",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "reason",
          "type": "string"
        }
      ],
      "name": "TaskModifiedDate",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "oldDescription",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "newDescription",
          "type": "string"
        },
        {
          "indexed": false,
          "internalType": "string",
          "name": "reason",
          "type": "string"
        }
      ],
      "name": "TaskModifiedDesc",
      "type": "event"
    },
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "_name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_description",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "_dateDue",
          "type": "uint256"
        }
      ],
      "name": "createTask",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "getTaskIds",
      "outputs": [
        {
          "internalType": "uint256[]",
          "name": "",
          "type": "uint256[]"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        }
      ],
      "name": "getTask",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_newDescription",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "_reason",
          "type": "string"
        }
      ],
      "name": "modifyTaskDesc",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_newDate",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_reason",
          "type": "string"
        }
      ],
      "name": "modifyTaskDate",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "id",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "_numDays",
          "type": "uint256"
        },
        {
          "internalType": "string",
          "name": "_reason",
          "type": "string"
        }
      ],
      "name": "delayTaskByDays",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.8.11+commit.d7f03943\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"description\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"dateCreated\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"dateDue\",\"type\":\"uint256\"}],\"name\":\"TaskCreated\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"oldDate\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"newDate\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"reason\",\"type\":\"string\"}],\"name\":\"TaskModifiedDate\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"oldDescription\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"newDescription\",\"type\":\"string\"},{\"indexed\":false,\"internalType\":\"string\",\"name\":\"reason\",\"type\":\"string\"}],\"name\":\"TaskModifiedDesc\",\"type\":\"event\"},{\"inputs\":[{\"internalType\":\"string\",\"name\":\"_name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_description\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"_dateDue\",\"type\":\"uint256\"}],\"name\":\"createTask\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_numDays\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"_reason\",\"type\":\"string\"}],\"name\":\"delayTaskByDays\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"}],\"name\":\"getTask\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"getTaskIds\",\"outputs\":[{\"internalType\":\"uint256[]\",\"name\":\"\",\"type\":\"uint256[]\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"uint256\",\"name\":\"_newDate\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"_reason\",\"type\":\"string\"}],\"name\":\"modifyTaskDate\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"id\",\"type\":\"uint256\"},{\"internalType\":\"string\",\"name\":\"_newDescription\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"_reason\",\"type\":\"string\"}],\"name\":\"modifyTaskDesc\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"kind\":\"dev\",\"methods\":{},\"version\":1},\"userdoc\":{\"kind\":\"user\",\"methods\":{},\"version\":1}},\"settings\":{\"compilationTarget\":{\"project:/contracts/TaskJournal.sol\":\"TaskJournal\"},\"evmVersion\":\"london\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"project:/contracts/TaskJournal.sol\":{\"keccak256\":\"0xbd9e7cfbc6a303e578e0a5d5429e80c99a6edd420881a20c49c17ccbdfc35027\",\"license\":\"MIT\",\"urls\":[\"bzz-raw://7aa7fdf693a4ae693fcb35e40d0f6232ec5519f87a05cdcf3f3d3df0860b61e9\",\"dweb:/ipfs/QmQjZDt8HdGXURj6PvZJXcYgCfqKhYkVDtgiS36BgjrmQo\"]}},\"version\":1}",
  "bytecode": "0x6080604052600160025534801561001557600080fd5b50610d41806100256000396000f3fe608060405234801561001057600080fd5b50600436106100625760003560e01c80631d65e77e1461006757806331e071981461009b57806341a4e30a146100b75780636bbe8b42146100d3578063860d8eeb146100ef578063bcd148051461010b575b600080fd5b610081600480360381019061007c9190610655565b610129565b60405161009295949392919061072a565b60405180910390f35b6100b560048036038101906100b091906108c0565b6102d8565b005b6100d160048036038101906100cc919061092f565b610374565b005b6100ed60048036038101906100e891906108c0565b610379565b005b610109600480360381019061010491906109ba565b6103dc565b005b610113610510565b6040516101209190610b03565b60405180910390f35b600060608060008085600080600083815260200190815260200160002060000154141561015557600080fd5b866000808981526020019081526020016000206001016000808a81526020019081526020016000206002016000808b8152602001908152602001600020600301546000808c8152602001908152602001600020600401548380546101b890610b54565b80601f01602080910402602001604051908101604052809291908181526020018280546101e490610b54565b80156102315780601f1061020657610100808354040283529160200191610231565b820191906000526020600020905b81548152906001019060200180831161021457829003601f168201915b5050505050935082805461024490610b54565b80601f016020809104026020016040519081016040528092919081815260200182805461027090610b54565b80156102bd5780601f10610292576101008083540402835291602001916102bd565b820191906000526020600020905b8154815290600101906020018083116102a057829003601f168201915b50505050509250955095509550955095505091939590929450565b8260008060008381526020019081526020016000206000015414156102fc57600080fd5b600080600086815260200190815260200160002060040154905083600080878152602001908152602001600020600401819055507f2d4bc69de4eb3be4ec23b73d960f3db275148bdb16a3c64f232169323dbb6402858286866040516103659493929190610b86565b60405180910390a15050505050565b505050565b82600080600083815260200190815260200160002060000154141561039d57600080fd5b6103d68462015180856103b09190610c01565b600080888152602001908152602001600020600401546103d09190610c5b565b846102d8565b50505050565b82600080600083815260200190815260200160002060000154141561040057600080fd5b6000806000868152602001908152602001600020600201805461042290610b54565b80601f016020809104026020016040519081016040528092919081815260200182805461044e90610b54565b801561049b5780601f106104705761010080835404028352916020019161049b565b820191906000526020600020905b81548152906001019060200180831161047e57829003601f168201915b505050505090508360008087815260200190815260200160002060020190805190602001906104cb929190610568565b507f152073da0d674386bcf02fb28c8661b514159b93e6be416b63131b8c39d1a381858286866040516105019493929190610cb1565b60405180910390a15050505050565b6060600180548060200260200160405190810160405280929190818152602001828054801561055e57602002820191906000526020600020905b81548152602001906001019080831161054a575b5050505050905090565b82805461057490610b54565b90600052602060002090601f01602090048101928261059657600085556105dd565b82601f106105af57805160ff19168380011785556105dd565b828001600101855582156105dd579182015b828111156105dc5782518255916020019190600101906105c1565b5b5090506105ea91906105ee565b5090565b5b808211156106075760008160009055506001016105ef565b5090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b6106328161061f565b811461063d57600080fd5b50565b60008135905061064f81610629565b92915050565b60006020828403121561066b5761066a610615565b5b600061067984828501610640565b91505092915050565b61068b8161061f565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b838110156106cb5780820151818401526020810190506106b0565b838111156106da576000848401525b50505050565b6000601f19601f8301169050919050565b60006106fc82610691565b610706818561069c565b93506107168185602086016106ad565b61071f816106e0565b840191505092915050565b600060a08201905061073f6000830188610682565b818103602083015261075181876106f1565b9050818103604083015261076581866106f1565b90506107746060830185610682565b6107816080830184610682565b9695505050505050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6107cd826106e0565b810181811067ffffffffffffffff821117156107ec576107eb610795565b5b80604052505050565b60006107ff61060b565b905061080b82826107c4565b919050565b600067ffffffffffffffff82111561082b5761082a610795565b5b610834826106e0565b9050602081019050919050565b82818337600083830152505050565b600061086361085e84610810565b6107f5565b90508281526020810184848401111561087f5761087e610790565b5b61088a848285610841565b509392505050565b600082601f8301126108a7576108a661078b565b5b81356108b7848260208601610850565b91505092915050565b6000806000606084860312156108d9576108d8610615565b5b60006108e786828701610640565b93505060206108f886828701610640565b925050604084013567ffffffffffffffff8111156109195761091861061a565b5b61092586828701610892565b9150509250925092565b60008060006060848603121561094857610947610615565b5b600084013567ffffffffffffffff8111156109665761096561061a565b5b61097286828701610892565b935050602084013567ffffffffffffffff8111156109935761099261061a565b5b61099f86828701610892565b92505060406109b086828701610640565b9150509250925092565b6000806000606084860312156109d3576109d2610615565b5b60006109e186828701610640565b935050602084013567ffffffffffffffff811115610a0257610a0161061a565b5b610a0e86828701610892565b925050604084013567ffffffffffffffff811115610a2f57610a2e61061a565b5b610a3b86828701610892565b9150509250925092565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610a7a8161061f565b82525050565b6000610a8c8383610a71565b60208301905092915050565b6000602082019050919050565b6000610ab082610a45565b610aba8185610a50565b9350610ac583610a61565b8060005b83811015610af6578151610add8882610a80565b9750610ae883610a98565b925050600181019050610ac9565b5085935050505092915050565b60006020820190508181036000830152610b1d8184610aa5565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610b6c57607f821691505b60208210811415610b8057610b7f610b25565b5b50919050565b6000608082019050610b9b6000830187610682565b610ba86020830186610682565b610bb56040830185610682565b8181036060830152610bc781846106f1565b905095945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610c0c8261061f565b9150610c178361061f565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610c5057610c4f610bd2565b5b828202905092915050565b6000610c668261061f565b9150610c718361061f565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610ca657610ca5610bd2565b5b828201905092915050565b6000608082019050610cc66000830187610682565b8181036020830152610cd881866106f1565b90508181036040830152610cec81856106f1565b90508181036060830152610d0081846106f1565b90509594505050505056fea2646970667358221220f22e08c016b301ecb9d3954f9b392c2b633c5136b139cc6ce0b8fac67b82bc5d64736f6c634300080b0033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100625760003560e01c80631d65e77e1461006757806331e071981461009b57806341a4e30a146100b75780636bbe8b42146100d3578063860d8eeb146100ef578063bcd148051461010b575b600080fd5b610081600480360381019061007c9190610655565b610129565b60405161009295949392919061072a565b60405180910390f35b6100b560048036038101906100b091906108c0565b6102d8565b005b6100d160048036038101906100cc919061092f565b610374565b005b6100ed60048036038101906100e891906108c0565b610379565b005b610109600480360381019061010491906109ba565b6103dc565b005b610113610510565b6040516101209190610b03565b60405180910390f35b600060608060008085600080600083815260200190815260200160002060000154141561015557600080fd5b866000808981526020019081526020016000206001016000808a81526020019081526020016000206002016000808b8152602001908152602001600020600301546000808c8152602001908152602001600020600401548380546101b890610b54565b80601f01602080910402602001604051908101604052809291908181526020018280546101e490610b54565b80156102315780601f1061020657610100808354040283529160200191610231565b820191906000526020600020905b81548152906001019060200180831161021457829003601f168201915b5050505050935082805461024490610b54565b80601f016020809104026020016040519081016040528092919081815260200182805461027090610b54565b80156102bd5780601f10610292576101008083540402835291602001916102bd565b820191906000526020600020905b8154815290600101906020018083116102a057829003601f168201915b50505050509250955095509550955095505091939590929450565b8260008060008381526020019081526020016000206000015414156102fc57600080fd5b600080600086815260200190815260200160002060040154905083600080878152602001908152602001600020600401819055507f2d4bc69de4eb3be4ec23b73d960f3db275148bdb16a3c64f232169323dbb6402858286866040516103659493929190610b86565b60405180910390a15050505050565b505050565b82600080600083815260200190815260200160002060000154141561039d57600080fd5b6103d68462015180856103b09190610c01565b600080888152602001908152602001600020600401546103d09190610c5b565b846102d8565b50505050565b82600080600083815260200190815260200160002060000154141561040057600080fd5b6000806000868152602001908152602001600020600201805461042290610b54565b80601f016020809104026020016040519081016040528092919081815260200182805461044e90610b54565b801561049b5780601f106104705761010080835404028352916020019161049b565b820191906000526020600020905b81548152906001019060200180831161047e57829003601f168201915b505050505090508360008087815260200190815260200160002060020190805190602001906104cb929190610568565b507f152073da0d674386bcf02fb28c8661b514159b93e6be416b63131b8c39d1a381858286866040516105019493929190610cb1565b60405180910390a15050505050565b6060600180548060200260200160405190810160405280929190818152602001828054801561055e57602002820191906000526020600020905b81548152602001906001019080831161054a575b5050505050905090565b82805461057490610b54565b90600052602060002090601f01602090048101928261059657600085556105dd565b82601f106105af57805160ff19168380011785556105dd565b828001600101855582156105dd579182015b828111156105dc5782518255916020019190600101906105c1565b5b5090506105ea91906105ee565b5090565b5b808211156106075760008160009055506001016105ef565b5090565b6000604051905090565b600080fd5b600080fd5b6000819050919050565b6106328161061f565b811461063d57600080fd5b50565b60008135905061064f81610629565b92915050565b60006020828403121561066b5761066a610615565b5b600061067984828501610640565b91505092915050565b61068b8161061f565b82525050565b600081519050919050565b600082825260208201905092915050565b60005b838110156106cb5780820151818401526020810190506106b0565b838111156106da576000848401525b50505050565b6000601f19601f8301169050919050565b60006106fc82610691565b610706818561069c565b93506107168185602086016106ad565b61071f816106e0565b840191505092915050565b600060a08201905061073f6000830188610682565b818103602083015261075181876106f1565b9050818103604083015261076581866106f1565b90506107746060830185610682565b6107816080830184610682565b9695505050505050565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b6107cd826106e0565b810181811067ffffffffffffffff821117156107ec576107eb610795565b5b80604052505050565b60006107ff61060b565b905061080b82826107c4565b919050565b600067ffffffffffffffff82111561082b5761082a610795565b5b610834826106e0565b9050602081019050919050565b82818337600083830152505050565b600061086361085e84610810565b6107f5565b90508281526020810184848401111561087f5761087e610790565b5b61088a848285610841565b509392505050565b600082601f8301126108a7576108a661078b565b5b81356108b7848260208601610850565b91505092915050565b6000806000606084860312156108d9576108d8610615565b5b60006108e786828701610640565b93505060206108f886828701610640565b925050604084013567ffffffffffffffff8111156109195761091861061a565b5b61092586828701610892565b9150509250925092565b60008060006060848603121561094857610947610615565b5b600084013567ffffffffffffffff8111156109665761096561061a565b5b61097286828701610892565b935050602084013567ffffffffffffffff8111156109935761099261061a565b5b61099f86828701610892565b92505060406109b086828701610640565b9150509250925092565b6000806000606084860312156109d3576109d2610615565b5b60006109e186828701610640565b935050602084013567ffffffffffffffff811115610a0257610a0161061a565b5b610a0e86828701610892565b925050604084013567ffffffffffffffff811115610a2f57610a2e61061a565b5b610a3b86828701610892565b9150509250925092565b600081519050919050565b600082825260208201905092915050565b6000819050602082019050919050565b610a7a8161061f565b82525050565b6000610a8c8383610a71565b60208301905092915050565b6000602082019050919050565b6000610ab082610a45565b610aba8185610a50565b9350610ac583610a61565b8060005b83811015610af6578151610add8882610a80565b9750610ae883610a98565b925050600181019050610ac9565b5085935050505092915050565b60006020820190508181036000830152610b1d8184610aa5565b905092915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b60006002820490506001821680610b6c57607f821691505b60208210811415610b8057610b7f610b25565b5b50919050565b6000608082019050610b9b6000830187610682565b610ba86020830186610682565b610bb56040830185610682565b8181036060830152610bc781846106f1565b905095945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610c0c8261061f565b9150610c178361061f565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610c5057610c4f610bd2565b5b828202905092915050565b6000610c668261061f565b9150610c718361061f565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115610ca657610ca5610bd2565b5b828201905092915050565b6000608082019050610cc66000830187610682565b8181036020830152610cd881866106f1565b90508181036040830152610cec81856106f1565b90508181036060830152610d0081846106f1565b90509594505050505056fea2646970667358221220f22e08c016b301ecb9d3954f9b392c2b633c5136b139cc6ce0b8fac67b82bc5d64736f6c634300080b0033",
  "immutableReferences": {},
  "generatedSources": [],
  "deployedGeneratedSources": [
    {
      "ast": {
        "nodeType": "YulBlock",
        "src": "0:12808:2",
        "statements": [
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "47:35:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "57:19:2",
                  "value": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "73:2:2",
                        "type": "",
                        "value": "64"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "67:5:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "67:9:2"
                  },
                  "variableNames": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulIdentifier",
                      "src": "57:6:2"
                    }
                  ]
                }
              ]
            },
            "name": "allocate_unbounded",
            "nodeType": "YulFunctionDefinition",
            "returnVariables": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "40:6:2",
                "type": ""
              }
            ],
            "src": "7:75:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "177:28:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "194:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "197:1:2",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "187:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "187:12:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "187:12:2"
                }
              ]
            },
            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
            "nodeType": "YulFunctionDefinition",
            "src": "88:117:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "300:28:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "317:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "320:1:2",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "310:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "310:12:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "310:12:2"
                }
              ]
            },
            "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
            "nodeType": "YulFunctionDefinition",
            "src": "211:117:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "379:32:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "389:16:2",
                  "value": {
                    "name": "value",
                    "nodeType": "YulIdentifier",
                    "src": "400:5:2"
                  },
                  "variableNames": [
                    {
                      "name": "cleaned",
                      "nodeType": "YulIdentifier",
                      "src": "389:7:2"
                    }
                  ]
                }
              ]
            },
            "name": "cleanup_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "361:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "cleaned",
                "nodeType": "YulTypedName",
                "src": "371:7:2",
                "type": ""
              }
            ],
            "src": "334:77:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "460:79:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "517:16:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "526:1:2",
                              "type": "",
                              "value": "0"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "529:1:2",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "revert",
                            "nodeType": "YulIdentifier",
                            "src": "519:6:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "519:12:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "519:12:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "483:5:2"
                          },
                          {
                            "arguments": [
                              {
                                "name": "value",
                                "nodeType": "YulIdentifier",
                                "src": "508:5:2"
                              }
                            ],
                            "functionName": {
                              "name": "cleanup_t_uint256",
                              "nodeType": "YulIdentifier",
                              "src": "490:17:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "490:24:2"
                          }
                        ],
                        "functionName": {
                          "name": "eq",
                          "nodeType": "YulIdentifier",
                          "src": "480:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "480:35:2"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "473:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "473:43:2"
                  },
                  "nodeType": "YulIf",
                  "src": "470:63:2"
                }
              ]
            },
            "name": "validator_revert_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "453:5:2",
                "type": ""
              }
            ],
            "src": "417:122:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "597:87:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "607:29:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "629:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "616:12:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "616:20:2"
                  },
                  "variableNames": [
                    {
                      "name": "value",
                      "nodeType": "YulIdentifier",
                      "src": "607:5:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "672:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "validator_revert_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "645:26:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "645:33:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "645:33:2"
                }
              ]
            },
            "name": "abi_decode_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "575:6:2",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "583:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "591:5:2",
                "type": ""
              }
            ],
            "src": "545:139:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "756:263:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "802:83:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "804:77:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "804:79:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "804:79:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "777:7:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "786:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "773:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "773:23:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "798:2:2",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "769:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "769:32:2"
                  },
                  "nodeType": "YulIf",
                  "src": "766:119:2"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "895:117:2",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "910:15:2",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "924:1:2",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "914:6:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "939:63:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "974:9:2"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "985:6:2"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "970:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "970:22:2"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "994:7:2"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "949:20:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "949:53:2"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "939:6:2"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "726:9:2",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "737:7:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "749:6:2",
                "type": ""
              }
            ],
            "src": "690:329:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1090:53:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1107:3:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "1130:5:2"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "1112:17:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1112:24:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1100:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1100:37:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1100:37:2"
                }
              ]
            },
            "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1078:5:2",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "1085:3:2",
                "type": ""
              }
            ],
            "src": "1025:118:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1208:40:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1219:22:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1235:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "1229:5:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1229:12:2"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "1219:6:2"
                    }
                  ]
                }
              ]
            },
            "name": "array_length_t_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1191:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "1201:6:2",
                "type": ""
              }
            ],
            "src": "1149:99:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1350:73:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1367:3:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "1372:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "1360:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1360:19:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "1360:19:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "1388:29:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "1407:3:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "1412:4:2",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "1403:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1403:14:2"
                  },
                  "variableNames": [
                    {
                      "name": "updated_pos",
                      "nodeType": "YulIdentifier",
                      "src": "1388:11:2"
                    }
                  ]
                }
              ]
            },
            "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "1322:3:2",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "1327:6:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "updated_pos",
                "nodeType": "YulTypedName",
                "src": "1338:11:2",
                "type": ""
              }
            ],
            "src": "1254:169:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1478:258:2",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1488:10:2",
                  "value": {
                    "kind": "number",
                    "nodeType": "YulLiteral",
                    "src": "1497:1:2",
                    "type": "",
                    "value": "0"
                  },
                  "variables": [
                    {
                      "name": "i",
                      "nodeType": "YulTypedName",
                      "src": "1492:1:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1557:63:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dst",
                                  "nodeType": "YulIdentifier",
                                  "src": "1582:3:2"
                                },
                                {
                                  "name": "i",
                                  "nodeType": "YulIdentifier",
                                  "src": "1587:1:2"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1578:3:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1578:11:2"
                            },
                            {
                              "arguments": [
                                {
                                  "arguments": [
                                    {
                                      "name": "src",
                                      "nodeType": "YulIdentifier",
                                      "src": "1601:3:2"
                                    },
                                    {
                                      "name": "i",
                                      "nodeType": "YulIdentifier",
                                      "src": "1606:1:2"
                                    }
                                  ],
                                  "functionName": {
                                    "name": "add",
                                    "nodeType": "YulIdentifier",
                                    "src": "1597:3:2"
                                  },
                                  "nodeType": "YulFunctionCall",
                                  "src": "1597:11:2"
                                }
                              ],
                              "functionName": {
                                "name": "mload",
                                "nodeType": "YulIdentifier",
                                "src": "1591:5:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1591:18:2"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1571:6:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1571:39:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1571:39:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "1518:1:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "1521:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "1515:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1515:13:2"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "1529:19:2",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "1531:15:2",
                        "value": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "1540:1:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1543:2:2",
                              "type": "",
                              "value": "32"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "1536:3:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1536:10:2"
                        },
                        "variableNames": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "1531:1:2"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "1511:3:2",
                    "statements": []
                  },
                  "src": "1507:113:2"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "1654:76:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [
                            {
                              "arguments": [
                                {
                                  "name": "dst",
                                  "nodeType": "YulIdentifier",
                                  "src": "1704:3:2"
                                },
                                {
                                  "name": "length",
                                  "nodeType": "YulIdentifier",
                                  "src": "1709:6:2"
                                }
                              ],
                              "functionName": {
                                "name": "add",
                                "nodeType": "YulIdentifier",
                                "src": "1700:3:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "1700:16:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "1718:1:2",
                              "type": "",
                              "value": "0"
                            }
                          ],
                          "functionName": {
                            "name": "mstore",
                            "nodeType": "YulIdentifier",
                            "src": "1693:6:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "1693:27:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "1693:27:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "1635:1:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "1638:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "1632:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1632:13:2"
                  },
                  "nodeType": "YulIf",
                  "src": "1629:101:2"
                }
              ]
            },
            "name": "copy_memory_to_memory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "1460:3:2",
                "type": ""
              },
              {
                "name": "dst",
                "nodeType": "YulTypedName",
                "src": "1465:3:2",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "1470:6:2",
                "type": ""
              }
            ],
            "src": "1429:307:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1790:54:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "1800:38:2",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "1818:5:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1825:2:2",
                            "type": "",
                            "value": "31"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "1814:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1814:14:2"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "1834:2:2",
                            "type": "",
                            "value": "31"
                          }
                        ],
                        "functionName": {
                          "name": "not",
                          "nodeType": "YulIdentifier",
                          "src": "1830:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "1830:7:2"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "1810:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1810:28:2"
                  },
                  "variableNames": [
                    {
                      "name": "result",
                      "nodeType": "YulIdentifier",
                      "src": "1800:6:2"
                    }
                  ]
                }
              ]
            },
            "name": "round_up_to_mul_of_32",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1773:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "result",
                "nodeType": "YulTypedName",
                "src": "1783:6:2",
                "type": ""
              }
            ],
            "src": "1742:102:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "1942:272:2",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "1952:53:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "1999:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "array_length_t_string_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "1966:32:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "1966:39:2"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "1956:6:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2014:78:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2080:3:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "2085:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "2021:58:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2021:71:2"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "2014:3:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "2127:5:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2134:4:2",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2123:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2123:16:2"
                      },
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2141:3:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "2146:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "copy_memory_to_memory",
                      "nodeType": "YulIdentifier",
                      "src": "2101:21:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2101:52:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2101:52:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2162:46:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "2173:3:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "2200:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "round_up_to_mul_of_32",
                          "nodeType": "YulIdentifier",
                          "src": "2178:21:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2178:29:2"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2169:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2169:39:2"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "2162:3:2"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "1923:5:2",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "1930:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "1938:3:2",
                "type": ""
              }
            ],
            "src": "1850:364:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "2470:596:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "2480:27:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "2492:9:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "2503:3:2",
                        "type": "",
                        "value": "160"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "2488:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2488:19:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2480:4:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "2561:6:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2574:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2585:1:2",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2570:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2570:17:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "2517:43:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2517:71:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2517:71:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2609:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2620:2:2",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2605:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2605:18:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "2629:4:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2635:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "2625:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2625:20:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2598:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2598:48:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2598:48:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2655:86:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "2727:6:2"
                      },
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "2736:4:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "2663:63:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2663:78:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2655:4:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2762:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2773:2:2",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2758:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2758:18:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "2782:4:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2788:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "2778:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2778:20:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "2751:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2751:48:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2751:48:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "2808:86:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value2",
                        "nodeType": "YulIdentifier",
                        "src": "2880:6:2"
                      },
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "2889:4:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "2816:63:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2816:78:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "2808:4:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value3",
                        "nodeType": "YulIdentifier",
                        "src": "2948:6:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "2961:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "2972:2:2",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "2957:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "2957:18:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "2904:43:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2904:72:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2904:72:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value4",
                        "nodeType": "YulIdentifier",
                        "src": "3030:6:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "3043:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3054:3:2",
                            "type": "",
                            "value": "128"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "3039:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3039:19:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "2986:43:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "2986:73:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "2986:73:2"
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256_t_string_memory_ptr_t_string_memory_ptr_t_uint256_t_uint256__to_t_uint256_t_string_memory_ptr_t_string_memory_ptr_t_uint256_t_uint256__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "2410:9:2",
                "type": ""
              },
              {
                "name": "value4",
                "nodeType": "YulTypedName",
                "src": "2422:6:2",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "2430:6:2",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "2438:6:2",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "2446:6:2",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "2454:6:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "2465:4:2",
                "type": ""
              }
            ],
            "src": "2220:846:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3161:28:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3178:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3181:1:2",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "3171:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3171:12:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3171:12:2"
                }
              ]
            },
            "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
            "nodeType": "YulFunctionDefinition",
            "src": "3072:117:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3284:28:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3301:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3304:1:2",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "3294:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3294:12:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3294:12:2"
                }
              ]
            },
            "name": "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
            "nodeType": "YulFunctionDefinition",
            "src": "3195:117:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3346:152:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3363:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3366:77:2",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3356:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3356:88:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3356:88:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3460:1:2",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3463:4:2",
                        "type": "",
                        "value": "0x41"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3453:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3453:15:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3453:15:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3484:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3487:4:2",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "3477:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3477:15:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3477:15:2"
                }
              ]
            },
            "name": "panic_error_0x41",
            "nodeType": "YulFunctionDefinition",
            "src": "3318:180:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3547:238:2",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "3557:58:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "3579:6:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "size",
                            "nodeType": "YulIdentifier",
                            "src": "3609:4:2"
                          }
                        ],
                        "functionName": {
                          "name": "round_up_to_mul_of_32",
                          "nodeType": "YulIdentifier",
                          "src": "3587:21:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3587:27:2"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "3575:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3575:40:2"
                  },
                  "variables": [
                    {
                      "name": "newFreePtr",
                      "nodeType": "YulTypedName",
                      "src": "3561:10:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "3726:22:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "3728:16:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "3728:18:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "3728:18:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulIdentifier",
                            "src": "3669:10:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "3681:18:2",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "3666:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3666:34:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "newFreePtr",
                            "nodeType": "YulIdentifier",
                            "src": "3705:10:2"
                          },
                          {
                            "name": "memPtr",
                            "nodeType": "YulIdentifier",
                            "src": "3717:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "3702:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "3702:22:2"
                      }
                    ],
                    "functionName": {
                      "name": "or",
                      "nodeType": "YulIdentifier",
                      "src": "3663:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3663:62:2"
                  },
                  "nodeType": "YulIf",
                  "src": "3660:88:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "3764:2:2",
                        "type": "",
                        "value": "64"
                      },
                      {
                        "name": "newFreePtr",
                        "nodeType": "YulIdentifier",
                        "src": "3768:10:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "3757:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3757:22:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3757:22:2"
                }
              ]
            },
            "name": "finalize_allocation",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "3533:6:2",
                "type": ""
              },
              {
                "name": "size",
                "nodeType": "YulTypedName",
                "src": "3541:4:2",
                "type": ""
              }
            ],
            "src": "3504:281:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3832:88:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "3842:30:2",
                  "value": {
                    "arguments": [],
                    "functionName": {
                      "name": "allocate_unbounded",
                      "nodeType": "YulIdentifier",
                      "src": "3852:18:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3852:20:2"
                  },
                  "variableNames": [
                    {
                      "name": "memPtr",
                      "nodeType": "YulIdentifier",
                      "src": "3842:6:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "memPtr",
                        "nodeType": "YulIdentifier",
                        "src": "3901:6:2"
                      },
                      {
                        "name": "size",
                        "nodeType": "YulIdentifier",
                        "src": "3909:4:2"
                      }
                    ],
                    "functionName": {
                      "name": "finalize_allocation",
                      "nodeType": "YulIdentifier",
                      "src": "3881:19:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "3881:33:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "3881:33:2"
                }
              ]
            },
            "name": "allocate_memory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "size",
                "nodeType": "YulTypedName",
                "src": "3816:4:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "memPtr",
                "nodeType": "YulTypedName",
                "src": "3825:6:2",
                "type": ""
              }
            ],
            "src": "3791:129:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "3993:241:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4098:22:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x41",
                            "nodeType": "YulIdentifier",
                            "src": "4100:16:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4100:18:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4100:18:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "4070:6:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4078:18:2",
                        "type": "",
                        "value": "0xffffffffffffffff"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "4067:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4067:30:2"
                  },
                  "nodeType": "YulIf",
                  "src": "4064:56:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4130:37:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "4160:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "round_up_to_mul_of_32",
                      "nodeType": "YulIdentifier",
                      "src": "4138:21:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4138:29:2"
                  },
                  "variableNames": [
                    {
                      "name": "size",
                      "nodeType": "YulIdentifier",
                      "src": "4130:4:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "4204:23:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "size",
                        "nodeType": "YulIdentifier",
                        "src": "4216:4:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4222:4:2",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4212:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4212:15:2"
                  },
                  "variableNames": [
                    {
                      "name": "size",
                      "nodeType": "YulIdentifier",
                      "src": "4204:4:2"
                    }
                  ]
                }
              ]
            },
            "name": "array_allocation_size_t_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "3977:6:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "size",
                "nodeType": "YulTypedName",
                "src": "3988:4:2",
                "type": ""
              }
            ],
            "src": "3926:308:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4291:103:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "dst",
                        "nodeType": "YulIdentifier",
                        "src": "4314:3:2"
                      },
                      {
                        "name": "src",
                        "nodeType": "YulIdentifier",
                        "src": "4319:3:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "4324:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "calldatacopy",
                      "nodeType": "YulIdentifier",
                      "src": "4301:12:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4301:30:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4301:30:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dst",
                            "nodeType": "YulIdentifier",
                            "src": "4372:3:2"
                          },
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "4377:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4368:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4368:16:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4386:1:2",
                        "type": "",
                        "value": "0"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4361:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4361:27:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4361:27:2"
                }
              ]
            },
            "name": "copy_calldata_to_memory",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "4273:3:2",
                "type": ""
              },
              {
                "name": "dst",
                "nodeType": "YulTypedName",
                "src": "4278:3:2",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "4283:6:2",
                "type": ""
              }
            ],
            "src": "4240:154:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4484:328:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "4494:75:2",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "4561:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "array_allocation_size_t_string_memory_ptr",
                          "nodeType": "YulIdentifier",
                          "src": "4519:41:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4519:49:2"
                      }
                    ],
                    "functionName": {
                      "name": "allocate_memory",
                      "nodeType": "YulIdentifier",
                      "src": "4503:15:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4503:66:2"
                  },
                  "variableNames": [
                    {
                      "name": "array",
                      "nodeType": "YulIdentifier",
                      "src": "4494:5:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "array",
                        "nodeType": "YulIdentifier",
                        "src": "4585:5:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "4592:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "4578:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4578:21:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4578:21:2"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "4608:27:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "array",
                        "nodeType": "YulIdentifier",
                        "src": "4623:5:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "4630:4:2",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "4619:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4619:16:2"
                  },
                  "variables": [
                    {
                      "name": "dst",
                      "nodeType": "YulTypedName",
                      "src": "4612:3:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4673:83:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
                            "nodeType": "YulIdentifier",
                            "src": "4675:77:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4675:79:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4675:79:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "src",
                            "nodeType": "YulIdentifier",
                            "src": "4654:3:2"
                          },
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "4659:6:2"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "4650:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4650:16:2"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "4668:3:2"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "4647:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4647:25:2"
                  },
                  "nodeType": "YulIf",
                  "src": "4644:112:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "src",
                        "nodeType": "YulIdentifier",
                        "src": "4789:3:2"
                      },
                      {
                        "name": "dst",
                        "nodeType": "YulIdentifier",
                        "src": "4794:3:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "4799:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "copy_calldata_to_memory",
                      "nodeType": "YulIdentifier",
                      "src": "4765:23:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4765:41:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "4765:41:2"
                }
              ]
            },
            "name": "abi_decode_available_length_t_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "src",
                "nodeType": "YulTypedName",
                "src": "4457:3:2",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "4462:6:2",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "4470:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "4478:5:2",
                "type": ""
              }
            ],
            "src": "4400:412:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "4894:278:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "4943:83:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
                            "nodeType": "YulIdentifier",
                            "src": "4945:77:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "4945:79:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "4945:79:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "4922:6:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "4930:4:2",
                                "type": "",
                                "value": "0x1f"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "4918:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "4918:17:2"
                          },
                          {
                            "name": "end",
                            "nodeType": "YulIdentifier",
                            "src": "4937:3:2"
                          }
                        ],
                        "functionName": {
                          "name": "slt",
                          "nodeType": "YulIdentifier",
                          "src": "4914:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "4914:27:2"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "4907:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "4907:35:2"
                  },
                  "nodeType": "YulIf",
                  "src": "4904:122:2"
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "5035:34:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "offset",
                        "nodeType": "YulIdentifier",
                        "src": "5062:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "calldataload",
                      "nodeType": "YulIdentifier",
                      "src": "5049:12:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5049:20:2"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "5039:6:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "5078:88:2",
                  "value": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "5139:6:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5147:4:2",
                            "type": "",
                            "value": "0x20"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "5135:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5135:17:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "5154:6:2"
                      },
                      {
                        "name": "end",
                        "nodeType": "YulIdentifier",
                        "src": "5162:3:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_decode_available_length_t_string_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "5087:47:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5087:79:2"
                  },
                  "variableNames": [
                    {
                      "name": "array",
                      "nodeType": "YulIdentifier",
                      "src": "5078:5:2"
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_t_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "offset",
                "nodeType": "YulTypedName",
                "src": "4872:6:2",
                "type": ""
              },
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "4880:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "array",
                "nodeType": "YulTypedName",
                "src": "4888:5:2",
                "type": ""
              }
            ],
            "src": "4832:340:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "5288:689:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "5334:83:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "5336:77:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "5336:79:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "5336:79:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "5309:7:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "5318:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "5305:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5305:23:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5330:2:2",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "5301:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "5301:32:2"
                  },
                  "nodeType": "YulIf",
                  "src": "5298:119:2"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "5427:117:2",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "5442:15:2",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5456:1:2",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "5446:6:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "5471:63:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "5506:9:2"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "5517:6:2"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "5502:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5502:22:2"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "5526:7:2"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "5481:20:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5481:53:2"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "5471:6:2"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "5554:118:2",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "5569:16:2",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "5583:2:2",
                        "type": "",
                        "value": "32"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "5573:6:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "5599:63:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "5634:9:2"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "5645:6:2"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "5630:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5630:22:2"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "5654:7:2"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "5609:20:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5609:53:2"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "5599:6:2"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "5682:288:2",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "5697:46:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "5728:9:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "5739:2:2",
                                "type": "",
                                "value": "64"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "5724:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5724:18:2"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "5711:12:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5711:32:2"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "5701:6:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "5790:83:2",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                "nodeType": "YulIdentifier",
                                "src": "5792:77:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "5792:79:2"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "5792:79:2"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "5762:6:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "5770:18:2",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "5759:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5759:30:2"
                      },
                      "nodeType": "YulIf",
                      "src": "5756:117:2"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "5887:73:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "5932:9:2"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "5943:6:2"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "5928:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "5928:22:2"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "5952:7:2"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_string_memory_ptr",
                          "nodeType": "YulIdentifier",
                          "src": "5897:30:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "5897:63:2"
                      },
                      "variableNames": [
                        {
                          "name": "value2",
                          "nodeType": "YulIdentifier",
                          "src": "5887:6:2"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_uint256t_uint256t_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "5242:9:2",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "5253:7:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "5265:6:2",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "5273:6:2",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "5281:6:2",
                "type": ""
              }
            ],
            "src": "5178:799:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "6103:859:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "6149:83:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "6151:77:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "6151:79:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "6151:79:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "6124:7:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "6133:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "6120:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6120:23:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6145:2:2",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "6116:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "6116:32:2"
                  },
                  "nodeType": "YulIf",
                  "src": "6113:119:2"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "6242:287:2",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "6257:45:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "6288:9:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "6299:1:2",
                                "type": "",
                                "value": "0"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "6284:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6284:17:2"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "6271:12:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6271:31:2"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "6261:6:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "6349:83:2",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                "nodeType": "YulIdentifier",
                                "src": "6351:77:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6351:79:2"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "6351:79:2"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "6321:6:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6329:18:2",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "6318:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6318:30:2"
                      },
                      "nodeType": "YulIf",
                      "src": "6315:117:2"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "6446:73:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "6491:9:2"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "6502:6:2"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "6487:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6487:22:2"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "6511:7:2"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_string_memory_ptr",
                          "nodeType": "YulIdentifier",
                          "src": "6456:30:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6456:63:2"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "6446:6:2"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "6539:288:2",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "6554:46:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "6585:9:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "6596:2:2",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "6581:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6581:18:2"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "6568:12:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6568:32:2"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "6558:6:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "6647:83:2",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                "nodeType": "YulIdentifier",
                                "src": "6649:77:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "6649:79:2"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "6649:79:2"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "6619:6:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "6627:18:2",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "6616:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6616:30:2"
                      },
                      "nodeType": "YulIf",
                      "src": "6613:117:2"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "6744:73:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "6789:9:2"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "6800:6:2"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "6785:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6785:22:2"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "6809:7:2"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_string_memory_ptr",
                          "nodeType": "YulIdentifier",
                          "src": "6754:30:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6754:63:2"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "6744:6:2"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "6837:118:2",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "6852:16:2",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "6866:2:2",
                        "type": "",
                        "value": "64"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "6856:6:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "6882:63:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "6917:9:2"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "6928:6:2"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "6913:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "6913:22:2"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "6937:7:2"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "6892:20:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "6892:53:2"
                      },
                      "variableNames": [
                        {
                          "name": "value2",
                          "nodeType": "YulIdentifier",
                          "src": "6882:6:2"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_string_memory_ptrt_string_memory_ptrt_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "6057:9:2",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "6068:7:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "6080:6:2",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "6088:6:2",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "6096:6:2",
                "type": ""
              }
            ],
            "src": "5983:979:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "7088:859:2",
              "statements": [
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "7134:83:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            "nodeType": "YulIdentifier",
                            "src": "7136:77:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "7136:79:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "7136:79:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "7109:7:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "7118:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "7105:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7105:23:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7130:2:2",
                        "type": "",
                        "value": "96"
                      }
                    ],
                    "functionName": {
                      "name": "slt",
                      "nodeType": "YulIdentifier",
                      "src": "7101:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "7101:32:2"
                  },
                  "nodeType": "YulIf",
                  "src": "7098:119:2"
                },
                {
                  "nodeType": "YulBlock",
                  "src": "7227:117:2",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "7242:15:2",
                      "value": {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "7256:1:2",
                        "type": "",
                        "value": "0"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "7246:6:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "7271:63:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "7306:9:2"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "7317:6:2"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "7302:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "7302:22:2"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "7326:7:2"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "7281:20:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7281:53:2"
                      },
                      "variableNames": [
                        {
                          "name": "value0",
                          "nodeType": "YulIdentifier",
                          "src": "7271:6:2"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "7354:288:2",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "7369:46:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "7400:9:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "7411:2:2",
                                "type": "",
                                "value": "32"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "7396:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "7396:18:2"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "7383:12:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7383:32:2"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "7373:6:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "7462:83:2",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                "nodeType": "YulIdentifier",
                                "src": "7464:77:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "7464:79:2"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "7464:79:2"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "7434:6:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7442:18:2",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "7431:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7431:30:2"
                      },
                      "nodeType": "YulIf",
                      "src": "7428:117:2"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "7559:73:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "7604:9:2"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "7615:6:2"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "7600:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "7600:22:2"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "7624:7:2"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_string_memory_ptr",
                          "nodeType": "YulIdentifier",
                          "src": "7569:30:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7569:63:2"
                      },
                      "variableNames": [
                        {
                          "name": "value1",
                          "nodeType": "YulIdentifier",
                          "src": "7559:6:2"
                        }
                      ]
                    }
                  ]
                },
                {
                  "nodeType": "YulBlock",
                  "src": "7652:288:2",
                  "statements": [
                    {
                      "nodeType": "YulVariableDeclaration",
                      "src": "7667:46:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "7698:9:2"
                              },
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "7709:2:2",
                                "type": "",
                                "value": "64"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "7694:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "7694:18:2"
                          }
                        ],
                        "functionName": {
                          "name": "calldataload",
                          "nodeType": "YulIdentifier",
                          "src": "7681:12:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7681:32:2"
                      },
                      "variables": [
                        {
                          "name": "offset",
                          "nodeType": "YulTypedName",
                          "src": "7671:6:2",
                          "type": ""
                        }
                      ]
                    },
                    {
                      "body": {
                        "nodeType": "YulBlock",
                        "src": "7760:83:2",
                        "statements": [
                          {
                            "expression": {
                              "arguments": [],
                              "functionName": {
                                "name": "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                "nodeType": "YulIdentifier",
                                "src": "7762:77:2"
                              },
                              "nodeType": "YulFunctionCall",
                              "src": "7762:79:2"
                            },
                            "nodeType": "YulExpressionStatement",
                            "src": "7762:79:2"
                          }
                        ]
                      },
                      "condition": {
                        "arguments": [
                          {
                            "name": "offset",
                            "nodeType": "YulIdentifier",
                            "src": "7732:6:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "7740:18:2",
                            "type": "",
                            "value": "0xffffffffffffffff"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "7729:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7729:30:2"
                      },
                      "nodeType": "YulIf",
                      "src": "7726:117:2"
                    },
                    {
                      "nodeType": "YulAssignment",
                      "src": "7857:73:2",
                      "value": {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "headStart",
                                "nodeType": "YulIdentifier",
                                "src": "7902:9:2"
                              },
                              {
                                "name": "offset",
                                "nodeType": "YulIdentifier",
                                "src": "7913:6:2"
                              }
                            ],
                            "functionName": {
                              "name": "add",
                              "nodeType": "YulIdentifier",
                              "src": "7898:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "7898:22:2"
                          },
                          {
                            "name": "dataEnd",
                            "nodeType": "YulIdentifier",
                            "src": "7922:7:2"
                          }
                        ],
                        "functionName": {
                          "name": "abi_decode_t_string_memory_ptr",
                          "nodeType": "YulIdentifier",
                          "src": "7867:30:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "7867:63:2"
                      },
                      "variableNames": [
                        {
                          "name": "value2",
                          "nodeType": "YulIdentifier",
                          "src": "7857:6:2"
                        }
                      ]
                    }
                  ]
                }
              ]
            },
            "name": "abi_decode_tuple_t_uint256t_string_memory_ptrt_string_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "7042:9:2",
                "type": ""
              },
              {
                "name": "dataEnd",
                "nodeType": "YulTypedName",
                "src": "7053:7:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "7065:6:2",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "7073:6:2",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "7081:6:2",
                "type": ""
              }
            ],
            "src": "6968:979:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8027:40:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "8038:22:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "8054:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "mload",
                      "nodeType": "YulIdentifier",
                      "src": "8048:5:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8048:12:2"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "8038:6:2"
                    }
                  ]
                }
              ]
            },
            "name": "array_length_t_array$_t_uint256_$dyn_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "8010:5:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "8020:6:2",
                "type": ""
              }
            ],
            "src": "7953:114:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8184:73:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "8201:3:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "8206:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8194:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8194:19:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8194:19:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8222:29:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "8241:3:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8246:4:2",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "8237:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8237:14:2"
                  },
                  "variableNames": [
                    {
                      "name": "updated_pos",
                      "nodeType": "YulIdentifier",
                      "src": "8222:11:2"
                    }
                  ]
                }
              ]
            },
            "name": "array_storeLengthForEncoding_t_array$_t_uint256_$dyn_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "8156:3:2",
                "type": ""
              },
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "8161:6:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "updated_pos",
                "nodeType": "YulTypedName",
                "src": "8172:11:2",
                "type": ""
              }
            ],
            "src": "8073:184:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8335:60:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "8345:11:2",
                  "value": {
                    "name": "ptr",
                    "nodeType": "YulIdentifier",
                    "src": "8353:3:2"
                  },
                  "variableNames": [
                    {
                      "name": "data",
                      "nodeType": "YulIdentifier",
                      "src": "8345:4:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8366:22:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "ptr",
                        "nodeType": "YulIdentifier",
                        "src": "8378:3:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8383:4:2",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "8374:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8374:14:2"
                  },
                  "variableNames": [
                    {
                      "name": "data",
                      "nodeType": "YulIdentifier",
                      "src": "8366:4:2"
                    }
                  ]
                }
              ]
            },
            "name": "array_dataslot_t_array$_t_uint256_$dyn_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "ptr",
                "nodeType": "YulTypedName",
                "src": "8322:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "8330:4:2",
                "type": ""
              }
            ],
            "src": "8263:132:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8456:53:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "8473:3:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "value",
                            "nodeType": "YulIdentifier",
                            "src": "8496:5:2"
                          }
                        ],
                        "functionName": {
                          "name": "cleanup_t_uint256",
                          "nodeType": "YulIdentifier",
                          "src": "8478:17:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "8478:24:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "8466:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8466:37:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8466:37:2"
                }
              ]
            },
            "name": "abi_encode_t_uint256_to_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "8444:5:2",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "8451:3:2",
                "type": ""
              }
            ],
            "src": "8401:108:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8595:99:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "8639:6:2"
                      },
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "8647:3:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "8605:33:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8605:46:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "8605:46:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "8660:28:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "8678:3:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8683:4:2",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "8674:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8674:14:2"
                  },
                  "variableNames": [
                    {
                      "name": "updatedPos",
                      "nodeType": "YulIdentifier",
                      "src": "8660:10:2"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encodeUpdatedPos_t_uint256_to_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "8568:6:2",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "8576:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "updatedPos",
                "nodeType": "YulTypedName",
                "src": "8584:10:2",
                "type": ""
              }
            ],
            "src": "8515:179:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8775:38:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "8785:22:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "ptr",
                        "nodeType": "YulIdentifier",
                        "src": "8797:3:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "8802:4:2",
                        "type": "",
                        "value": "0x20"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "8793:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8793:14:2"
                  },
                  "variableNames": [
                    {
                      "name": "next",
                      "nodeType": "YulIdentifier",
                      "src": "8785:4:2"
                    }
                  ]
                }
              ]
            },
            "name": "array_nextElement_t_array$_t_uint256_$dyn_memory_ptr",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "ptr",
                "nodeType": "YulTypedName",
                "src": "8762:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "next",
                "nodeType": "YulTypedName",
                "src": "8770:4:2",
                "type": ""
              }
            ],
            "src": "8700:113:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "8973:608:2",
              "statements": [
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "8983:68:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "9045:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "array_length_t_array$_t_uint256_$dyn_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "8997:47:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "8997:54:2"
                  },
                  "variables": [
                    {
                      "name": "length",
                      "nodeType": "YulTypedName",
                      "src": "8987:6:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "9060:93:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "pos",
                        "nodeType": "YulIdentifier",
                        "src": "9141:3:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "9146:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "array_storeLengthForEncoding_t_array$_t_uint256_$dyn_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "9067:73:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9067:86:2"
                  },
                  "variableNames": [
                    {
                      "name": "pos",
                      "nodeType": "YulIdentifier",
                      "src": "9060:3:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "9162:71:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value",
                        "nodeType": "YulIdentifier",
                        "src": "9227:5:2"
                      }
                    ],
                    "functionName": {
                      "name": "array_dataslot_t_array$_t_uint256_$dyn_memory_ptr",
                      "nodeType": "YulIdentifier",
                      "src": "9177:49:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9177:56:2"
                  },
                  "variables": [
                    {
                      "name": "baseRef",
                      "nodeType": "YulTypedName",
                      "src": "9166:7:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "9242:21:2",
                  "value": {
                    "name": "baseRef",
                    "nodeType": "YulIdentifier",
                    "src": "9256:7:2"
                  },
                  "variables": [
                    {
                      "name": "srcPtr",
                      "nodeType": "YulTypedName",
                      "src": "9246:6:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "9332:224:2",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "9346:34:2",
                        "value": {
                          "arguments": [
                            {
                              "name": "srcPtr",
                              "nodeType": "YulIdentifier",
                              "src": "9373:6:2"
                            }
                          ],
                          "functionName": {
                            "name": "mload",
                            "nodeType": "YulIdentifier",
                            "src": "9367:5:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9367:13:2"
                        },
                        "variables": [
                          {
                            "name": "elementValue0",
                            "nodeType": "YulTypedName",
                            "src": "9350:13:2",
                            "type": ""
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "9393:70:2",
                        "value": {
                          "arguments": [
                            {
                              "name": "elementValue0",
                              "nodeType": "YulIdentifier",
                              "src": "9444:13:2"
                            },
                            {
                              "name": "pos",
                              "nodeType": "YulIdentifier",
                              "src": "9459:3:2"
                            }
                          ],
                          "functionName": {
                            "name": "abi_encodeUpdatedPos_t_uint256_to_t_uint256",
                            "nodeType": "YulIdentifier",
                            "src": "9400:43:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9400:63:2"
                        },
                        "variableNames": [
                          {
                            "name": "pos",
                            "nodeType": "YulIdentifier",
                            "src": "9393:3:2"
                          }
                        ]
                      },
                      {
                        "nodeType": "YulAssignment",
                        "src": "9476:70:2",
                        "value": {
                          "arguments": [
                            {
                              "name": "srcPtr",
                              "nodeType": "YulIdentifier",
                              "src": "9539:6:2"
                            }
                          ],
                          "functionName": {
                            "name": "array_nextElement_t_array$_t_uint256_$dyn_memory_ptr",
                            "nodeType": "YulIdentifier",
                            "src": "9486:52:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9486:60:2"
                        },
                        "variableNames": [
                          {
                            "name": "srcPtr",
                            "nodeType": "YulIdentifier",
                            "src": "9476:6:2"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "i",
                        "nodeType": "YulIdentifier",
                        "src": "9294:1:2"
                      },
                      {
                        "name": "length",
                        "nodeType": "YulIdentifier",
                        "src": "9297:6:2"
                      }
                    ],
                    "functionName": {
                      "name": "lt",
                      "nodeType": "YulIdentifier",
                      "src": "9291:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9291:13:2"
                  },
                  "nodeType": "YulForLoop",
                  "post": {
                    "nodeType": "YulBlock",
                    "src": "9305:18:2",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "9307:14:2",
                        "value": {
                          "arguments": [
                            {
                              "name": "i",
                              "nodeType": "YulIdentifier",
                              "src": "9316:1:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "9319:1:2",
                              "type": "",
                              "value": "1"
                            }
                          ],
                          "functionName": {
                            "name": "add",
                            "nodeType": "YulIdentifier",
                            "src": "9312:3:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "9312:9:2"
                        },
                        "variableNames": [
                          {
                            "name": "i",
                            "nodeType": "YulIdentifier",
                            "src": "9307:1:2"
                          }
                        ]
                      }
                    ]
                  },
                  "pre": {
                    "nodeType": "YulBlock",
                    "src": "9276:14:2",
                    "statements": [
                      {
                        "nodeType": "YulVariableDeclaration",
                        "src": "9278:10:2",
                        "value": {
                          "kind": "number",
                          "nodeType": "YulLiteral",
                          "src": "9287:1:2",
                          "type": "",
                          "value": "0"
                        },
                        "variables": [
                          {
                            "name": "i",
                            "nodeType": "YulTypedName",
                            "src": "9282:1:2",
                            "type": ""
                          }
                        ]
                      }
                    ]
                  },
                  "src": "9272:284:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "9565:10:2",
                  "value": {
                    "name": "pos",
                    "nodeType": "YulIdentifier",
                    "src": "9572:3:2"
                  },
                  "variableNames": [
                    {
                      "name": "end",
                      "nodeType": "YulIdentifier",
                      "src": "9565:3:2"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_t_array$_t_uint256_$dyn_memory_ptr_to_t_array$_t_uint256_$dyn_memory_ptr_fromStack",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "value",
                "nodeType": "YulTypedName",
                "src": "8952:5:2",
                "type": ""
              },
              {
                "name": "pos",
                "nodeType": "YulTypedName",
                "src": "8959:3:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "end",
                "nodeType": "YulTypedName",
                "src": "8968:3:2",
                "type": ""
              }
            ],
            "src": "8849:732:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9735:225:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "9745:26:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "9757:9:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "9768:2:2",
                        "type": "",
                        "value": "32"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "9753:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9753:18:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "9745:4:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9792:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "9803:1:2",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "9788:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9788:17:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "9811:4:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "9817:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "9807:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "9807:20:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "9781:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9781:47:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "9781:47:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "9837:116:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "9939:6:2"
                      },
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "9948:4:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_array$_t_uint256_$dyn_memory_ptr_to_t_array$_t_uint256_$dyn_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "9845:93:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "9845:108:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "9837:4:2"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_array$_t_uint256_$dyn_memory_ptr__to_t_array$_t_uint256_$dyn_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "9707:9:2",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "9719:6:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "9730:4:2",
                "type": ""
              }
            ],
            "src": "9587:373:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "9994:152:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10011:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10014:77:2",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10004:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10004:88:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10004:88:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10108:1:2",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10111:4:2",
                        "type": "",
                        "value": "0x22"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10101:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10101:15:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10101:15:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10132:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10135:4:2",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "10125:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10125:15:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10125:15:2"
                }
              ]
            },
            "name": "panic_error_0x22",
            "nodeType": "YulFunctionDefinition",
            "src": "9966:180:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10203:269:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "10213:22:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "10227:4:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10233:1:2",
                        "type": "",
                        "value": "2"
                      }
                    ],
                    "functionName": {
                      "name": "div",
                      "nodeType": "YulIdentifier",
                      "src": "10223:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10223:12:2"
                  },
                  "variableNames": [
                    {
                      "name": "length",
                      "nodeType": "YulIdentifier",
                      "src": "10213:6:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulVariableDeclaration",
                  "src": "10244:38:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "data",
                        "nodeType": "YulIdentifier",
                        "src": "10274:4:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10280:1:2",
                        "type": "",
                        "value": "1"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "10270:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10270:12:2"
                  },
                  "variables": [
                    {
                      "name": "outOfPlaceEncoding",
                      "nodeType": "YulTypedName",
                      "src": "10248:18:2",
                      "type": ""
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "10321:51:2",
                    "statements": [
                      {
                        "nodeType": "YulAssignment",
                        "src": "10335:27:2",
                        "value": {
                          "arguments": [
                            {
                              "name": "length",
                              "nodeType": "YulIdentifier",
                              "src": "10349:6:2"
                            },
                            {
                              "kind": "number",
                              "nodeType": "YulLiteral",
                              "src": "10357:4:2",
                              "type": "",
                              "value": "0x7f"
                            }
                          ],
                          "functionName": {
                            "name": "and",
                            "nodeType": "YulIdentifier",
                            "src": "10345:3:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10345:17:2"
                        },
                        "variableNames": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "10335:6:2"
                          }
                        ]
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "10301:18:2"
                      }
                    ],
                    "functionName": {
                      "name": "iszero",
                      "nodeType": "YulIdentifier",
                      "src": "10294:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10294:26:2"
                  },
                  "nodeType": "YulIf",
                  "src": "10291:81:2"
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "10424:42:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x22",
                            "nodeType": "YulIdentifier",
                            "src": "10438:16:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "10438:18:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "10438:18:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "outOfPlaceEncoding",
                        "nodeType": "YulIdentifier",
                        "src": "10388:18:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "length",
                            "nodeType": "YulIdentifier",
                            "src": "10411:6:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10419:2:2",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "lt",
                          "nodeType": "YulIdentifier",
                          "src": "10408:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10408:14:2"
                      }
                    ],
                    "functionName": {
                      "name": "eq",
                      "nodeType": "YulIdentifier",
                      "src": "10385:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10385:38:2"
                  },
                  "nodeType": "YulIf",
                  "src": "10382:84:2"
                }
              ]
            },
            "name": "extract_byte_array_length",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "data",
                "nodeType": "YulTypedName",
                "src": "10187:4:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "length",
                "nodeType": "YulTypedName",
                "src": "10196:6:2",
                "type": ""
              }
            ],
            "src": "10152:320:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "10680:442:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "10690:27:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "10702:9:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "10713:3:2",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "10698:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10698:19:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "10690:4:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "10771:6:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10784:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10795:1:2",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10780:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10780:17:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "10727:43:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10727:71:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10727:71:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "10852:6:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10865:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10876:2:2",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10861:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10861:18:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "10808:43:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10808:72:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10808:72:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value2",
                        "nodeType": "YulIdentifier",
                        "src": "10934:6:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10947:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10958:2:2",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10943:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10943:18:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "10890:43:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10890:72:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10890:72:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "10983:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "10994:2:2",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "10979:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10979:18:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "11003:4:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "11009:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "10999:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "10999:20:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "10972:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "10972:48:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "10972:48:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "11029:86:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value3",
                        "nodeType": "YulIdentifier",
                        "src": "11101:6:2"
                      },
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "11110:4:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "11037:63:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11037:78:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "11029:4:2"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256_t_uint256_t_uint256_t_string_memory_ptr__to_t_uint256_t_uint256_t_uint256_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "10628:9:2",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "10640:6:2",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "10648:6:2",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "10656:6:2",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "10664:6:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "10675:4:2",
                "type": ""
              }
            ],
            "src": "10478:644:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11156:152:2",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11173:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11176:77:2",
                        "type": "",
                        "value": "35408467139433450592217433187231851964531694900788300625387963629091585785856"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11166:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11166:88:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11166:88:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11270:1:2",
                        "type": "",
                        "value": "4"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11273:4:2",
                        "type": "",
                        "value": "0x11"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "11263:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11263:15:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11263:15:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11294:1:2",
                        "type": "",
                        "value": "0"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "11297:4:2",
                        "type": "",
                        "value": "0x24"
                      }
                    ],
                    "functionName": {
                      "name": "revert",
                      "nodeType": "YulIdentifier",
                      "src": "11287:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11287:15:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "11287:15:2"
                }
              ]
            },
            "name": "panic_error_0x11",
            "nodeType": "YulFunctionDefinition",
            "src": "11128:180:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11362:300:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "11372:25:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "11395:1:2"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "11377:17:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11377:20:2"
                  },
                  "variableNames": [
                    {
                      "name": "x",
                      "nodeType": "YulIdentifier",
                      "src": "11372:1:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "11406:25:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "11429:1:2"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "11411:17:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11411:20:2"
                  },
                  "variableNames": [
                    {
                      "name": "y",
                      "nodeType": "YulIdentifier",
                      "src": "11406:1:2"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "11604:22:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "11606:16:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11606:18:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "11606:18:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "arguments": [
                              {
                                "name": "x",
                                "nodeType": "YulIdentifier",
                                "src": "11516:1:2"
                              }
                            ],
                            "functionName": {
                              "name": "iszero",
                              "nodeType": "YulIdentifier",
                              "src": "11509:6:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "11509:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "iszero",
                          "nodeType": "YulIdentifier",
                          "src": "11502:6:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11502:17:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "11524:1:2"
                          },
                          {
                            "arguments": [
                              {
                                "kind": "number",
                                "nodeType": "YulLiteral",
                                "src": "11531:66:2",
                                "type": "",
                                "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                              },
                              {
                                "name": "x",
                                "nodeType": "YulIdentifier",
                                "src": "11599:1:2"
                              }
                            ],
                            "functionName": {
                              "name": "div",
                              "nodeType": "YulIdentifier",
                              "src": "11527:3:2"
                            },
                            "nodeType": "YulFunctionCall",
                            "src": "11527:74:2"
                          }
                        ],
                        "functionName": {
                          "name": "gt",
                          "nodeType": "YulIdentifier",
                          "src": "11521:2:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11521:81:2"
                      }
                    ],
                    "functionName": {
                      "name": "and",
                      "nodeType": "YulIdentifier",
                      "src": "11498:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11498:105:2"
                  },
                  "nodeType": "YulIf",
                  "src": "11495:131:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "11636:20:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "11651:1:2"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "11654:1:2"
                      }
                    ],
                    "functionName": {
                      "name": "mul",
                      "nodeType": "YulIdentifier",
                      "src": "11647:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11647:9:2"
                  },
                  "variableNames": [
                    {
                      "name": "product",
                      "nodeType": "YulIdentifier",
                      "src": "11636:7:2"
                    }
                  ]
                }
              ]
            },
            "name": "checked_mul_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "11345:1:2",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "11348:1:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "product",
                "nodeType": "YulTypedName",
                "src": "11354:7:2",
                "type": ""
              }
            ],
            "src": "11314:348:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "11712:261:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "11722:25:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "11745:1:2"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "11727:17:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11727:20:2"
                  },
                  "variableNames": [
                    {
                      "name": "x",
                      "nodeType": "YulIdentifier",
                      "src": "11722:1:2"
                    }
                  ]
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "11756:25:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "11779:1:2"
                      }
                    ],
                    "functionName": {
                      "name": "cleanup_t_uint256",
                      "nodeType": "YulIdentifier",
                      "src": "11761:17:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11761:20:2"
                  },
                  "variableNames": [
                    {
                      "name": "y",
                      "nodeType": "YulIdentifier",
                      "src": "11756:1:2"
                    }
                  ]
                },
                {
                  "body": {
                    "nodeType": "YulBlock",
                    "src": "11919:22:2",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "functionName": {
                            "name": "panic_error_0x11",
                            "nodeType": "YulIdentifier",
                            "src": "11921:16:2"
                          },
                          "nodeType": "YulFunctionCall",
                          "src": "11921:18:2"
                        },
                        "nodeType": "YulExpressionStatement",
                        "src": "11921:18:2"
                      }
                    ]
                  },
                  "condition": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "11840:1:2"
                      },
                      {
                        "arguments": [
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "11847:66:2",
                            "type": "",
                            "value": "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
                          },
                          {
                            "name": "y",
                            "nodeType": "YulIdentifier",
                            "src": "11915:1:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "11843:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "11843:74:2"
                      }
                    ],
                    "functionName": {
                      "name": "gt",
                      "nodeType": "YulIdentifier",
                      "src": "11837:2:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11837:81:2"
                  },
                  "nodeType": "YulIf",
                  "src": "11834:107:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "11951:16:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "x",
                        "nodeType": "YulIdentifier",
                        "src": "11962:1:2"
                      },
                      {
                        "name": "y",
                        "nodeType": "YulIdentifier",
                        "src": "11965:1:2"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "11958:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "11958:9:2"
                  },
                  "variableNames": [
                    {
                      "name": "sum",
                      "nodeType": "YulIdentifier",
                      "src": "11951:3:2"
                    }
                  ]
                }
              ]
            },
            "name": "checked_add_t_uint256",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "x",
                "nodeType": "YulTypedName",
                "src": "11699:1:2",
                "type": ""
              },
              {
                "name": "y",
                "nodeType": "YulTypedName",
                "src": "11702:1:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "sum",
                "nodeType": "YulTypedName",
                "src": "11708:3:2",
                "type": ""
              }
            ],
            "src": "11668:305:2"
          },
          {
            "body": {
              "nodeType": "YulBlock",
              "src": "12221:584:2",
              "statements": [
                {
                  "nodeType": "YulAssignment",
                  "src": "12231:27:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "headStart",
                        "nodeType": "YulIdentifier",
                        "src": "12243:9:2"
                      },
                      {
                        "kind": "number",
                        "nodeType": "YulLiteral",
                        "src": "12254:3:2",
                        "type": "",
                        "value": "128"
                      }
                    ],
                    "functionName": {
                      "name": "add",
                      "nodeType": "YulIdentifier",
                      "src": "12239:3:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12239:19:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "12231:4:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "name": "value0",
                        "nodeType": "YulIdentifier",
                        "src": "12312:6:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12325:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12336:1:2",
                            "type": "",
                            "value": "0"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12321:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12321:17:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_uint256_to_t_uint256_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "12268:43:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12268:71:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12268:71:2"
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12360:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12371:2:2",
                            "type": "",
                            "value": "32"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12356:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12356:18:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "12380:4:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12386:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "12376:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12376:20:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12349:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12349:48:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12349:48:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "12406:86:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value1",
                        "nodeType": "YulIdentifier",
                        "src": "12478:6:2"
                      },
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "12487:4:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "12414:63:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12414:78:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "12406:4:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12513:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12524:2:2",
                            "type": "",
                            "value": "64"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12509:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12509:18:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "12533:4:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12539:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "12529:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12529:20:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12502:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12502:48:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12502:48:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "12559:86:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value2",
                        "nodeType": "YulIdentifier",
                        "src": "12631:6:2"
                      },
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "12640:4:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "12567:63:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12567:78:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "12559:4:2"
                    }
                  ]
                },
                {
                  "expression": {
                    "arguments": [
                      {
                        "arguments": [
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12666:9:2"
                          },
                          {
                            "kind": "number",
                            "nodeType": "YulLiteral",
                            "src": "12677:2:2",
                            "type": "",
                            "value": "96"
                          }
                        ],
                        "functionName": {
                          "name": "add",
                          "nodeType": "YulIdentifier",
                          "src": "12662:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12662:18:2"
                      },
                      {
                        "arguments": [
                          {
                            "name": "tail",
                            "nodeType": "YulIdentifier",
                            "src": "12686:4:2"
                          },
                          {
                            "name": "headStart",
                            "nodeType": "YulIdentifier",
                            "src": "12692:9:2"
                          }
                        ],
                        "functionName": {
                          "name": "sub",
                          "nodeType": "YulIdentifier",
                          "src": "12682:3:2"
                        },
                        "nodeType": "YulFunctionCall",
                        "src": "12682:20:2"
                      }
                    ],
                    "functionName": {
                      "name": "mstore",
                      "nodeType": "YulIdentifier",
                      "src": "12655:6:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12655:48:2"
                  },
                  "nodeType": "YulExpressionStatement",
                  "src": "12655:48:2"
                },
                {
                  "nodeType": "YulAssignment",
                  "src": "12712:86:2",
                  "value": {
                    "arguments": [
                      {
                        "name": "value3",
                        "nodeType": "YulIdentifier",
                        "src": "12784:6:2"
                      },
                      {
                        "name": "tail",
                        "nodeType": "YulIdentifier",
                        "src": "12793:4:2"
                      }
                    ],
                    "functionName": {
                      "name": "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      "nodeType": "YulIdentifier",
                      "src": "12720:63:2"
                    },
                    "nodeType": "YulFunctionCall",
                    "src": "12720:78:2"
                  },
                  "variableNames": [
                    {
                      "name": "tail",
                      "nodeType": "YulIdentifier",
                      "src": "12712:4:2"
                    }
                  ]
                }
              ]
            },
            "name": "abi_encode_tuple_t_uint256_t_string_memory_ptr_t_string_memory_ptr_t_string_memory_ptr__to_t_uint256_t_string_memory_ptr_t_string_memory_ptr_t_string_memory_ptr__fromStack_reversed",
            "nodeType": "YulFunctionDefinition",
            "parameters": [
              {
                "name": "headStart",
                "nodeType": "YulTypedName",
                "src": "12169:9:2",
                "type": ""
              },
              {
                "name": "value3",
                "nodeType": "YulTypedName",
                "src": "12181:6:2",
                "type": ""
              },
              {
                "name": "value2",
                "nodeType": "YulTypedName",
                "src": "12189:6:2",
                "type": ""
              },
              {
                "name": "value1",
                "nodeType": "YulTypedName",
                "src": "12197:6:2",
                "type": ""
              },
              {
                "name": "value0",
                "nodeType": "YulTypedName",
                "src": "12205:6:2",
                "type": ""
              }
            ],
            "returnVariables": [
              {
                "name": "tail",
                "nodeType": "YulTypedName",
                "src": "12216:4:2",
                "type": ""
              }
            ],
            "src": "11979:826:2"
          }
        ]
      },
      "contents": "{\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_uint256(headStart, dataEnd) -> value0 {\n        if slt(sub(dataEnd, headStart), 32) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function copy_memory_to_memory(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        if gt(i, length)\n        {\n            // clear end\n            mstore(add(dst, length), 0)\n        }\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_tuple_t_uint256_t_string_memory_ptr_t_string_memory_ptr_t_uint256_t_uint256__to_t_uint256_t_string_memory_ptr_t_string_memory_ptr_t_uint256_t_uint256__fromStack_reversed(headStart , value4, value3, value2, value1, value0) -> tail {\n        tail := add(headStart, 160)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n        mstore(add(headStart, 32), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value1,  tail)\n\n        mstore(add(headStart, 64), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value2,  tail)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value3,  add(headStart, 96))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value4,  add(headStart, 128))\n\n    }\n\n    function revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() {\n        revert(0, 0)\n    }\n\n    function revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() {\n        revert(0, 0)\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function finalize_allocation(memPtr, size) {\n        let newFreePtr := add(memPtr, round_up_to_mul_of_32(size))\n        // protect against overflow\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n\n    function allocate_memory(size) -> memPtr {\n        memPtr := allocate_unbounded()\n        finalize_allocation(memPtr, size)\n    }\n\n    function array_allocation_size_t_string_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        size := round_up_to_mul_of_32(length)\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function copy_calldata_to_memory(src, dst, length) {\n        calldatacopy(dst, src, length)\n        // clear end\n        mstore(add(dst, length), 0)\n    }\n\n    function abi_decode_available_length_t_string_memory_ptr(src, length, end) -> array {\n        array := allocate_memory(array_allocation_size_t_string_memory_ptr(length))\n        mstore(array, length)\n        let dst := add(array, 0x20)\n        if gt(add(src, length), end) { revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() }\n        copy_calldata_to_memory(src, dst, length)\n    }\n\n    // string\n    function abi_decode_t_string_memory_ptr(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() }\n        let length := calldataload(offset)\n        array := abi_decode_available_length_t_string_memory_ptr(add(offset, 0x20), length, end)\n    }\n\n    function abi_decode_tuple_t_uint256t_uint256t_string_memory_ptr(headStart, dataEnd) -> value0, value1, value2 {\n        if slt(sub(dataEnd, headStart), 96) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := calldataload(add(headStart, 64))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value2 := abi_decode_t_string_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_string_memory_ptrt_string_memory_ptrt_uint256(headStart, dataEnd) -> value0, value1, value2 {\n        if slt(sub(dataEnd, headStart), 96) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := calldataload(add(headStart, 0))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value0 := abi_decode_t_string_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := calldataload(add(headStart, 32))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value1 := abi_decode_t_string_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_uint256t_string_memory_ptrt_string_memory_ptr(headStart, dataEnd) -> value0, value1, value2 {\n        if slt(sub(dataEnd, headStart), 96) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := calldataload(add(headStart, 32))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value1 := abi_decode_t_string_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := calldataload(add(headStart, 64))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value2 := abi_decode_t_string_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function array_length_t_array$_t_uint256_$dyn_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_array$_t_uint256_$dyn_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function array_dataslot_t_array$_t_uint256_$dyn_memory_ptr(ptr) -> data {\n        data := ptr\n\n        data := add(ptr, 0x20)\n\n    }\n\n    function abi_encode_t_uint256_to_t_uint256(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encodeUpdatedPos_t_uint256_to_t_uint256(value0, pos) -> updatedPos {\n        abi_encode_t_uint256_to_t_uint256(value0, pos)\n        updatedPos := add(pos, 0x20)\n    }\n\n    function array_nextElement_t_array$_t_uint256_$dyn_memory_ptr(ptr) -> next {\n        next := add(ptr, 0x20)\n    }\n\n    // uint256[] -> uint256[]\n    function abi_encode_t_array$_t_uint256_$dyn_memory_ptr_to_t_array$_t_uint256_$dyn_memory_ptr_fromStack(value, pos)  -> end  {\n        let length := array_length_t_array$_t_uint256_$dyn_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_array$_t_uint256_$dyn_memory_ptr_fromStack(pos, length)\n        let baseRef := array_dataslot_t_array$_t_uint256_$dyn_memory_ptr(value)\n        let srcPtr := baseRef\n        for { let i := 0 } lt(i, length) { i := add(i, 1) }\n        {\n            let elementValue0 := mload(srcPtr)\n            pos := abi_encodeUpdatedPos_t_uint256_to_t_uint256(elementValue0, pos)\n            srcPtr := array_nextElement_t_array$_t_uint256_$dyn_memory_ptr(srcPtr)\n        }\n        end := pos\n    }\n\n    function abi_encode_tuple_t_array$_t_uint256_$dyn_memory_ptr__to_t_array$_t_uint256_$dyn_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_array$_t_uint256_$dyn_memory_ptr_to_t_array$_t_uint256_$dyn_memory_ptr_fromStack(value0,  tail)\n\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function abi_encode_tuple_t_uint256_t_uint256_t_uint256_t_string_memory_ptr__to_t_uint256_t_uint256_t_uint256_t_string_memory_ptr__fromStack_reversed(headStart , value3, value2, value1, value0) -> tail {\n        tail := add(headStart, 128)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value1,  add(headStart, 32))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value2,  add(headStart, 64))\n\n        mstore(add(headStart, 96), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value3,  tail)\n\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function checked_mul_t_uint256(x, y) -> product {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x != 0 and y > (maxValue / x)\n        if and(iszero(iszero(x)), gt(y, div(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, x))) { panic_error_0x11() }\n\n        product := mul(x, y)\n    }\n\n    function checked_add_t_uint256(x, y) -> sum {\n        x := cleanup_t_uint256(x)\n        y := cleanup_t_uint256(y)\n\n        // overflow, if x > (maxValue - y)\n        if gt(x, sub(0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff, y)) { panic_error_0x11() }\n\n        sum := add(x, y)\n    }\n\n    function abi_encode_tuple_t_uint256_t_string_memory_ptr_t_string_memory_ptr_t_string_memory_ptr__to_t_uint256_t_string_memory_ptr_t_string_memory_ptr_t_string_memory_ptr__fromStack_reversed(headStart , value3, value2, value1, value0) -> tail {\n        tail := add(headStart, 128)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n        mstore(add(headStart, 32), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value1,  tail)\n\n        mstore(add(headStart, 64), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value2,  tail)\n\n        mstore(add(headStart, 96), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value3,  tail)\n\n    }\n\n}\n",
      "id": 2,
      "language": "Yul",
      "name": "#utility.yul"
    }
  ],
  "sourceMap": "58:1756:0:-:0;;;275:1;257:19;;551:20;;;;;;;;;;58:1756;;;;;;",
  "deployedSourceMap": "58:1756:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;762:247;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;;;;;;;;;;:::i;:::-;;;;;;;;1309:231;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;575:97;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1544:173;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1013:292;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;676:82;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;762:247;823:4;829:13;844;859:4;865;799:2;1775:1;1759:5;:9;1765:2;1759:9;;;;;;;;;;;:12;;;:17;1756:45;;;1786:8;;;1756:45;891:2:::1;901:5;:9:::0;907:2:::1;901:9;;;;;;;;;;;:14;;923:5;:9:::0;929:2:::1;923:9;;;;;;;;;;;:21;;952:5;:9:::0;958:2:::1;952:9;;;;;;;;;;;:21;;;981:5;:9:::0;987:2:::1;981:9;;;;;;;;;;;:17;;;877:127;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;762:247:::0;;;;;;;;:::o;1309:231::-;1391:2;1775:1;1759:5;:9;1765:2;1759:9;;;;;;;;;;;:12;;;:17;1756:45;;;1786:8;;;1756:45;1408:13:::1;1424:5:::0;:9:::1;1430:2;1424:9;;;;;;;;;;;:17;;;1408:33;;1467:8;1447:5;:9:::0;1453:2:::1;1447:9;;;;;;;;;;;:17;;:28;;;;1486:49;1503:2;1507:8;1517;1527:7;1486:49;;;;;;;;;:::i;:::-;;;;;;;;1402:138;1309:231:::0;;;;:::o;575:97::-;;;;:::o;1544:173::-;1627:2;1775:1;1759:5;:9;1765:2;1759:9;;;;;;;;;;;:12;;;:17;1756:45;;;1786:8;;;1756:45;1646:66:::1;1661:2;1696:6;1685:8;:17;;;;:::i;:::-;1665:5;:9:::0;1671:2:::1;1665:9;;;;;;;;;;;:17;;;:37;;;;:::i;:::-;1704:7;1646:14;:66::i;:::-;1544:173:::0;;;;:::o;1013:292::-;1111:2;1775:1;1759:5;:9;1765:2;1759:9;;;;;;;;;;;:12;;;:17;1756:45;;;1786:8;;;1756:45;1128:29:::1;1160:5:::0;:9:::1;1166:2;1160:9;;;;;;;;;;;:21;;1128:53;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1211:15;1187:5;:9:::0;1193:2:::1;1187:9;;;;;;;;;;;:21;;:39;;;;;;;;;;;;:::i;:::-;;1237:63;1254:2;1258:15;1275;1292:7;1237:63;;;;;;;;;:::i;:::-;;;;;;;;1122:183;1013:292:::0;;;;:::o;676:82::-;718:13;746:7;739:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;676:82;:::o;-1:-1:-1:-;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;7:75:2:-;40:6;73:2;67:9;57:19;;7:75;:::o;88:117::-;197:1;194;187:12;211:117;320:1;317;310:12;334:77;371:7;400:5;389:16;;334:77;;;:::o;417:122::-;490:24;508:5;490:24;:::i;:::-;483:5;480:35;470:63;;529:1;526;519:12;470:63;417:122;:::o;545:139::-;591:5;629:6;616:20;607:29;;645:33;672:5;645:33;:::i;:::-;545:139;;;;:::o;690:329::-;749:6;798:2;786:9;777:7;773:23;769:32;766:119;;;804:79;;:::i;:::-;766:119;924:1;949:53;994:7;985:6;974:9;970:22;949:53;:::i;:::-;939:63;;895:117;690:329;;;;:::o;1025:118::-;1112:24;1130:5;1112:24;:::i;:::-;1107:3;1100:37;1025:118;;:::o;1149:99::-;1201:6;1235:5;1229:12;1219:22;;1149:99;;;:::o;1254:169::-;1338:11;1372:6;1367:3;1360:19;1412:4;1407:3;1403:14;1388:29;;1254:169;;;;:::o;1429:307::-;1497:1;1507:113;1521:6;1518:1;1515:13;1507:113;;;1606:1;1601:3;1597:11;1591:18;1587:1;1582:3;1578:11;1571:39;1543:2;1540:1;1536:10;1531:15;;1507:113;;;1638:6;1635:1;1632:13;1629:101;;;1718:1;1709:6;1704:3;1700:16;1693:27;1629:101;1478:258;1429:307;;;:::o;1742:102::-;1783:6;1834:2;1830:7;1825:2;1818:5;1814:14;1810:28;1800:38;;1742:102;;;:::o;1850:364::-;1938:3;1966:39;1999:5;1966:39;:::i;:::-;2021:71;2085:6;2080:3;2021:71;:::i;:::-;2014:78;;2101:52;2146:6;2141:3;2134:4;2127:5;2123:16;2101:52;:::i;:::-;2178:29;2200:6;2178:29;:::i;:::-;2173:3;2169:39;2162:46;;1942:272;1850:364;;;;:::o;2220:846::-;2465:4;2503:3;2492:9;2488:19;2480:27;;2517:71;2585:1;2574:9;2570:17;2561:6;2517:71;:::i;:::-;2635:9;2629:4;2625:20;2620:2;2609:9;2605:18;2598:48;2663:78;2736:4;2727:6;2663:78;:::i;:::-;2655:86;;2788:9;2782:4;2778:20;2773:2;2762:9;2758:18;2751:48;2816:78;2889:4;2880:6;2816:78;:::i;:::-;2808:86;;2904:72;2972:2;2961:9;2957:18;2948:6;2904:72;:::i;:::-;2986:73;3054:3;3043:9;3039:19;3030:6;2986:73;:::i;:::-;2220:846;;;;;;;;:::o;3072:117::-;3181:1;3178;3171:12;3195:117;3304:1;3301;3294:12;3318:180;3366:77;3363:1;3356:88;3463:4;3460:1;3453:15;3487:4;3484:1;3477:15;3504:281;3587:27;3609:4;3587:27;:::i;:::-;3579:6;3575:40;3717:6;3705:10;3702:22;3681:18;3669:10;3666:34;3663:62;3660:88;;;3728:18;;:::i;:::-;3660:88;3768:10;3764:2;3757:22;3547:238;3504:281;;:::o;3791:129::-;3825:6;3852:20;;:::i;:::-;3842:30;;3881:33;3909:4;3901:6;3881:33;:::i;:::-;3791:129;;;:::o;3926:308::-;3988:4;4078:18;4070:6;4067:30;4064:56;;;4100:18;;:::i;:::-;4064:56;4138:29;4160:6;4138:29;:::i;:::-;4130:37;;4222:4;4216;4212:15;4204:23;;3926:308;;;:::o;4240:154::-;4324:6;4319:3;4314;4301:30;4386:1;4377:6;4372:3;4368:16;4361:27;4240:154;;;:::o;4400:412::-;4478:5;4503:66;4519:49;4561:6;4519:49;:::i;:::-;4503:66;:::i;:::-;4494:75;;4592:6;4585:5;4578:21;4630:4;4623:5;4619:16;4668:3;4659:6;4654:3;4650:16;4647:25;4644:112;;;4675:79;;:::i;:::-;4644:112;4765:41;4799:6;4794:3;4789;4765:41;:::i;:::-;4484:328;4400:412;;;;;:::o;4832:340::-;4888:5;4937:3;4930:4;4922:6;4918:17;4914:27;4904:122;;4945:79;;:::i;:::-;4904:122;5062:6;5049:20;5087:79;5162:3;5154:6;5147:4;5139:6;5135:17;5087:79;:::i;:::-;5078:88;;4894:278;4832:340;;;;:::o;5178:799::-;5265:6;5273;5281;5330:2;5318:9;5309:7;5305:23;5301:32;5298:119;;;5336:79;;:::i;:::-;5298:119;5456:1;5481:53;5526:7;5517:6;5506:9;5502:22;5481:53;:::i;:::-;5471:63;;5427:117;5583:2;5609:53;5654:7;5645:6;5634:9;5630:22;5609:53;:::i;:::-;5599:63;;5554:118;5739:2;5728:9;5724:18;5711:32;5770:18;5762:6;5759:30;5756:117;;;5792:79;;:::i;:::-;5756:117;5897:63;5952:7;5943:6;5932:9;5928:22;5897:63;:::i;:::-;5887:73;;5682:288;5178:799;;;;;:::o;5983:979::-;6080:6;6088;6096;6145:2;6133:9;6124:7;6120:23;6116:32;6113:119;;;6151:79;;:::i;:::-;6113:119;6299:1;6288:9;6284:17;6271:31;6329:18;6321:6;6318:30;6315:117;;;6351:79;;:::i;:::-;6315:117;6456:63;6511:7;6502:6;6491:9;6487:22;6456:63;:::i;:::-;6446:73;;6242:287;6596:2;6585:9;6581:18;6568:32;6627:18;6619:6;6616:30;6613:117;;;6649:79;;:::i;:::-;6613:117;6754:63;6809:7;6800:6;6789:9;6785:22;6754:63;:::i;:::-;6744:73;;6539:288;6866:2;6892:53;6937:7;6928:6;6917:9;6913:22;6892:53;:::i;:::-;6882:63;;6837:118;5983:979;;;;;:::o;6968:::-;7065:6;7073;7081;7130:2;7118:9;7109:7;7105:23;7101:32;7098:119;;;7136:79;;:::i;:::-;7098:119;7256:1;7281:53;7326:7;7317:6;7306:9;7302:22;7281:53;:::i;:::-;7271:63;;7227:117;7411:2;7400:9;7396:18;7383:32;7442:18;7434:6;7431:30;7428:117;;;7464:79;;:::i;:::-;7428:117;7569:63;7624:7;7615:6;7604:9;7600:22;7569:63;:::i;:::-;7559:73;;7354:288;7709:2;7698:9;7694:18;7681:32;7740:18;7732:6;7729:30;7726:117;;;7762:79;;:::i;:::-;7726:117;7867:63;7922:7;7913:6;7902:9;7898:22;7867:63;:::i;:::-;7857:73;;7652:288;6968:979;;;;;:::o;7953:114::-;8020:6;8054:5;8048:12;8038:22;;7953:114;;;:::o;8073:184::-;8172:11;8206:6;8201:3;8194:19;8246:4;8241:3;8237:14;8222:29;;8073:184;;;;:::o;8263:132::-;8330:4;8353:3;8345:11;;8383:4;8378:3;8374:14;8366:22;;8263:132;;;:::o;8401:108::-;8478:24;8496:5;8478:24;:::i;:::-;8473:3;8466:37;8401:108;;:::o;8515:179::-;8584:10;8605:46;8647:3;8639:6;8605:46;:::i;:::-;8683:4;8678:3;8674:14;8660:28;;8515:179;;;;:::o;8700:113::-;8770:4;8802;8797:3;8793:14;8785:22;;8700:113;;;:::o;8849:732::-;8968:3;8997:54;9045:5;8997:54;:::i;:::-;9067:86;9146:6;9141:3;9067:86;:::i;:::-;9060:93;;9177:56;9227:5;9177:56;:::i;:::-;9256:7;9287:1;9272:284;9297:6;9294:1;9291:13;9272:284;;;9373:6;9367:13;9400:63;9459:3;9444:13;9400:63;:::i;:::-;9393:70;;9486:60;9539:6;9486:60;:::i;:::-;9476:70;;9332:224;9319:1;9316;9312:9;9307:14;;9272:284;;;9276:14;9572:3;9565:10;;8973:608;;;8849:732;;;;:::o;9587:373::-;9730:4;9768:2;9757:9;9753:18;9745:26;;9817:9;9811:4;9807:20;9803:1;9792:9;9788:17;9781:47;9845:108;9948:4;9939:6;9845:108;:::i;:::-;9837:116;;9587:373;;;;:::o;9966:180::-;10014:77;10011:1;10004:88;10111:4;10108:1;10101:15;10135:4;10132:1;10125:15;10152:320;10196:6;10233:1;10227:4;10223:12;10213:22;;10280:1;10274:4;10270:12;10301:18;10291:81;;10357:4;10349:6;10345:17;10335:27;;10291:81;10419:2;10411:6;10408:14;10388:18;10385:38;10382:84;;;10438:18;;:::i;:::-;10382:84;10203:269;10152:320;;;:::o;10478:644::-;10675:4;10713:3;10702:9;10698:19;10690:27;;10727:71;10795:1;10784:9;10780:17;10771:6;10727:71;:::i;:::-;10808:72;10876:2;10865:9;10861:18;10852:6;10808:72;:::i;:::-;10890;10958:2;10947:9;10943:18;10934:6;10890:72;:::i;:::-;11009:9;11003:4;10999:20;10994:2;10983:9;10979:18;10972:48;11037:78;11110:4;11101:6;11037:78;:::i;:::-;11029:86;;10478:644;;;;;;;:::o;11128:180::-;11176:77;11173:1;11166:88;11273:4;11270:1;11263:15;11297:4;11294:1;11287:15;11314:348;11354:7;11377:20;11395:1;11377:20;:::i;:::-;11372:25;;11411:20;11429:1;11411:20;:::i;:::-;11406:25;;11599:1;11531:66;11527:74;11524:1;11521:81;11516:1;11509:9;11502:17;11498:105;11495:131;;;11606:18;;:::i;:::-;11495:131;11654:1;11651;11647:9;11636:20;;11314:348;;;;:::o;11668:305::-;11708:3;11727:20;11745:1;11727:20;:::i;:::-;11722:25;;11761:20;11779:1;11761:20;:::i;:::-;11756:25;;11915:1;11847:66;11843:74;11840:1;11837:81;11834:107;;;11921:18;;:::i;:::-;11834:107;11965:1;11962;11958:9;11951:16;;11668:305;;;;:::o;11979:826::-;12216:4;12254:3;12243:9;12239:19;12231:27;;12268:71;12336:1;12325:9;12321:17;12312:6;12268:71;:::i;:::-;12386:9;12380:4;12376:20;12371:2;12360:9;12356:18;12349:48;12414:78;12487:4;12478:6;12414:78;:::i;:::-;12406:86;;12539:9;12533:4;12529:20;12524:2;12513:9;12509:18;12502:48;12567:78;12640:4;12631:6;12567:78;:::i;:::-;12559:86;;12692:9;12686:4;12682:20;12677:2;12666:9;12662:18;12655:48;12720:78;12793:4;12784:6;12720:78;:::i;:::-;12712:86;;11979:826;;;;;;;:::o",
  "source": "// SPDX-License-Identifier: MIT\npragma solidity >=0.5.9;\n\ncontract TaskJournal {\n  struct TaskEntry {\n    uint id;\n    string name;\n    string description;\n    uint dateCreated;\n    uint dateDue;\n  }\n\n  mapping(uint => TaskEntry) tasks;\n  uint[] taskIds;\n  uint lastTaskId = 1;\n\n  event TaskCreated(uint id, string name, string description, uint dateCreated, uint dateDue);\n  event TaskModifiedDesc(uint id, string oldDescription, string newDescription, string reason);\n  event TaskModifiedDate(uint id, uint oldDate, uint newDate, string reason);\n\n  constructor() {\n\n  }\n\n  function createTask(string memory _name, string memory _description, uint _dateDue) public {\n\n  }\n\n  function getTaskIds() public view returns(uint[] memory) {\n    return taskIds;\n  }\n\n  function getTask(uint id) taskExists(id) public view returns(uint, string memory, string memory, uint, uint) {\n    return(\n      id,\n      tasks[id].name,\n      tasks[id].description,\n      tasks[id].dateCreated,\n      tasks[id].dateDue\n    );\n  }\n\n  function modifyTaskDesc(uint id, string memory _newDescription, string memory _reason) taskExists(id) public {\n    string memory _oldDescription = tasks[id].description;\n    tasks[id].description = _newDescription;\n    emit TaskModifiedDesc(id, _oldDescription, _newDescription, _reason);\n  }\n\n  function modifyTaskDate(uint id, uint _newDate, string memory _reason) taskExists(id) public {\n    uint _oldDate = tasks[id].dateDue;\n    tasks[id].dateDue = _newDate;\n    emit TaskModifiedDate(id, _oldDate, _newDate, _reason);\n  }\n\n  function delayTaskByDays(uint id, uint _numDays, string memory _reason) taskExists(id) public {\n      modifyTaskDate(id, tasks[id].dateDue + _numDays * 1 days, _reason);\n  }\n\n  modifier taskExists(uint id) {\n    if(tasks[id].id == 0) {\n      revert();\n    }\n    _;\n  }\n}\n",
  "sourcePath": "/home/jjmoey/Projects/taskjournal-demo/contracts/TaskJournal.sol",
  "ast": {
    "absolutePath": "project:/contracts/TaskJournal.sol",
    "exportedSymbols": {
      "TaskJournal": [
        228
      ]
    },
    "id": 229,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          ">=",
          "0.5",
          ".9"
        ],
        "nodeType": "PragmaDirective",
        "src": "32:24:0"
      },
      {
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "TaskJournal",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 228,
        "linearizedBaseContracts": [
          228
        ],
        "name": "TaskJournal",
        "nameLocation": "67:11:0",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "TaskJournal.TaskEntry",
            "id": 12,
            "members": [
              {
                "constant": false,
                "id": 3,
                "mutability": "mutable",
                "name": "id",
                "nameLocation": "111:2:0",
                "nodeType": "VariableDeclaration",
                "scope": 12,
                "src": "106:7:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 2,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "106:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 5,
                "mutability": "mutable",
                "name": "name",
                "nameLocation": "126:4:0",
                "nodeType": "VariableDeclaration",
                "scope": 12,
                "src": "119:11:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 4,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "119:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7,
                "mutability": "mutable",
                "name": "description",
                "nameLocation": "143:11:0",
                "nodeType": "VariableDeclaration",
                "scope": 12,
                "src": "136:18:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 6,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "136:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 9,
                "mutability": "mutable",
                "name": "dateCreated",
                "nameLocation": "165:11:0",
                "nodeType": "VariableDeclaration",
                "scope": 12,
                "src": "160:16:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 8,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "160:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 11,
                "mutability": "mutable",
                "name": "dateDue",
                "nameLocation": "187:7:0",
                "nodeType": "VariableDeclaration",
                "scope": 12,
                "src": "182:12:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 10,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "182:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "TaskEntry",
            "nameLocation": "90:9:0",
            "nodeType": "StructDefinition",
            "scope": 228,
            "src": "83:116:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 17,
            "mutability": "mutable",
            "name": "tasks",
            "nameLocation": "230:5:0",
            "nodeType": "VariableDeclaration",
            "scope": 228,
            "src": "203:32:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_TaskEntry_$12_storage_$",
              "typeString": "mapping(uint256 => struct TaskJournal.TaskEntry)"
            },
            "typeName": {
              "id": 16,
              "keyType": {
                "id": 13,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "211:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "203:26:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_TaskEntry_$12_storage_$",
                "typeString": "mapping(uint256 => struct TaskJournal.TaskEntry)"
              },
              "valueType": {
                "id": 15,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 14,
                  "name": "TaskEntry",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 12,
                  "src": "219:9:0"
                },
                "referencedDeclaration": 12,
                "src": "219:9:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_TaskEntry_$12_storage_ptr",
                  "typeString": "struct TaskJournal.TaskEntry"
                }
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 20,
            "mutability": "mutable",
            "name": "taskIds",
            "nameLocation": "246:7:0",
            "nodeType": "VariableDeclaration",
            "scope": 228,
            "src": "239:14:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
              "typeString": "uint256[]"
            },
            "typeName": {
              "baseType": {
                "id": 18,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "239:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "id": 19,
              "nodeType": "ArrayTypeName",
              "src": "239:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                "typeString": "uint256[]"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 23,
            "mutability": "mutable",
            "name": "lastTaskId",
            "nameLocation": "262:10:0",
            "nodeType": "VariableDeclaration",
            "scope": 228,
            "src": "257:19:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 21,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "257:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "31",
              "id": 22,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "275:1:0",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1_by_1",
                "typeString": "int_const 1"
              },
              "value": "1"
            },
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "id": 35,
            "name": "TaskCreated",
            "nameLocation": "287:11:0",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 34,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "304:2:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 35,
                  "src": "299:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 24,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "299:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "315:4:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 35,
                  "src": "308:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "308:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "description",
                  "nameLocation": "328:11:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 35,
                  "src": "321:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "321:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "dateCreated",
                  "nameLocation": "346:11:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 35,
                  "src": "341:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 30,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "341:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 33,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "dateDue",
                  "nameLocation": "364:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 35,
                  "src": "359:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "359:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "298:74:0"
            },
            "src": "281:92:0"
          },
          {
            "anonymous": false,
            "id": 45,
            "name": "TaskModifiedDesc",
            "nameLocation": "382:16:0",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 44,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 37,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "404:2:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 45,
                  "src": "399:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 36,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "399:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 39,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "oldDescription",
                  "nameLocation": "415:14:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 45,
                  "src": "408:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 38,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "408:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "newDescription",
                  "nameLocation": "438:14:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 45,
                  "src": "431:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 40,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "431:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 43,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "reason",
                  "nameLocation": "461:6:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 45,
                  "src": "454:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 42,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "454:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "398:70:0"
            },
            "src": "376:93:0"
          },
          {
            "anonymous": false,
            "id": 55,
            "name": "TaskModifiedDate",
            "nameLocation": "478:16:0",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 54,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "500:2:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 55,
                  "src": "495:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 46,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "495:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 49,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "oldDate",
                  "nameLocation": "509:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 55,
                  "src": "504:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "504:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 51,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "newDate",
                  "nameLocation": "523:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 55,
                  "src": "518:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 50,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "518:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 53,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "reason",
                  "nameLocation": "539:6:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 55,
                  "src": "532:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 52,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "532:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "494:52:0"
            },
            "src": "472:75:0"
          },
          {
            "body": {
              "id": 58,
              "nodeType": "Block",
              "src": "565:6:0",
              "statements": []
            },
            "id": 59,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 56,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "562:2:0"
            },
            "returnParameters": {
              "id": 57,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "565:0:0"
            },
            "scope": 228,
            "src": "551:20:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 68,
              "nodeType": "Block",
              "src": "666:6:0",
              "statements": []
            },
            "functionSelector": "41a4e30a",
            "id": 69,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "createTask",
            "nameLocation": "584:10:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 66,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61,
                  "mutability": "mutable",
                  "name": "_name",
                  "nameLocation": "609:5:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 69,
                  "src": "595:19:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 60,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "595:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63,
                  "mutability": "mutable",
                  "name": "_description",
                  "nameLocation": "630:12:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 69,
                  "src": "616:26:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 62,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "616:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 65,
                  "mutability": "mutable",
                  "name": "_dateDue",
                  "nameLocation": "649:8:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 69,
                  "src": "644:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 64,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "644:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "594:64:0"
            },
            "returnParameters": {
              "id": 67,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "666:0:0"
            },
            "scope": 228,
            "src": "575:97:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 77,
              "nodeType": "Block",
              "src": "733:25:0",
              "statements": [
                {
                  "expression": {
                    "id": 75,
                    "name": "taskIds",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 20,
                    "src": "746:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                      "typeString": "uint256[] storage ref"
                    }
                  },
                  "functionReturnParameters": 74,
                  "id": 76,
                  "nodeType": "Return",
                  "src": "739:14:0"
                }
              ]
            },
            "functionSelector": "bcd14805",
            "id": 78,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getTaskIds",
            "nameLocation": "685:10:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 70,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "695:2:0"
            },
            "returnParameters": {
              "id": 74,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 73,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 78,
                  "src": "718:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 71,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "718:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 72,
                    "nodeType": "ArrayTypeName",
                    "src": "718:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "717:15:0"
            },
            "scope": 228,
            "src": "676:82:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 115,
              "nodeType": "Block",
              "src": "871:138:0",
              "statements": [
                {
                  "expression": {
                    "components": [
                      {
                        "id": 96,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 80,
                        "src": "891:2:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "baseExpression": {
                            "id": 97,
                            "name": "tasks",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17,
                            "src": "901:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_TaskEntry_$12_storage_$",
                              "typeString": "mapping(uint256 => struct TaskJournal.TaskEntry storage ref)"
                            }
                          },
                          "id": 99,
                          "indexExpression": {
                            "id": 98,
                            "name": "id",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 80,
                            "src": "907:2:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "901:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_TaskEntry_$12_storage",
                            "typeString": "struct TaskJournal.TaskEntry storage ref"
                          }
                        },
                        "id": 100,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "name",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 5,
                        "src": "901:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      {
                        "expression": {
                          "baseExpression": {
                            "id": 101,
                            "name": "tasks",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17,
                            "src": "923:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_TaskEntry_$12_storage_$",
                              "typeString": "mapping(uint256 => struct TaskJournal.TaskEntry storage ref)"
                            }
                          },
                          "id": 103,
                          "indexExpression": {
                            "id": 102,
                            "name": "id",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 80,
                            "src": "929:2:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "923:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_TaskEntry_$12_storage",
                            "typeString": "struct TaskJournal.TaskEntry storage ref"
                          }
                        },
                        "id": 104,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "description",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7,
                        "src": "923:21:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      {
                        "expression": {
                          "baseExpression": {
                            "id": 105,
                            "name": "tasks",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17,
                            "src": "952:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_TaskEntry_$12_storage_$",
                              "typeString": "mapping(uint256 => struct TaskJournal.TaskEntry storage ref)"
                            }
                          },
                          "id": 107,
                          "indexExpression": {
                            "id": 106,
                            "name": "id",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 80,
                            "src": "958:2:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "952:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_TaskEntry_$12_storage",
                            "typeString": "struct TaskJournal.TaskEntry storage ref"
                          }
                        },
                        "id": 108,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "dateCreated",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9,
                        "src": "952:21:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "baseExpression": {
                            "id": 109,
                            "name": "tasks",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17,
                            "src": "981:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_TaskEntry_$12_storage_$",
                              "typeString": "mapping(uint256 => struct TaskJournal.TaskEntry storage ref)"
                            }
                          },
                          "id": 111,
                          "indexExpression": {
                            "id": 110,
                            "name": "id",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 80,
                            "src": "987:2:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "981:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_TaskEntry_$12_storage",
                            "typeString": "struct TaskJournal.TaskEntry storage ref"
                          }
                        },
                        "id": 112,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "dateDue",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 11,
                        "src": "981:17:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 113,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "883:121:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_string_storage_$_t_string_storage_$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,string storage ref,string storage ref,uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 95,
                  "id": 114,
                  "nodeType": "Return",
                  "src": "877:127:0"
                }
              ]
            },
            "functionSelector": "1d65e77e",
            "id": 116,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 83,
                    "name": "id",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 80,
                    "src": "799:2:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 84,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 82,
                  "name": "taskExists",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 227,
                  "src": "788:10:0"
                },
                "nodeType": "ModifierInvocation",
                "src": "788:14:0"
              }
            ],
            "name": "getTask",
            "nameLocation": "771:7:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 81,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 80,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "784:2:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 116,
                  "src": "779:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 79,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "779:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "778:9:0"
            },
            "returnParameters": {
              "id": 95,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 86,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 116,
                  "src": "823:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 85,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "823:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 88,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 116,
                  "src": "829:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 87,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "829:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 90,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 116,
                  "src": "844:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 89,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "844:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 92,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 116,
                  "src": "859:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "859:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 94,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 116,
                  "src": "865:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 93,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "865:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "822:48:0"
            },
            "scope": 228,
            "src": "762:247:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 149,
              "nodeType": "Block",
              "src": "1122:183:0",
              "statements": [
                {
                  "assignments": [
                    129
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 129,
                      "mutability": "mutable",
                      "name": "_oldDescription",
                      "nameLocation": "1142:15:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 149,
                      "src": "1128:29:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 128,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "1128:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 134,
                  "initialValue": {
                    "expression": {
                      "baseExpression": {
                        "id": 130,
                        "name": "tasks",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17,
                        "src": "1160:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_TaskEntry_$12_storage_$",
                          "typeString": "mapping(uint256 => struct TaskJournal.TaskEntry storage ref)"
                        }
                      },
                      "id": 132,
                      "indexExpression": {
                        "id": 131,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 118,
                        "src": "1166:2:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "1160:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_TaskEntry_$12_storage",
                        "typeString": "struct TaskJournal.TaskEntry storage ref"
                      }
                    },
                    "id": 133,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "description",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 7,
                    "src": "1160:21:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1128:53:0"
                },
                {
                  "expression": {
                    "id": 140,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "baseExpression": {
                          "id": 135,
                          "name": "tasks",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17,
                          "src": "1187:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_TaskEntry_$12_storage_$",
                            "typeString": "mapping(uint256 => struct TaskJournal.TaskEntry storage ref)"
                          }
                        },
                        "id": 137,
                        "indexExpression": {
                          "id": 136,
                          "name": "id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 118,
                          "src": "1193:2:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1187:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_TaskEntry_$12_storage",
                          "typeString": "struct TaskJournal.TaskEntry storage ref"
                        }
                      },
                      "id": 138,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "description",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7,
                      "src": "1187:21:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 139,
                      "name": "_newDescription",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 120,
                      "src": "1211:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "1187:39:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 141,
                  "nodeType": "ExpressionStatement",
                  "src": "1187:39:0"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 143,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 118,
                        "src": "1254:2:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 144,
                        "name": "_oldDescription",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 129,
                        "src": "1258:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 145,
                        "name": "_newDescription",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 120,
                        "src": "1275:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 146,
                        "name": "_reason",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 122,
                        "src": "1292:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 142,
                      "name": "TaskModifiedDesc",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45,
                      "src": "1237:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (uint256,string memory,string memory,string memory)"
                      }
                    },
                    "id": 147,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1237:63:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 148,
                  "nodeType": "EmitStatement",
                  "src": "1232:68:0"
                }
              ]
            },
            "functionSelector": "860d8eeb",
            "id": 150,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 125,
                    "name": "id",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 118,
                    "src": "1111:2:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 126,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 124,
                  "name": "taskExists",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 227,
                  "src": "1100:10:0"
                },
                "nodeType": "ModifierInvocation",
                "src": "1100:14:0"
              }
            ],
            "name": "modifyTaskDesc",
            "nameLocation": "1022:14:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 123,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 118,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "1042:2:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 150,
                  "src": "1037:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 117,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1037:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 120,
                  "mutability": "mutable",
                  "name": "_newDescription",
                  "nameLocation": "1060:15:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 150,
                  "src": "1046:29:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 119,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1046:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 122,
                  "mutability": "mutable",
                  "name": "_reason",
                  "nameLocation": "1091:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 150,
                  "src": "1077:21:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 121,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1077:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1036:63:0"
            },
            "returnParameters": {
              "id": 127,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1122:0:0"
            },
            "scope": 228,
            "src": "1013:292:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 183,
              "nodeType": "Block",
              "src": "1402:138:0",
              "statements": [
                {
                  "assignments": [
                    163
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 163,
                      "mutability": "mutable",
                      "name": "_oldDate",
                      "nameLocation": "1413:8:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 183,
                      "src": "1408:13:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 162,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1408:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 168,
                  "initialValue": {
                    "expression": {
                      "baseExpression": {
                        "id": 164,
                        "name": "tasks",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17,
                        "src": "1424:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_TaskEntry_$12_storage_$",
                          "typeString": "mapping(uint256 => struct TaskJournal.TaskEntry storage ref)"
                        }
                      },
                      "id": 166,
                      "indexExpression": {
                        "id": 165,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 152,
                        "src": "1430:2:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "1424:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_TaskEntry_$12_storage",
                        "typeString": "struct TaskJournal.TaskEntry storage ref"
                      }
                    },
                    "id": 167,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "dateDue",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 11,
                    "src": "1424:17:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1408:33:0"
                },
                {
                  "expression": {
                    "id": 174,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "baseExpression": {
                          "id": 169,
                          "name": "tasks",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17,
                          "src": "1447:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_TaskEntry_$12_storage_$",
                            "typeString": "mapping(uint256 => struct TaskJournal.TaskEntry storage ref)"
                          }
                        },
                        "id": 171,
                        "indexExpression": {
                          "id": 170,
                          "name": "id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 152,
                          "src": "1453:2:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1447:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_TaskEntry_$12_storage",
                          "typeString": "struct TaskJournal.TaskEntry storage ref"
                        }
                      },
                      "id": 172,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "dateDue",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 11,
                      "src": "1447:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 173,
                      "name": "_newDate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 154,
                      "src": "1467:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1447:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 175,
                  "nodeType": "ExpressionStatement",
                  "src": "1447:28:0"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 177,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 152,
                        "src": "1503:2:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 178,
                        "name": "_oldDate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 163,
                        "src": "1507:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 179,
                        "name": "_newDate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 154,
                        "src": "1517:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 180,
                        "name": "_reason",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 156,
                        "src": "1527:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 176,
                      "name": "TaskModifiedDate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 55,
                      "src": "1486:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (uint256,uint256,uint256,string memory)"
                      }
                    },
                    "id": 181,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1486:49:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 182,
                  "nodeType": "EmitStatement",
                  "src": "1481:54:0"
                }
              ]
            },
            "functionSelector": "31e07198",
            "id": 184,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 159,
                    "name": "id",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 152,
                    "src": "1391:2:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 160,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 158,
                  "name": "taskExists",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 227,
                  "src": "1380:10:0"
                },
                "nodeType": "ModifierInvocation",
                "src": "1380:14:0"
              }
            ],
            "name": "modifyTaskDate",
            "nameLocation": "1318:14:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 157,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 152,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "1338:2:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 184,
                  "src": "1333:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 151,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1333:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 154,
                  "mutability": "mutable",
                  "name": "_newDate",
                  "nameLocation": "1347:8:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 184,
                  "src": "1342:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 153,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1342:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 156,
                  "mutability": "mutable",
                  "name": "_reason",
                  "nameLocation": "1371:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 184,
                  "src": "1357:21:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 155,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1357:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1332:47:0"
            },
            "returnParameters": {
              "id": 161,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1402:0:0"
            },
            "scope": 228,
            "src": "1309:231:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 209,
              "nodeType": "Block",
              "src": "1638:79:0",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 197,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 186,
                        "src": "1661:2:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 205,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "baseExpression": {
                              "id": 198,
                              "name": "tasks",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 17,
                              "src": "1665:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_TaskEntry_$12_storage_$",
                                "typeString": "mapping(uint256 => struct TaskJournal.TaskEntry storage ref)"
                              }
                            },
                            "id": 200,
                            "indexExpression": {
                              "id": 199,
                              "name": "id",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 186,
                              "src": "1671:2:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1665:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_TaskEntry_$12_storage",
                              "typeString": "struct TaskJournal.TaskEntry storage ref"
                            }
                          },
                          "id": 201,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "dateDue",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 11,
                          "src": "1665:17:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 204,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 202,
                            "name": "_numDays",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 188,
                            "src": "1685:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 203,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1696:6:0",
                            "subdenomination": "days",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_86400_by_1",
                              "typeString": "int_const 86400"
                            },
                            "value": "1"
                          },
                          "src": "1685:17:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1665:37:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 206,
                        "name": "_reason",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 190,
                        "src": "1704:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 196,
                      "name": "modifyTaskDate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 184,
                      "src": "1646:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (uint256,uint256,string memory)"
                      }
                    },
                    "id": 207,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1646:66:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 208,
                  "nodeType": "ExpressionStatement",
                  "src": "1646:66:0"
                }
              ]
            },
            "functionSelector": "6bbe8b42",
            "id": 210,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 193,
                    "name": "id",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 186,
                    "src": "1627:2:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 194,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 192,
                  "name": "taskExists",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 227,
                  "src": "1616:10:0"
                },
                "nodeType": "ModifierInvocation",
                "src": "1616:14:0"
              }
            ],
            "name": "delayTaskByDays",
            "nameLocation": "1553:15:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 191,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 186,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "1574:2:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 210,
                  "src": "1569:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 185,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1569:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 188,
                  "mutability": "mutable",
                  "name": "_numDays",
                  "nameLocation": "1583:8:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 210,
                  "src": "1578:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 187,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1578:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 190,
                  "mutability": "mutable",
                  "name": "_reason",
                  "nameLocation": "1607:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 210,
                  "src": "1593:21:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 189,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1593:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1568:47:0"
            },
            "returnParameters": {
              "id": 195,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1638:0:0"
            },
            "scope": 228,
            "src": "1544:173:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 226,
              "nodeType": "Block",
              "src": "1750:62:0",
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 219,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "baseExpression": {
                          "id": 214,
                          "name": "tasks",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17,
                          "src": "1759:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_TaskEntry_$12_storage_$",
                            "typeString": "mapping(uint256 => struct TaskJournal.TaskEntry storage ref)"
                          }
                        },
                        "id": 216,
                        "indexExpression": {
                          "id": 215,
                          "name": "id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 212,
                          "src": "1765:2:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1759:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_TaskEntry_$12_storage",
                          "typeString": "struct TaskJournal.TaskEntry storage ref"
                        }
                      },
                      "id": 217,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "id",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3,
                      "src": "1759:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 218,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1775:1:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1759:17:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 224,
                  "nodeType": "IfStatement",
                  "src": "1756:45:0",
                  "trueBody": {
                    "id": 223,
                    "nodeType": "Block",
                    "src": "1778:23:0",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 220,
                            "name": "revert",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              4294967277,
                              4294967277
                            ],
                            "referencedDeclaration": 4294967277,
                            "src": "1786:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_revert_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 221,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1786:8:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 222,
                        "nodeType": "ExpressionStatement",
                        "src": "1786:8:0"
                      }
                    ]
                  }
                },
                {
                  "id": 225,
                  "nodeType": "PlaceholderStatement",
                  "src": "1806:1:0"
                }
              ]
            },
            "id": 227,
            "name": "taskExists",
            "nameLocation": "1730:10:0",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 213,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 212,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "1746:2:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 227,
                  "src": "1741:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 211,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1741:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1740:9:0"
            },
            "src": "1721:91:0",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "scope": 229,
        "src": "58:1756:0",
        "usedErrors": []
      }
    ],
    "src": "32:1783:0"
  },
  "legacyAST": {
    "absolutePath": "project:/contracts/TaskJournal.sol",
    "exportedSymbols": {
      "TaskJournal": [
        228
      ]
    },
    "id": 229,
    "license": "MIT",
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 1,
        "literals": [
          "solidity",
          ">=",
          "0.5",
          ".9"
        ],
        "nodeType": "PragmaDirective",
        "src": "32:24:0"
      },
      {
        "abstract": false,
        "baseContracts": [],
        "canonicalName": "TaskJournal",
        "contractDependencies": [],
        "contractKind": "contract",
        "fullyImplemented": true,
        "id": 228,
        "linearizedBaseContracts": [
          228
        ],
        "name": "TaskJournal",
        "nameLocation": "67:11:0",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "canonicalName": "TaskJournal.TaskEntry",
            "id": 12,
            "members": [
              {
                "constant": false,
                "id": 3,
                "mutability": "mutable",
                "name": "id",
                "nameLocation": "111:2:0",
                "nodeType": "VariableDeclaration",
                "scope": 12,
                "src": "106:7:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 2,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "106:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 5,
                "mutability": "mutable",
                "name": "name",
                "nameLocation": "126:4:0",
                "nodeType": "VariableDeclaration",
                "scope": 12,
                "src": "119:11:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 4,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "119:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 7,
                "mutability": "mutable",
                "name": "description",
                "nameLocation": "143:11:0",
                "nodeType": "VariableDeclaration",
                "scope": 12,
                "src": "136:18:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_string_storage_ptr",
                  "typeString": "string"
                },
                "typeName": {
                  "id": 6,
                  "name": "string",
                  "nodeType": "ElementaryTypeName",
                  "src": "136:6:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_storage_ptr",
                    "typeString": "string"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 9,
                "mutability": "mutable",
                "name": "dateCreated",
                "nameLocation": "165:11:0",
                "nodeType": "VariableDeclaration",
                "scope": 12,
                "src": "160:16:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 8,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "160:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              },
              {
                "constant": false,
                "id": 11,
                "mutability": "mutable",
                "name": "dateDue",
                "nameLocation": "187:7:0",
                "nodeType": "VariableDeclaration",
                "scope": 12,
                "src": "182:12:0",
                "stateVariable": false,
                "storageLocation": "default",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                },
                "typeName": {
                  "id": 10,
                  "name": "uint",
                  "nodeType": "ElementaryTypeName",
                  "src": "182:4:0",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  }
                },
                "visibility": "internal"
              }
            ],
            "name": "TaskEntry",
            "nameLocation": "90:9:0",
            "nodeType": "StructDefinition",
            "scope": 228,
            "src": "83:116:0",
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 17,
            "mutability": "mutable",
            "name": "tasks",
            "nameLocation": "230:5:0",
            "nodeType": "VariableDeclaration",
            "scope": 228,
            "src": "203:32:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_TaskEntry_$12_storage_$",
              "typeString": "mapping(uint256 => struct TaskJournal.TaskEntry)"
            },
            "typeName": {
              "id": 16,
              "keyType": {
                "id": 13,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "211:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "nodeType": "Mapping",
              "src": "203:26:0",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_TaskEntry_$12_storage_$",
                "typeString": "mapping(uint256 => struct TaskJournal.TaskEntry)"
              },
              "valueType": {
                "id": 15,
                "nodeType": "UserDefinedTypeName",
                "pathNode": {
                  "id": 14,
                  "name": "TaskEntry",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 12,
                  "src": "219:9:0"
                },
                "referencedDeclaration": 12,
                "src": "219:9:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_struct$_TaskEntry_$12_storage_ptr",
                  "typeString": "struct TaskJournal.TaskEntry"
                }
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 20,
            "mutability": "mutable",
            "name": "taskIds",
            "nameLocation": "246:7:0",
            "nodeType": "VariableDeclaration",
            "scope": 228,
            "src": "239:14:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
              "typeString": "uint256[]"
            },
            "typeName": {
              "baseType": {
                "id": 18,
                "name": "uint",
                "nodeType": "ElementaryTypeName",
                "src": "239:4:0",
                "typeDescriptions": {
                  "typeIdentifier": "t_uint256",
                  "typeString": "uint256"
                }
              },
              "id": 19,
              "nodeType": "ArrayTypeName",
              "src": "239:6:0",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                "typeString": "uint256[]"
              }
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 23,
            "mutability": "mutable",
            "name": "lastTaskId",
            "nameLocation": "262:10:0",
            "nodeType": "VariableDeclaration",
            "scope": 228,
            "src": "257:19:0",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 21,
              "name": "uint",
              "nodeType": "ElementaryTypeName",
              "src": "257:4:0",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": {
              "hexValue": "31",
              "id": 22,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "number",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "275:1:0",
              "typeDescriptions": {
                "typeIdentifier": "t_rational_1_by_1",
                "typeString": "int_const 1"
              },
              "value": "1"
            },
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "id": 35,
            "name": "TaskCreated",
            "nameLocation": "287:11:0",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 34,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 25,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "304:2:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 35,
                  "src": "299:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 24,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "299:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 27,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "name",
                  "nameLocation": "315:4:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 35,
                  "src": "308:11:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 26,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "308:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 29,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "description",
                  "nameLocation": "328:11:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 35,
                  "src": "321:18:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 28,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "321:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 31,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "dateCreated",
                  "nameLocation": "346:11:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 35,
                  "src": "341:16:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 30,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "341:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 33,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "dateDue",
                  "nameLocation": "364:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 35,
                  "src": "359:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 32,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "359:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "298:74:0"
            },
            "src": "281:92:0"
          },
          {
            "anonymous": false,
            "id": 45,
            "name": "TaskModifiedDesc",
            "nameLocation": "382:16:0",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 44,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 37,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "404:2:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 45,
                  "src": "399:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 36,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "399:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 39,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "oldDescription",
                  "nameLocation": "415:14:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 45,
                  "src": "408:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 38,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "408:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 41,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "newDescription",
                  "nameLocation": "438:14:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 45,
                  "src": "431:21:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 40,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "431:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 43,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "reason",
                  "nameLocation": "461:6:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 45,
                  "src": "454:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 42,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "454:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "398:70:0"
            },
            "src": "376:93:0"
          },
          {
            "anonymous": false,
            "id": 55,
            "name": "TaskModifiedDate",
            "nameLocation": "478:16:0",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 54,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 47,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "500:2:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 55,
                  "src": "495:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 46,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "495:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 49,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "oldDate",
                  "nameLocation": "509:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 55,
                  "src": "504:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 48,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "504:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 51,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "newDate",
                  "nameLocation": "523:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 55,
                  "src": "518:12:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 50,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "518:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 53,
                  "indexed": false,
                  "mutability": "mutable",
                  "name": "reason",
                  "nameLocation": "539:6:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 55,
                  "src": "532:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 52,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "532:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "494:52:0"
            },
            "src": "472:75:0"
          },
          {
            "body": {
              "id": 58,
              "nodeType": "Block",
              "src": "565:6:0",
              "statements": []
            },
            "id": 59,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [],
            "name": "",
            "nameLocation": "-1:-1:-1",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 56,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "562:2:0"
            },
            "returnParameters": {
              "id": 57,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "565:0:0"
            },
            "scope": 228,
            "src": "551:20:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 68,
              "nodeType": "Block",
              "src": "666:6:0",
              "statements": []
            },
            "functionSelector": "41a4e30a",
            "id": 69,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "createTask",
            "nameLocation": "584:10:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 66,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 61,
                  "mutability": "mutable",
                  "name": "_name",
                  "nameLocation": "609:5:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 69,
                  "src": "595:19:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 60,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "595:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 63,
                  "mutability": "mutable",
                  "name": "_description",
                  "nameLocation": "630:12:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 69,
                  "src": "616:26:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 62,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "616:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 65,
                  "mutability": "mutable",
                  "name": "_dateDue",
                  "nameLocation": "649:8:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 69,
                  "src": "644:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 64,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "644:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "594:64:0"
            },
            "returnParameters": {
              "id": 67,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "666:0:0"
            },
            "scope": 228,
            "src": "575:97:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 77,
              "nodeType": "Block",
              "src": "733:25:0",
              "statements": [
                {
                  "expression": {
                    "id": 75,
                    "name": "taskIds",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 20,
                    "src": "746:7:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                      "typeString": "uint256[] storage ref"
                    }
                  },
                  "functionReturnParameters": 74,
                  "id": 76,
                  "nodeType": "Return",
                  "src": "739:14:0"
                }
              ]
            },
            "functionSelector": "bcd14805",
            "id": 78,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "getTaskIds",
            "nameLocation": "685:10:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 70,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "695:2:0"
            },
            "returnParameters": {
              "id": 74,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 73,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 78,
                  "src": "718:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_uint256_$dyn_memory_ptr",
                    "typeString": "uint256[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 71,
                      "name": "uint",
                      "nodeType": "ElementaryTypeName",
                      "src": "718:4:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 72,
                    "nodeType": "ArrayTypeName",
                    "src": "718:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                      "typeString": "uint256[]"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "717:15:0"
            },
            "scope": 228,
            "src": "676:82:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 115,
              "nodeType": "Block",
              "src": "871:138:0",
              "statements": [
                {
                  "expression": {
                    "components": [
                      {
                        "id": 96,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 80,
                        "src": "891:2:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "baseExpression": {
                            "id": 97,
                            "name": "tasks",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17,
                            "src": "901:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_TaskEntry_$12_storage_$",
                              "typeString": "mapping(uint256 => struct TaskJournal.TaskEntry storage ref)"
                            }
                          },
                          "id": 99,
                          "indexExpression": {
                            "id": 98,
                            "name": "id",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 80,
                            "src": "907:2:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "901:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_TaskEntry_$12_storage",
                            "typeString": "struct TaskJournal.TaskEntry storage ref"
                          }
                        },
                        "id": 100,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "name",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 5,
                        "src": "901:14:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      {
                        "expression": {
                          "baseExpression": {
                            "id": 101,
                            "name": "tasks",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17,
                            "src": "923:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_TaskEntry_$12_storage_$",
                              "typeString": "mapping(uint256 => struct TaskJournal.TaskEntry storage ref)"
                            }
                          },
                          "id": 103,
                          "indexExpression": {
                            "id": 102,
                            "name": "id",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 80,
                            "src": "929:2:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "923:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_TaskEntry_$12_storage",
                            "typeString": "struct TaskJournal.TaskEntry storage ref"
                          }
                        },
                        "id": 104,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "description",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 7,
                        "src": "923:21:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage",
                          "typeString": "string storage ref"
                        }
                      },
                      {
                        "expression": {
                          "baseExpression": {
                            "id": 105,
                            "name": "tasks",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17,
                            "src": "952:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_TaskEntry_$12_storage_$",
                              "typeString": "mapping(uint256 => struct TaskJournal.TaskEntry storage ref)"
                            }
                          },
                          "id": 107,
                          "indexExpression": {
                            "id": 106,
                            "name": "id",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 80,
                            "src": "958:2:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "952:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_TaskEntry_$12_storage",
                            "typeString": "struct TaskJournal.TaskEntry storage ref"
                          }
                        },
                        "id": 108,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "dateCreated",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 9,
                        "src": "952:21:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "expression": {
                          "baseExpression": {
                            "id": 109,
                            "name": "tasks",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 17,
                            "src": "981:5:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_TaskEntry_$12_storage_$",
                              "typeString": "mapping(uint256 => struct TaskJournal.TaskEntry storage ref)"
                            }
                          },
                          "id": 111,
                          "indexExpression": {
                            "id": 110,
                            "name": "id",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 80,
                            "src": "987:2:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "981:9:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_struct$_TaskEntry_$12_storage",
                            "typeString": "struct TaskJournal.TaskEntry storage ref"
                          }
                        },
                        "id": 112,
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "dateDue",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": 11,
                        "src": "981:17:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "id": 113,
                    "isConstant": false,
                    "isInlineArray": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "TupleExpression",
                    "src": "883:121:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$_t_uint256_$_t_string_storage_$_t_string_storage_$_t_uint256_$_t_uint256_$",
                      "typeString": "tuple(uint256,string storage ref,string storage ref,uint256,uint256)"
                    }
                  },
                  "functionReturnParameters": 95,
                  "id": 114,
                  "nodeType": "Return",
                  "src": "877:127:0"
                }
              ]
            },
            "functionSelector": "1d65e77e",
            "id": 116,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 83,
                    "name": "id",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 80,
                    "src": "799:2:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 84,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 82,
                  "name": "taskExists",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 227,
                  "src": "788:10:0"
                },
                "nodeType": "ModifierInvocation",
                "src": "788:14:0"
              }
            ],
            "name": "getTask",
            "nameLocation": "771:7:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 81,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 80,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "784:2:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 116,
                  "src": "779:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 79,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "779:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "778:9:0"
            },
            "returnParameters": {
              "id": 95,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 86,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 116,
                  "src": "823:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 85,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "823:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 88,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 116,
                  "src": "829:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 87,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "829:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 90,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 116,
                  "src": "844:13:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 89,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "844:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 92,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 116,
                  "src": "859:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 91,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "859:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 94,
                  "mutability": "mutable",
                  "name": "",
                  "nameLocation": "-1:-1:-1",
                  "nodeType": "VariableDeclaration",
                  "scope": 116,
                  "src": "865:4:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 93,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "865:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "822:48:0"
            },
            "scope": 228,
            "src": "762:247:0",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 149,
              "nodeType": "Block",
              "src": "1122:183:0",
              "statements": [
                {
                  "assignments": [
                    129
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 129,
                      "mutability": "mutable",
                      "name": "_oldDescription",
                      "nameLocation": "1142:15:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 149,
                      "src": "1128:29:0",
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string"
                      },
                      "typeName": {
                        "id": 128,
                        "name": "string",
                        "nodeType": "ElementaryTypeName",
                        "src": "1128:6:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_storage_ptr",
                          "typeString": "string"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 134,
                  "initialValue": {
                    "expression": {
                      "baseExpression": {
                        "id": 130,
                        "name": "tasks",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17,
                        "src": "1160:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_TaskEntry_$12_storage_$",
                          "typeString": "mapping(uint256 => struct TaskJournal.TaskEntry storage ref)"
                        }
                      },
                      "id": 132,
                      "indexExpression": {
                        "id": 131,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 118,
                        "src": "1166:2:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "1160:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_TaskEntry_$12_storage",
                        "typeString": "struct TaskJournal.TaskEntry storage ref"
                      }
                    },
                    "id": 133,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "description",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 7,
                    "src": "1160:21:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1128:53:0"
                },
                {
                  "expression": {
                    "id": 140,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "baseExpression": {
                          "id": 135,
                          "name": "tasks",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17,
                          "src": "1187:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_TaskEntry_$12_storage_$",
                            "typeString": "mapping(uint256 => struct TaskJournal.TaskEntry storage ref)"
                          }
                        },
                        "id": 137,
                        "indexExpression": {
                          "id": 136,
                          "name": "id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 118,
                          "src": "1193:2:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1187:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_TaskEntry_$12_storage",
                          "typeString": "struct TaskJournal.TaskEntry storage ref"
                        }
                      },
                      "id": 138,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "description",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 7,
                      "src": "1187:21:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_storage",
                        "typeString": "string storage ref"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 139,
                      "name": "_newDescription",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 120,
                      "src": "1211:15:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_string_memory_ptr",
                        "typeString": "string memory"
                      }
                    },
                    "src": "1187:39:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage",
                      "typeString": "string storage ref"
                    }
                  },
                  "id": 141,
                  "nodeType": "ExpressionStatement",
                  "src": "1187:39:0"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 143,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 118,
                        "src": "1254:2:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 144,
                        "name": "_oldDescription",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 129,
                        "src": "1258:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 145,
                        "name": "_newDescription",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 120,
                        "src": "1275:15:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      },
                      {
                        "id": 146,
                        "name": "_reason",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 122,
                        "src": "1292:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 142,
                      "name": "TaskModifiedDesc",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 45,
                      "src": "1237:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_string_memory_ptr_$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (uint256,string memory,string memory,string memory)"
                      }
                    },
                    "id": 147,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1237:63:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 148,
                  "nodeType": "EmitStatement",
                  "src": "1232:68:0"
                }
              ]
            },
            "functionSelector": "860d8eeb",
            "id": 150,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 125,
                    "name": "id",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 118,
                    "src": "1111:2:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 126,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 124,
                  "name": "taskExists",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 227,
                  "src": "1100:10:0"
                },
                "nodeType": "ModifierInvocation",
                "src": "1100:14:0"
              }
            ],
            "name": "modifyTaskDesc",
            "nameLocation": "1022:14:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 123,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 118,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "1042:2:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 150,
                  "src": "1037:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 117,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1037:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 120,
                  "mutability": "mutable",
                  "name": "_newDescription",
                  "nameLocation": "1060:15:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 150,
                  "src": "1046:29:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 119,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1046:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 122,
                  "mutability": "mutable",
                  "name": "_reason",
                  "nameLocation": "1091:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 150,
                  "src": "1077:21:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 121,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1077:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1036:63:0"
            },
            "returnParameters": {
              "id": 127,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1122:0:0"
            },
            "scope": 228,
            "src": "1013:292:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 183,
              "nodeType": "Block",
              "src": "1402:138:0",
              "statements": [
                {
                  "assignments": [
                    163
                  ],
                  "declarations": [
                    {
                      "constant": false,
                      "id": 163,
                      "mutability": "mutable",
                      "name": "_oldDate",
                      "nameLocation": "1413:8:0",
                      "nodeType": "VariableDeclaration",
                      "scope": 183,
                      "src": "1408:13:0",
                      "stateVariable": false,
                      "storageLocation": "default",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      },
                      "typeName": {
                        "id": 162,
                        "name": "uint",
                        "nodeType": "ElementaryTypeName",
                        "src": "1408:4:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "visibility": "internal"
                    }
                  ],
                  "id": 168,
                  "initialValue": {
                    "expression": {
                      "baseExpression": {
                        "id": 164,
                        "name": "tasks",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 17,
                        "src": "1424:5:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_TaskEntry_$12_storage_$",
                          "typeString": "mapping(uint256 => struct TaskJournal.TaskEntry storage ref)"
                        }
                      },
                      "id": 166,
                      "indexExpression": {
                        "id": 165,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 152,
                        "src": "1430:2:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "1424:9:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_struct$_TaskEntry_$12_storage",
                        "typeString": "struct TaskJournal.TaskEntry storage ref"
                      }
                    },
                    "id": 167,
                    "isConstant": false,
                    "isLValue": true,
                    "isPure": false,
                    "lValueRequested": false,
                    "memberName": "dateDue",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": 11,
                    "src": "1424:17:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "nodeType": "VariableDeclarationStatement",
                  "src": "1408:33:0"
                },
                {
                  "expression": {
                    "id": 174,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "expression": {
                        "baseExpression": {
                          "id": 169,
                          "name": "tasks",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17,
                          "src": "1447:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_TaskEntry_$12_storage_$",
                            "typeString": "mapping(uint256 => struct TaskJournal.TaskEntry storage ref)"
                          }
                        },
                        "id": 171,
                        "indexExpression": {
                          "id": 170,
                          "name": "id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 152,
                          "src": "1453:2:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1447:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_TaskEntry_$12_storage",
                          "typeString": "struct TaskJournal.TaskEntry storage ref"
                        }
                      },
                      "id": 172,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "dateDue",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 11,
                      "src": "1447:17:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "id": 173,
                      "name": "_newDate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 154,
                      "src": "1467:8:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "1447:28:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 175,
                  "nodeType": "ExpressionStatement",
                  "src": "1447:28:0"
                },
                {
                  "eventCall": {
                    "arguments": [
                      {
                        "id": 177,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 152,
                        "src": "1503:2:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 178,
                        "name": "_oldDate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 163,
                        "src": "1507:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 179,
                        "name": "_newDate",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 154,
                        "src": "1517:8:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 180,
                        "name": "_reason",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 156,
                        "src": "1527:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 176,
                      "name": "TaskModifiedDate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 55,
                      "src": "1486:16:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_uint256_$_t_uint256_$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (uint256,uint256,uint256,string memory)"
                      }
                    },
                    "id": 181,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1486:49:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 182,
                  "nodeType": "EmitStatement",
                  "src": "1481:54:0"
                }
              ]
            },
            "functionSelector": "31e07198",
            "id": 184,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 159,
                    "name": "id",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 152,
                    "src": "1391:2:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 160,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 158,
                  "name": "taskExists",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 227,
                  "src": "1380:10:0"
                },
                "nodeType": "ModifierInvocation",
                "src": "1380:14:0"
              }
            ],
            "name": "modifyTaskDate",
            "nameLocation": "1318:14:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 157,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 152,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "1338:2:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 184,
                  "src": "1333:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 151,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1333:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 154,
                  "mutability": "mutable",
                  "name": "_newDate",
                  "nameLocation": "1347:8:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 184,
                  "src": "1342:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 153,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1342:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 156,
                  "mutability": "mutable",
                  "name": "_reason",
                  "nameLocation": "1371:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 184,
                  "src": "1357:21:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 155,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1357:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1332:47:0"
            },
            "returnParameters": {
              "id": 161,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1402:0:0"
            },
            "scope": 228,
            "src": "1309:231:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 209,
              "nodeType": "Block",
              "src": "1638:79:0",
              "statements": [
                {
                  "expression": {
                    "arguments": [
                      {
                        "id": 197,
                        "name": "id",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 186,
                        "src": "1661:2:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 205,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "expression": {
                            "baseExpression": {
                              "id": 198,
                              "name": "tasks",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 17,
                              "src": "1665:5:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_TaskEntry_$12_storage_$",
                                "typeString": "mapping(uint256 => struct TaskJournal.TaskEntry storage ref)"
                              }
                            },
                            "id": 200,
                            "indexExpression": {
                              "id": 199,
                              "name": "id",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 186,
                              "src": "1671:2:0",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "1665:9:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_struct$_TaskEntry_$12_storage",
                              "typeString": "struct TaskJournal.TaskEntry storage ref"
                            }
                          },
                          "id": 201,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "dateDue",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": 11,
                          "src": "1665:17:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "+",
                        "rightExpression": {
                          "commonType": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          },
                          "id": 204,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "id": 202,
                            "name": "_numDays",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 188,
                            "src": "1685:8:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "*",
                          "rightExpression": {
                            "hexValue": "31",
                            "id": 203,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "kind": "number",
                            "lValueRequested": false,
                            "nodeType": "Literal",
                            "src": "1696:6:0",
                            "subdenomination": "days",
                            "typeDescriptions": {
                              "typeIdentifier": "t_rational_86400_by_1",
                              "typeString": "int_const 86400"
                            },
                            "value": "1"
                          },
                          "src": "1685:17:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "1665:37:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      {
                        "id": 206,
                        "name": "_reason",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 190,
                        "src": "1704:7:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        {
                          "typeIdentifier": "t_string_memory_ptr",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 196,
                      "name": "modifyTaskDate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 184,
                      "src": "1646:14:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_uint256_$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (uint256,uint256,string memory)"
                      }
                    },
                    "id": 207,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1646:66:0",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 208,
                  "nodeType": "ExpressionStatement",
                  "src": "1646:66:0"
                }
              ]
            },
            "functionSelector": "6bbe8b42",
            "id": 210,
            "implemented": true,
            "kind": "function",
            "modifiers": [
              {
                "arguments": [
                  {
                    "id": 193,
                    "name": "id",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 186,
                    "src": "1627:2:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  }
                ],
                "id": 194,
                "kind": "modifierInvocation",
                "modifierName": {
                  "id": 192,
                  "name": "taskExists",
                  "nodeType": "IdentifierPath",
                  "referencedDeclaration": 227,
                  "src": "1616:10:0"
                },
                "nodeType": "ModifierInvocation",
                "src": "1616:14:0"
              }
            ],
            "name": "delayTaskByDays",
            "nameLocation": "1553:15:0",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 191,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 186,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "1574:2:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 210,
                  "src": "1569:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 185,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1569:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 188,
                  "mutability": "mutable",
                  "name": "_numDays",
                  "nameLocation": "1583:8:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 210,
                  "src": "1578:13:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 187,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1578:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 190,
                  "mutability": "mutable",
                  "name": "_reason",
                  "nameLocation": "1607:7:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 210,
                  "src": "1593:21:0",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 189,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1593:6:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1568:47:0"
            },
            "returnParameters": {
              "id": 195,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1638:0:0"
            },
            "scope": 228,
            "src": "1544:173:0",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 226,
              "nodeType": "Block",
              "src": "1750:62:0",
              "statements": [
                {
                  "condition": {
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 219,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "expression": {
                        "baseExpression": {
                          "id": 214,
                          "name": "tasks",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 17,
                          "src": "1759:5:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_uint256_$_t_struct$_TaskEntry_$12_storage_$",
                            "typeString": "mapping(uint256 => struct TaskJournal.TaskEntry storage ref)"
                          }
                        },
                        "id": 216,
                        "indexExpression": {
                          "id": 215,
                          "name": "id",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 212,
                          "src": "1765:2:0",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1759:9:0",
                        "typeDescriptions": {
                          "typeIdentifier": "t_struct$_TaskEntry_$12_storage",
                          "typeString": "struct TaskJournal.TaskEntry storage ref"
                        }
                      },
                      "id": 217,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "id",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 3,
                      "src": "1759:12:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "==",
                    "rightExpression": {
                      "hexValue": "30",
                      "id": 218,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1775:1:0",
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "src": "1759:17:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 224,
                  "nodeType": "IfStatement",
                  "src": "1756:45:0",
                  "trueBody": {
                    "id": 223,
                    "nodeType": "Block",
                    "src": "1778:23:0",
                    "statements": [
                      {
                        "expression": {
                          "arguments": [],
                          "expression": {
                            "argumentTypes": [],
                            "id": 220,
                            "name": "revert",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [
                              4294967277,
                              4294967277
                            ],
                            "referencedDeclaration": 4294967277,
                            "src": "1786:6:0",
                            "typeDescriptions": {
                              "typeIdentifier": "t_function_revert_pure$__$returns$__$",
                              "typeString": "function () pure"
                            }
                          },
                          "id": 221,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "kind": "functionCall",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1786:8:0",
                          "tryCall": false,
                          "typeDescriptions": {
                            "typeIdentifier": "t_tuple$__$",
                            "typeString": "tuple()"
                          }
                        },
                        "id": 222,
                        "nodeType": "ExpressionStatement",
                        "src": "1786:8:0"
                      }
                    ]
                  }
                },
                {
                  "id": 225,
                  "nodeType": "PlaceholderStatement",
                  "src": "1806:1:0"
                }
              ]
            },
            "id": 227,
            "name": "taskExists",
            "nameLocation": "1730:10:0",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 213,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 212,
                  "mutability": "mutable",
                  "name": "id",
                  "nameLocation": "1746:2:0",
                  "nodeType": "VariableDeclaration",
                  "scope": 227,
                  "src": "1741:7:0",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 211,
                    "name": "uint",
                    "nodeType": "ElementaryTypeName",
                    "src": "1741:4:0",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "visibility": "internal"
                }
              ],
              "src": "1740:9:0"
            },
            "src": "1721:91:0",
            "virtual": false,
            "visibility": "internal"
          }
        ],
        "scope": 229,
        "src": "58:1756:0",
        "usedErrors": []
      }
    ],
    "src": "32:1783:0"
  },
  "compiler": {
    "name": "solc",
    "version": "0.8.11+commit.d7f03943.Emscripten.clang"
  },
  "networks": {
    "5777": {
      "events": {},
      "links": {},
      "address": "0xf5F701Ce6393101D3Cc028283e211560652939F3",
      "transactionHash": "0xde5be0a1758761c1ee9405e36abf347d0c8c73fe7b7c97e91b4545ab1668829c"
    }
  },
  "schemaVersion": "3.4.4",
  "updatedAt": "2022-02-12T23:44:03.865Z",
  "networkType": "ethereum",
  "devdoc": {
    "kind": "dev",
    "methods": {},
    "version": 1
  },
  "userdoc": {
    "kind": "user",
    "methods": {},
    "version": 1
  }
};

export default artifact; 
