/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Signer,
  utils,
  Contract,
  ContractFactory,
  BigNumberish,
  Overrides,
} from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  WormholeSimulator,
  WormholeSimulatorInterface,
} from "../WormholeSimulator";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "wormhole_",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "devnetGuardian",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "version",
            type: "uint8",
          },
          {
            internalType: "uint32",
            name: "timestamp",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "nonce",
            type: "uint32",
          },
          {
            internalType: "uint16",
            name: "emitterChainId",
            type: "uint16",
          },
          {
            internalType: "bytes32",
            name: "emitterAddress",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "sequence",
            type: "uint64",
          },
          {
            internalType: "uint8",
            name: "consistencyLevel",
            type: "uint8",
          },
          {
            internalType: "bytes",
            name: "payload",
            type: "bytes",
          },
          {
            internalType: "uint32",
            name: "guardianSetIndex",
            type: "uint32",
          },
          {
            components: [
              {
                internalType: "bytes32",
                name: "r",
                type: "bytes32",
              },
              {
                internalType: "bytes32",
                name: "s",
                type: "bytes32",
              },
              {
                internalType: "uint8",
                name: "v",
                type: "uint8",
              },
              {
                internalType: "uint8",
                name: "guardianIndex",
                type: "uint8",
              },
            ],
            internalType: "struct IWormhole.Signature[]",
            name: "signatures",
            type: "tuple[]",
          },
          {
            internalType: "bytes32",
            name: "hash",
            type: "bytes32",
          },
        ],
        internalType: "struct IWormhole.VM",
        name: "vm_",
        type: "tuple",
      },
    ],
    name: "encodeAndSignMessage",
    outputs: [
      {
        internalType: "bytes",
        name: "signedMessage",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "uint8",
            name: "version",
            type: "uint8",
          },
          {
            internalType: "uint32",
            name: "timestamp",
            type: "uint32",
          },
          {
            internalType: "uint32",
            name: "nonce",
            type: "uint32",
          },
          {
            internalType: "uint16",
            name: "emitterChainId",
            type: "uint16",
          },
          {
            internalType: "bytes32",
            name: "emitterAddress",
            type: "bytes32",
          },
          {
            internalType: "uint64",
            name: "sequence",
            type: "uint64",
          },
          {
            internalType: "uint8",
            name: "consistencyLevel",
            type: "uint8",
          },
          {
            internalType: "bytes",
            name: "payload",
            type: "bytes",
          },
          {
            internalType: "uint32",
            name: "guardianSetIndex",
            type: "uint32",
          },
          {
            components: [
              {
                internalType: "bytes32",
                name: "r",
                type: "bytes32",
              },
              {
                internalType: "bytes32",
                name: "s",
                type: "bytes32",
              },
              {
                internalType: "uint8",
                name: "v",
                type: "uint8",
              },
              {
                internalType: "uint8",
                name: "guardianIndex",
                type: "uint8",
              },
            ],
            internalType: "struct IWormhole.Signature[]",
            name: "signatures",
            type: "tuple[]",
          },
          {
            internalType: "bytes32",
            name: "hash",
            type: "bytes32",
          },
        ],
        internalType: "struct IWormhole.VM",
        name: "vm_",
        type: "tuple",
      },
    ],
    name: "encodeObservation",
    outputs: [
      {
        internalType: "bytes",
        name: "encodedObservation",
        type: "bytes",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32[]",
            name: "topics",
            type: "bytes32[]",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
          {
            internalType: "address",
            name: "emitter",
            type: "address",
          },
        ],
        internalType: "struct VmSafe.Log[]",
        name: "logs",
        type: "tuple[]",
      },
      {
        internalType: "uint32",
        name: "nonce",
        type: "uint32",
      },
      {
        internalType: "uint16",
        name: "emitterChainId",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "emitterAddress",
        type: "address",
      },
    ],
    name: "fetchSignedBatchVAAFromLogs",
    outputs: [
      {
        internalType: "bytes",
        name: "signedMessage",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32[]",
            name: "topics",
            type: "bytes32[]",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
          {
            internalType: "address",
            name: "emitter",
            type: "address",
          },
        ],
        internalType: "struct VmSafe.Log",
        name: "log",
        type: "tuple",
      },
      {
        internalType: "uint16",
        name: "emitterChainId",
        type: "uint16",
      },
      {
        internalType: "address",
        name: "emitterAddress",
        type: "address",
      },
    ],
    name: "fetchSignedMessageFromLogs",
    outputs: [
      {
        internalType: "bytes",
        name: "signedMessage",
        type: "bytes",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        components: [
          {
            internalType: "bytes32[]",
            name: "topics",
            type: "bytes32[]",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
          {
            internalType: "address",
            name: "emitter",
            type: "address",
          },
        ],
        internalType: "struct VmSafe.Log[]",
        name: "logs",
        type: "tuple[]",
      },
      {
        internalType: "uint8",
        name: "numMessages",
        type: "uint8",
      },
    ],
    name: "fetchWormholeMessageFromLog",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32[]",
            name: "topics",
            type: "bytes32[]",
          },
          {
            internalType: "bytes",
            name: "data",
            type: "bytes",
          },
          {
            internalType: "address",
            name: "emitter",
            type: "address",
          },
        ],
        internalType: "struct VmSafe.Log[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "newFee",
        type: "uint256",
      },
    ],
    name: "setMessageFee",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "vm",
    outputs: [
      {
        internalType: "contract Vm",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "wormhole",
    outputs: [
      {
        internalType: "contract IWormhole",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
] as const;

const _bytecode =
  "0x60806040523480156200001157600080fd5b50604051620028fd380380620028fd83398101604081905262000034916200065b565b600080546001600160a01b0319166001600160a01b03841617905560018190556040516001625e79b760e01b0319815260048101829052620000d490600080516020620028dd8339815191529063ffa1864990602401602060405180830381865afa158015620000a8573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620000ce91906200068a565b620000dc565b5050620008ab565b604051630667f9d760e41b815230600482015260026024820152600090600080516020620028dd8339815191529063667f9d7090604401602060405180830381865afa15801562000131573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620001579190620006af565b905080156200019e5760405162461bcd60e51b815260206004820152600e60248201526d1a5b98dbdc9c9958dd081cdb1bdd60921b60448201526064015b60405180910390fd5b60008060009054906101000a90046001600160a01b03166001600160a01b0316631cfe79516040518163ffffffff1660e01b8152600401602060405180830381865afa158015620001f3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002199190620006de565b6040805163ffffffff8316602082015260029181019190915290915060009060600160408051808303601f1901815290829052805160209091012060008054630667f9d760e41b84526001600160a01b031660048401526024830182905290925090600080516020620028dd8339815191529063667f9d7090604401602060405180830381865afa158015620002b3573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190620002d99190620006af565b905060015b81811015620003ad576000546040805160208082018790528251808303820181529183019092528051910120600080516020620028dd833981519152916370ca10bb916001600160a01b03909116906200033a908590620006fc565b60405160e084901b6001600160e01b03191681526001600160a01b039092166004830152602482015260006044820152606401600060405180830381600087803b1580156200038857600080fd5b505af11580156200039d573d6000803e3d6000fd5b50505050600181019050620002de565b50600080546040805160208082018790528251808303820181529183019092528051910120600080516020620028dd833981519152926370ca10bb926001600160a01b031691620003fe91620006fc565b60405160e084901b6001600160e01b03191681526001600160a01b03928316600482015260248101919091529088166044820152606401600060405180830381600087803b1580156200045057600080fd5b505af115801562000465573d6000803e3d6000fd5b50506000546040516370ca10bb60e01b81526001600160a01b0390911660048201526024810185905260016044820152600080516020620028dd83398151915292506370ca10bb9150606401600060405180830381600087803b158015620004cc57600080fd5b505af1158015620004e1573d6000803e3d6000fd5b505060008054604051637ca8cbad60e11b815263ffffffff881660048201529193506001600160a01b0316915063f951975a90602401600060405180830381865afa15801562000535573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526200055f919081019062000798565b518051909150600114620005b65760405162461bcd60e51b815260206004820152601560248201527f677561726469616e732e6c656e67746820213d20310000000000000000000000604482015260640162000195565b856001600160a01b031681600081518110620005d657620005d662000895565b60200260200101516001600160a01b031614620006365760405162461bcd60e51b815260206004820152601f60248201527f696e636f727265637420677561726469616e20736574206f7665727269646500604482015260640162000195565b505050505050565b80516001600160a01b03811681146200065657600080fd5b919050565b600080604083850312156200066f57600080fd5b6200067a836200063e565b9150602083015190509250929050565b6000602082840312156200069d57600080fd5b620006a8826200063e565b9392505050565b600060208284031215620006c257600080fd5b5051919050565b805163ffffffff811681146200065657600080fd5b600060208284031215620006f157600080fd5b620006a882620006c9565b808201808211156200071e57634e487b7160e01b600052601160045260246000fd5b92915050565b634e487b7160e01b600052604160045260246000fd5b604080519081016001600160401b03811182821017156200075f576200075f62000724565b60405290565b604051601f8201601f191681016001600160401b038111828210171562000790576200079062000724565b604052919050565b60006020808385031215620007ac57600080fd5b82516001600160401b0380821115620007c457600080fd5b9084019060408287031215620007d957600080fd5b620007e36200073a565b825182811115620007f357600080fd5b8301601f810188136200080557600080fd5b8051838111156200081a576200081a62000724565b8060051b93506200082d86850162000765565b818152938201860193868101908a8611156200084857600080fd5b928701925b85841015620008715762000861846200063e565b825292870192908701906200084d565b84525062000884915050838501620006c9565b848201528094505050505092915050565b634e487b7160e01b600052603260045260246000fd5b61202280620008bb6000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c806364bb9bfb1161005b57806364bb9bfb1461011157806384acd1bb146101245780639ee7de7f14610137578063ce8cef6e1461015757600080fd5b80630e6452951461008d57806323aa2a9d146100b657806323ad78c8146100cb5780633a768463146100de575b600080fd5b6100a061009b36600461176f565b61016a565b6040516100ad91906118e3565b60405180910390f35b6100c96100c43660046118fd565b610426565b005b6100a06100d9366004611a81565b610700565b6100f9737109709ecfa91a80626ff3989d68f67f5b1dd12d81565b6040516001600160a01b0390911681526020016100ad565b6100a061011f36600461176f565b610d92565b6000546100f9906001600160a01b031681565b61014a610145366004611af3565b610de3565b6040516100ad9190611b44565b6100a0610165366004611c07565b610f23565b6060600061017783610d92565b905061018281610fcc565b610140840152604080516001808252818301909252600091816020015b60408051608081018252600080825260208083018290529282018190526060820152825260001990920191018161019f579050506001546101408601516040516338d07aa960e21b815260048101929092526024820152909150737109709ecfa91a80626ff3989d68f67f5b1dd12d9063e341eaa490604401606060405180830381865afa158015610235573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906102599190611c66565b8360008151811061026c5761026c611c9d565b60200260200101516040018460008151811061028a5761028a611c9d565b6020026020010151600001856000815181106102a8576102a8611c9d565b602002602001015160200183815250838152508360ff1660ff168152505050506000816000815181106102dd576102dd611c9d565b60200260200101516060019060ff16908160ff1681525050836000015160008054906101000a90046001600160a01b03166001600160a01b0316631cfe79516040518163ffffffff1660e01b8152600401602060405180830381865afa15801561034b573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061036f9190611cb3565b82518360008261038157610381611c9d565b602002602001015160600151846000815181106103a0576103a0611c9d565b602002602001015160000151856000815181106103bf576103bf611c9d565b602002602001015160200151601b876000815181106103e0576103e0611c9d565b6020026020010151604001516103f69190611ce6565b8860405160200161040e989796959493929190611d1b565b60405160208183030381529060405292505050919050565b600063436f726560001b9050600081600360008054906101000a90046001600160a01b03166001600160a01b0316639a8a05926040518163ffffffff1660e01b8152600401602060405180830381865afa158015610488573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906104ac9190611d91565b856040516020016104f0949392919093845260f89290921b6001600160f81b031916602084015260f01b6001600160f01b0319166021830152602382015260430190565b60408051601f19818403018152610160830182526001835263ffffffff421660208481019190915260008484018190528054845163fbe3c2cd60e01b8152945193965090949360608501936001600160a01b039092169263fbe3c2cd926004808401938290030181865afa15801561056c573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906105909190611d91565b61ffff16815260200160008054906101000a90046001600160a01b03166001600160a01b031663b172b2226040518163ffffffff1660e01b8152600401602060405180830381865afa1580156105ea573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061060e9190611dae565b81526000602080830182905260c860408085019190915260608401879052608084018390528051838152918201905260a0909201919061067d565b6040805160808101825260008082526020808301829052928201819052606082015282526000199092019101816106495790505b508152600060209091018190529091506106968261016a565b60005460405163f42bc64160e01b81529192506001600160a01b03169063f42bc641906106c79084906004016118e3565b600060405180830381600087803b1580156106e157600080fd5b505af11580156106f5573d6000803e3d6000fd5b505050505050505050565b606060008086516001600160401b0381111561071e5761071e611507565b60405190808252806020026020018201604052801561075757816020015b6107446114ac565b81526020019060019003908161073c5790505b50905060005b87518110156108825761078888828151811061077b5761077b611c9d565b6020026020010151611005565b82828151811061079a5761079a611c9d565b6020026020010181905250428282815181106107b8576107b8611c9d565b60200260200101516020019063ffffffff16908163ffffffff1681525050858282815181106107e9576107e9611c9d565b60200260200101516060019061ffff16908161ffff1681525050846001600160a01b031660001b82828151811061082257610822611c9d565b602002602001015160800181815250508663ffffffff1682828151811061084b5761084b611c9d565b60200260200101516040015163ffffffff16036108705761086d600184611dc7565b92505b8061087a81611de0565b91505061075d565b50606060008360ff166001600160401b038111156108a2576108a2611507565b6040519080825280602002602001820160405280156108cb578160200160208202803683370190505b5090506000805b8a51811015610a7b578963ffffffff168582815181106108f4576108f4611c9d565b60200260200101516040015163ffffffff1603610a6957600085828151811061091f5761091f611c9d565b60200260200101516020015186838151811061093d5761093d611c9d565b60200260200101516040015187848151811061095b5761095b611c9d565b60200260200101516060015188858151811061097957610979611c9d565b60200260200101516080015189868151811061099757610997611c9d565b602002602001015160a001518a87815181106109b5576109b5611c9d565b602002602001015160c001518b88815181106109d3576109d3611c9d565b602002602001015160e001516040516020016109f59796959493929190611df9565b6040516020818303038152906040529050610a0f81610fcc565b848460ff1681518110610a2457610a24611c9d565b6020026020010181815250508483825183604051602001610a489493929190611e80565b60405160208183030381529060405294508280610a6490611edc565b935050505b80610a7381611de0565b9150506108d2565b506000610ae7600284604051602001610a949190611f2e565b60405160208183030381529060405280519060200120604051602001610ad392919060f89290921b6001600160f81b0319168252600182015260210190565b604051602081830303815290604052610fcc565b60408051600180825281830190925291925060009190816020015b604080516080810182526000808252602080830182905292820181905260608201528252600019909201910181610b025750506001546040516338d07aa960e21b8152600481019190915260248101849052909150737109709ecfa91a80626ff3989d68f67f5b1dd12d9063e341eaa490604401606060405180830381865afa158015610b93573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610bb79190611c66565b83600081518110610bca57610bca611c9d565b602002602001015160400184600081518110610be857610be8611c9d565b602002602001015160000185600081518110610c0657610c06611c9d565b602002602001015160200183815250838152508360ff1660ff16815250505050600081600081518110610c3b57610c3b611c9d565b60200260200101516060019060ff16908160ff1681525050600260008054906101000a90046001600160a01b03166001600160a01b0316631cfe79516040518163ffffffff1660e01b8152600401602060405180830381865afa158015610ca6573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610cca9190611cb3565b600183600081518110610cdf57610cdf611c9d565b60200260200101516060015184600081518110610cfe57610cfe611c9d565b60200260200101516000015185600081518110610d1d57610d1d611c9d565b602002602001015160200151601b87600081518110610d3e57610d3e611c9d565b602002602001015160400151610d549190611ce6565b8d8b8f8e604051602001610d729b9a99989796959493929190611f3a565b604051602081830303815290604052975050505050505050949350505050565b606081602001518260400151836060015184608001518560a001518660c001518760e00151604051602001610dcd9796959493929190611df9565b6040516020818303038152906040529050919050565b606060008260ff166001600160401b03811115610e0257610e02611507565b604051908082528060200260200182016040528015610e4f57816020015b60408051606080820183528082526020820152600091810191909152815260200190600190039081610e205790505b5090506000805b8551811015610f17577f6eb224fb001ed210e379b335e35efe88672a8ce935d981a6896b27ffdf52a3b2868281518110610e9257610e92611c9d565b602002602001015160000151600081518110610eb057610eb0611c9d565b602002602001015103610f0557858181518110610ecf57610ecf611c9d565b6020026020010151838360ff1681518110610eec57610eec611c9d565b6020908102919091010152610f02600183611dc7565b91505b80610f0f81611de0565b915050610e56565b50909150505b92915050565b6060610f2d6114ac565b610f596040518060400160405280600b81526020016a61626f766520706172736560a81b8152506111c4565b610f6285611005565b9050610f916040518060400160405280600c81526020016b18995b1bddc81c185c9cd95960a21b8152506111c4565b6001815263ffffffff4216602082015261ffff841660608201526001600160a01b0383166080820152610fc38161016a565b95945050505050565b60008180519060200120604051602001610fe891815260200190565b604051602081830303815290604052805190602001209050919050565b61100d6114ac565b6000826000015160018151811061102657611026611c9d565b602002602001015182608001818152505061105e60088260206110499190611fc6565b6110539190611fd9565b60208501519061120a565b6001600160401b031660a0830152611077602082611fc6565b905061109e6004611089836020611fc6565b6110939190611fd9565b602085015190611267565b63ffffffff1660408301526110b4602082611fc6565b90506110c1602082611fc6565b90506110e860016110d3836020611fc6565b6110dd9190611fd9565b6020850151906112c4565b60ff1660c08301526110fb602082611fc6565b9050600061111682856020015161132090919063ffffffff16565b9050611123602083611fc6565b602085015190925061113690838361137e565b60e08401526111458183611fc6565b9150818460200151516111589190611fd9565b6111629083611fc6565b915083602001515182146111bd5760405162461bcd60e51b815260206004820181905260248201527f6661696c656420746f20706172736520776f726d686f6c65206d65737361676560448201526064015b60405180910390fd5b5050919050565b611207816040516024016111d891906118e3565b60408051601f198184030181529190526020810180516001600160e01b031663104c13eb60e21b17905261148b565b50565b6000611217826008611fc6565b8351101561125e5760405162461bcd60e51b8152602060048201526014602482015273746f55696e7436345f6f75744f66426f756e647360601b60448201526064016111b4565b50016008015190565b6000611274826004611fc6565b835110156112bb5760405162461bcd60e51b8152602060048201526014602482015273746f55696e7433325f6f75744f66426f756e647360601b60448201526064016111b4565b50016004015190565b60006112d1826001611fc6565b835110156113175760405162461bcd60e51b8152602060048201526013602482015272746f55696e74385f6f75744f66426f756e647360681b60448201526064016111b4565b50016001015190565b600061132d826020611fc6565b835110156113755760405162461bcd60e51b8152602060048201526015602482015274746f55696e743235365f6f75744f66426f756e647360581b60448201526064016111b4565b50016020015190565b60608161138c81601f611fc6565b10156113cb5760405162461bcd60e51b815260206004820152600e60248201526d736c6963655f6f766572666c6f7760901b60448201526064016111b4565b6113d58284611fc6565b845110156114195760405162461bcd60e51b8152602060048201526011602482015270736c6963655f6f75744f66426f756e647360781b60448201526064016111b4565b6060821580156114385760405191506000825260208201604052611482565b6040519150601f8416801560200281840101858101878315602002848b0101015b81831015611471578051835260209283019201611459565b5050858452601f01601f1916604052505b50949350505050565b80516a636f6e736f6c652e6c6f67602083016000808483855afa5050505050565b604080516101608101825260008082526020820181905291810182905260608082018390526080820183905260a0820183905260c0820183905260e08201819052610100820183905261012082015261014081019190915290565b634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b038111828210171561153f5761153f611507565b60405290565b60405161016081016001600160401b038111828210171561153f5761153f611507565b604051606081016001600160401b038111828210171561153f5761153f611507565b604051601f8201601f191681016001600160401b03811182821017156115b2576115b2611507565b604052919050565b60ff8116811461120757600080fd5b80356115d4816115ba565b919050565b63ffffffff8116811461120757600080fd5b80356115d4816115d9565b61ffff8116811461120757600080fd5b80356115d4816115f6565b80356001600160401b03811681146115d457600080fd5b600082601f83011261163957600080fd5b81356001600160401b0381111561165257611652611507565b611665601f8201601f191660200161158a565b81815284602083860101111561167a57600080fd5b816020850160208301376000918101602001919091529392505050565b60006001600160401b038211156116b0576116b0611507565b5060051b60200190565b600082601f8301126116cb57600080fd5b813560206116e06116db83611697565b61158a565b82815260079290921b840181019181810190868411156116ff57600080fd5b8286015b84811015611764576080818903121561171c5760008081fd5b61172461151d565b81358152848201358582015260408083013561173f816115ba565b90820152606082810135611752816115ba565b90820152835291830191608001611703565b509695505050505050565b60006020828403121561178157600080fd5b81356001600160401b038082111561179857600080fd5b9083019061016082860312156117ad57600080fd5b6117b5611545565b6117be836115c9565b81526117cc602084016115eb565b60208201526117dd604084016115eb565b60408201526117ee60608401611606565b60608201526080830135608082015261180960a08401611611565b60a082015261181a60c084016115c9565b60c082015260e08301358281111561183157600080fd5b61183d87828601611628565b60e0830152506101006118518185016115eb565b90820152610120838101358381111561186957600080fd5b611875888287016116ba565b91830191909152506101409283013592810192909252509392505050565b60005b838110156118ae578181015183820152602001611896565b50506000910152565b600081518084526118cf816020860160208601611893565b601f01601f19169290920160200192915050565b6020815260006118f660208301846118b7565b9392505050565b60006020828403121561190f57600080fd5b5035919050565b80356001600160a01b03811681146115d457600080fd5b60006060828403121561193f57600080fd5b611947611568565b905081356001600160401b038082111561196057600080fd5b818401915084601f83011261197457600080fd5b813560206119846116db83611697565b82815260059290921b840181019181810190888411156119a357600080fd5b948201945b838610156119c1578535825294820194908201906119a8565b865250858101359350828411156119d757600080fd5b6119e387858801611628565b81860152505050506119f760408301611916565b604082015292915050565b600082601f830112611a1357600080fd5b81356020611a236116db83611697565b82815260059290921b84018101918181019086841115611a4257600080fd5b8286015b848110156117645780356001600160401b03811115611a655760008081fd5b611a738986838b010161192d565b845250918301918301611a46565b60008060008060808587031215611a9757600080fd5b84356001600160401b03811115611aad57600080fd5b611ab987828801611a02565b9450506020850135611aca816115d9565b92506040850135611ada816115f6565b9150611ae860608601611916565b905092959194509250565b60008060408385031215611b0657600080fd5b82356001600160401b03811115611b1c57600080fd5b611b2885828601611a02565b9250506020830135611b39816115ba565b809150509250929050565b60006020808301818452808551808352604092508286019150828160051b8701018488016000805b84811015611bf857898403603f19018652825180516060808752815190870181905260808701918b019085905b80821015611bb95782518452928c0192918c019160019190910190611b99565b505050898201518682038b880152611bd182826118b7565b928a01516001600160a01b0316968a01969096525095880195935091870191600101611b6c565b50919998505050505050505050565b600080600060608486031215611c1c57600080fd5b83356001600160401b03811115611c3257600080fd5b611c3e8682870161192d565b9350506020840135611c4f816115f6565b9150611c5d60408501611916565b90509250925092565b600080600060608486031215611c7b57600080fd5b8351611c86816115ba565b602085015160409095015190969495509392505050565b634e487b7160e01b600052603260045260246000fd5b600060208284031215611cc557600080fd5b81516118f6816115d9565b634e487b7160e01b600052601160045260246000fd5b60ff8281168282160390811115610f1d57610f1d611cd0565b60008151611d11818560208601611893565b9290920192915050565b600060ff60f81b808b60f81b16835263ffffffff60e01b8a60e01b166001840152808960f81b166005840152808860f81b166006840152866007840152856027840152808560f81b166047840152508251611d7d816048850160208701611893565b919091016048019998505050505050505050565b600060208284031215611da357600080fd5b81516118f6816115f6565b600060208284031215611dc057600080fd5b5051919050565b60ff8181168382160190811115610f1d57610f1d611cd0565b600060018201611df257611df2611cd0565b5060010190565b6001600160e01b031960e089811b8216835288901b1660048201526001600160f01b031960f087901b166008820152600a81018590526001600160c01b031960c085901b16602a8201526001600160f81b031960f884901b1660328201528151600090611e6d816033850160208701611893565b9190910160330198975050505050505050565b60008551611e92818460208a01611893565b60f886901b6001600160f81b03191690830190815260e085901b6001600160e01b03191660018201528351611ece816005840160208801611893565b016005019695505050505050565b600060ff821660ff8103611ef257611ef2611cd0565b60010192915050565b60008151602080840160005b83811015611f2357815187529582019590820190600101611f07565b509495945050505050565b60006118f68284611efb565b600060ff60f81b60f8818f821b16845263ffffffff60e01b8e60e01b166001850152818d821b166005850152818c821b1660068501528a60078501528960278501528189821b1660478501528188821b166048850152611f9d6049850188611efb565b8287831b168152611fb16001820187611cff565b93505050509c9b505050505050505050505050565b80820180821115610f1d57610f1d611cd0565b81810381811115610f1d57610f1d611cd056fea2646970667358221220a4200987d1cb8d5800be3ca12050ce2a9c771de0908b98bc957426fd650889f664736f6c634300081300330000000000000000000000007109709ecfa91a80626ff3989d68f67f5b1dd12d";

type WormholeSimulatorConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: WormholeSimulatorConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class WormholeSimulator__factory extends ContractFactory {
  constructor(...args: WormholeSimulatorConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    wormhole_: string,
    devnetGuardian: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): Promise<WormholeSimulator> {
    return super.deploy(
      wormhole_,
      devnetGuardian,
      overrides || {}
    ) as Promise<WormholeSimulator>;
  }
  override getDeployTransaction(
    wormhole_: string,
    devnetGuardian: BigNumberish,
    overrides?: Overrides & { from?: string }
  ): TransactionRequest {
    return super.getDeployTransaction(
      wormhole_,
      devnetGuardian,
      overrides || {}
    );
  }
  override attach(address: string): WormholeSimulator {
    return super.attach(address) as WormholeSimulator;
  }
  override connect(signer: Signer): WormholeSimulator__factory {
    return super.connect(signer) as WormholeSimulator__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): WormholeSimulatorInterface {
    return new utils.Interface(_abi) as WormholeSimulatorInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): WormholeSimulator {
    return new Contract(address, _abi, signerOrProvider) as WormholeSimulator;
  }
}