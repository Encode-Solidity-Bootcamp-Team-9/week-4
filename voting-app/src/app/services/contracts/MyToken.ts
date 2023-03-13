export const mytoken = {
  _format: 'hh-sol-artifact-1',
  contractName: 'MyToken',
  sourceName: 'contracts/ERC20Votes.sol',
  abi: [
    {
      inputs: [],
      stateMutability: 'nonpayable',
      type: 'constructor',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Approval',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'delegator',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'fromDelegate',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'toDelegate',
          type: 'address',
        },
      ],
      name: 'DelegateChanged',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'delegate',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'previousBalance',
          type: 'uint256',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'newBalance',
          type: 'uint256',
        },
      ],
      name: 'DelegateVotesChanged',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'previousAdminRole',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'newAdminRole',
          type: 'bytes32',
        },
      ],
      name: 'RoleAdminChanged',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
      ],
      name: 'RoleGranted',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'sender',
          type: 'address',
        },
      ],
      name: 'RoleRevoked',
      type: 'event',
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: true,
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          indexed: true,
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          indexed: false,
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
      ],
      name: 'Transfer',
      type: 'event',
    },
    {
      inputs: [],
      name: 'DEFAULT_ADMIN_ROLE',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'DOMAIN_SEPARATOR',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'MAX_MINT_AMOUNT',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'MINTER_ROLE',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
      ],
      name: 'allowance',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'approve',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'balanceOf',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          internalType: 'uint32',
          name: 'pos',
          type: 'uint32',
        },
      ],
      name: 'checkpoints',
      outputs: [
        {
          components: [
            {
              internalType: 'uint32',
              name: 'fromBlock',
              type: 'uint32',
            },
            {
              internalType: 'uint224',
              name: 'votes',
              type: 'uint224',
            },
          ],
          internalType: 'struct ERC20Votes.Checkpoint',
          name: '',
          type: 'tuple',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'decimals',
      outputs: [
        {
          internalType: 'uint8',
          name: '',
          type: 'uint8',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'subtractedValue',
          type: 'uint256',
        },
      ],
      name: 'decreaseAllowance',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'delegatee',
          type: 'address',
        },
      ],
      name: 'delegate',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'delegatee',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'nonce',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'expiry',
          type: 'uint256',
        },
        {
          internalType: 'uint8',
          name: 'v',
          type: 'uint8',
        },
        {
          internalType: 'bytes32',
          name: 'r',
          type: 'bytes32',
        },
        {
          internalType: 'bytes32',
          name: 's',
          type: 'bytes32',
        },
      ],
      name: 'delegateBySig',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'delegates',
      outputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'uint256',
          name: 'blockNumber',
          type: 'uint256',
        },
      ],
      name: 'getPastTotalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'blockNumber',
          type: 'uint256',
        },
      ],
      name: 'getPastVotes',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
      ],
      name: 'getRoleAdmin',
      outputs: [
        {
          internalType: 'bytes32',
          name: '',
          type: 'bytes32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'getVotes',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'grantRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'hasRole',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'addedValue',
          type: 'uint256',
        },
      ],
      name: 'increaseAllowance',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'mint',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: '',
          type: 'address',
        },
      ],
      name: 'minters',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'name',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
      ],
      name: 'nonces',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'numCheckpoints',
      outputs: [
        {
          internalType: 'uint32',
          name: '',
          type: 'uint32',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'owner',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'spender',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'value',
          type: 'uint256',
        },
        {
          internalType: 'uint256',
          name: 'deadline',
          type: 'uint256',
        },
        {
          internalType: 'uint8',
          name: 'v',
          type: 'uint8',
        },
        {
          internalType: 'bytes32',
          name: 'r',
          type: 'bytes32',
        },
        {
          internalType: 'bytes32',
          name: 's',
          type: 'bytes32',
        },
      ],
      name: 'permit',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'renounceRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes32',
          name: 'role',
          type: 'bytes32',
        },
        {
          internalType: 'address',
          name: 'account',
          type: 'address',
        },
      ],
      name: 'revokeRole',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'bytes4',
          name: 'interfaceId',
          type: 'bytes4',
        },
      ],
      name: 'supportsInterface',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'symbol',
      outputs: [
        {
          internalType: 'string',
          name: '',
          type: 'string',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [],
      name: 'totalSupply',
      outputs: [
        {
          internalType: 'uint256',
          name: '',
          type: 'uint256',
        },
      ],
      stateMutability: 'view',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transfer',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
    {
      inputs: [
        {
          internalType: 'address',
          name: 'from',
          type: 'address',
        },
        {
          internalType: 'address',
          name: 'to',
          type: 'address',
        },
        {
          internalType: 'uint256',
          name: 'amount',
          type: 'uint256',
        },
      ],
      name: 'transferFrom',
      outputs: [
        {
          internalType: 'bool',
          name: '',
          type: 'bool',
        },
      ],
      stateMutability: 'nonpayable',
      type: 'function',
    },
  ],
  bytecode:
    '0x6101406040523480156200001257600080fd5b506040518060400160405280600781526020017f4d79546f6b656e00000000000000000000000000000000000000000000000000815250806040518060400160405280600181526020017f31000000000000000000000000000000000000000000000000000000000000008152506040518060400160405280600781526020017f4d79546f6b656e000000000000000000000000000000000000000000000000008152506040518060400160405280600381526020017f4d544b00000000000000000000000000000000000000000000000000000000008152508160039081620000fd91906200062d565b5080600490816200010f91906200062d565b50505060008280519060200120905060008280519060200120905060007f8b73c3c69bb8fe3d512ecc4cf759cc79239f7b179b0ffacaa9a75d522b39400f90508260e081815250508161010081815250504660a081815250506200017b8184846200021260201b60201c565b608081815250503073ffffffffffffffffffffffffffffffffffffffff1660c08173ffffffffffffffffffffffffffffffffffffffff1681525050806101208181525050505050505050620001da6000801b336200024e60201b60201c565b6200020c7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6336200024e60201b60201c565b620007e2565b600083838346306040516020016200022f95949392919062000785565b6040516020818303038152906040528051906020012090509392505050565b6200026082826200034060201b60201c565b6200033c5760016005600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550620002e1620003ab60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b60006005600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b600033905090565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200043557607f821691505b6020821081036200044b576200044a620003ed565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620004b57fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000476565b620004c1868362000476565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b60006200050e620005086200050284620004d9565b620004e3565b620004d9565b9050919050565b6000819050919050565b6200052a83620004ed565b62000542620005398262000515565b84845462000483565b825550505050565b600090565b620005596200054a565b620005668184846200051f565b505050565b5b818110156200058e57620005826000826200054f565b6001810190506200056c565b5050565b601f821115620005dd57620005a78162000451565b620005b28462000466565b81016020851015620005c2578190505b620005da620005d18562000466565b8301826200056b565b50505b505050565b600082821c905092915050565b60006200060260001984600802620005e2565b1980831691505092915050565b60006200061d8383620005ef565b9150826002028217905092915050565b6200063882620003b3565b67ffffffffffffffff811115620006545762000653620003be565b5b6200066082546200041c565b6200066d82828562000592565b600060209050601f831160018114620006a5576000841562000690578287015190505b6200069c85826200060f565b8655506200070c565b601f198416620006b58662000451565b60005b82811015620006df57848901518255600182019150602085019450602081019050620006b8565b86831015620006ff5784890151620006fb601f891682620005ef565b8355505b6001600288020188555050505b505050505050565b6000819050919050565b620007298162000714565b82525050565b6200073a81620004d9565b82525050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200076d8262000740565b9050919050565b6200077f8162000760565b82525050565b600060a0820190506200079c60008301886200071e565b620007ab60208301876200071e565b620007ba60408301866200071e565b620007c960608301856200072f565b620007d8608083018462000774565b9695505050505050565b60805160a05160c05160e0516101005161012051614996620008326000396000611b2101526000611b6301526000611b4201526000611a7701526000611acd01526000611af601526149966000f3fe608060405234801561001057600080fd5b50600436106101fb5760003560e01c806370a082311161011a578063a9059cbb116100ad578063d547741f1161007c578063d547741f1461064a578063dd62ed3e14610666578063f1127ed814610696578063f46eccc4146106c6578063fa9b7018146106f6576101fb565b8063a9059cbb146105c4578063c3cda520146105f4578063d505accf14610610578063d53913931461062c576101fb565b806395d89b41116100e957806395d89b41146105285780639ab24eb014610546578063a217fddf14610576578063a457c2d714610594576101fb565b806370a08231146104685780637ecebe00146104985780638e539e8c146104c857806391d14854146104f8576101fb565b80633644e5151161019257806340c10f191161016157806340c10f19146103d0578063587cde1e146103ec5780635c19a95c1461041c5780636fcfff4514610438576101fb565b80633644e5151461033657806336568abe1461035457806339509351146103705780633a46b1a8146103a0576101fb565b806323b872dd116101ce57806323b872dd1461029c578063248a9ca3146102cc5780632f2ff15d146102fc578063313ce56714610318576101fb565b806301ffc9a71461020057806306fdde0314610230578063095ea7b31461024e57806318160ddd1461027e575b600080fd5b61021a6004803603810190610215919061323a565b610714565b6040516102279190613282565b60405180910390f35b61023861078e565b604051610245919061332d565b60405180910390f35b610268600480360381019061026391906133e3565b610820565b6040516102759190613282565b60405180910390f35b610286610843565b6040516102939190613432565b60405180910390f35b6102b660048036038101906102b1919061344d565b61084d565b6040516102c39190613282565b60405180910390f35b6102e660048036038101906102e191906134d6565b61087c565b6040516102f39190613512565b60405180910390f35b6103166004803603810190610311919061352d565b61089c565b005b6103206108bd565b60405161032d9190613589565b60405180910390f35b61033e6108c6565b60405161034b9190613512565b60405180910390f35b61036e6004803603810190610369919061352d565b6108d5565b005b61038a600480360381019061038591906133e3565b610958565b6040516103979190613282565b60405180910390f35b6103ba60048036038101906103b591906133e3565b61098f565b6040516103c79190613432565b60405180910390f35b6103ea60048036038101906103e591906133e3565b610a23565b005b610406600480360381019061040191906135a4565b610b8d565b60405161041391906135e0565b60405180910390f35b610436600480360381019061043191906135a4565b610bf6565b005b610452600480360381019061044d91906135a4565b610c0a565b60405161045f919061361a565b60405180910390f35b610482600480360381019061047d91906135a4565b610c5e565b60405161048f9190613432565b60405180910390f35b6104b260048036038101906104ad91906135a4565b610ca6565b6040516104bf9190613432565b60405180910390f35b6104e260048036038101906104dd9190613635565b610cf6565b6040516104ef9190613432565b60405180910390f35b610512600480360381019061050d919061352d565b610d4c565b60405161051f9190613282565b60405180910390f35b610530610db7565b60405161053d919061332d565b60405180910390f35b610560600480360381019061055b91906135a4565b610e49565b60405161056d9190613432565b60405180910390f35b61057e610f5a565b60405161058b9190613512565b60405180910390f35b6105ae60048036038101906105a991906133e3565b610f61565b6040516105bb9190613282565b60405180910390f35b6105de60048036038101906105d991906133e3565b610fd8565b6040516105eb9190613282565b60405180910390f35b61060e6004803603810190610609919061368e565b610ffb565b005b61062a6004803603810190610625919061371b565b6110ff565b005b610634611241565b6040516106419190613512565b60405180910390f35b610664600480360381019061065f919061352d565b611265565b005b610680600480360381019061067b91906137bd565b611286565b60405161068d9190613432565b60405180910390f35b6106b060048036038101906106ab9190613829565b61130d565b6040516106bd91906138de565b60405180910390f35b6106e060048036038101906106db91906135a4565b61141d565b6040516106ed9190613432565b60405180910390f35b6106fe611435565b60405161070b9190613432565b60405180910390f35b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610787575061078682611441565b5b9050919050565b60606003805461079d90613928565b80601f01602080910402602001604051908101604052809291908181526020018280546107c990613928565b80156108165780601f106107eb57610100808354040283529160200191610816565b820191906000526020600020905b8154815290600101906020018083116107f957829003601f168201915b5050505050905090565b60008061082b6114ab565b90506108388185856114b3565b600191505092915050565b6000600254905090565b6000806108586114ab565b905061086585828561167c565b610870858585611708565b60019150509392505050565b600060056000838152602001908152602001600020600101549050919050565b6108a58261087c565b6108ae8161197e565b6108b88383611992565b505050565b60006012905090565b60006108d0611a73565b905090565b6108dd6114ab565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461094a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610941906139cb565b60405180910390fd5b6109548282611b8d565b5050565b6000806109636114ab565b90506109848185856109758589611286565b61097f9190613a1a565b6114b3565b600191505092915050565b60004382106109d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109ca90613a9a565b60405180910390fd5b610a1b600960008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002083611c6f565b905092915050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6610a4d8161197e565b678ac7230489e8000082600b60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610aa19190613a1a565b1115610ac7670de0b6b3a7640000678ac7230489e80000610ac29190613ae9565b611dc0565b604051602001610ad79190613ba2565b60405160208183030381529060405290610b27576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b1e919061332d565b60405180910390fd5b50610b328383611e8e565b81600b60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b819190613a1a565b92505081905550505050565b6000600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b610c07610c016114ab565b82611e9c565b50565b6000610c57600960008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050611fb6565b9050919050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000610cef600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612009565b9050919050565b6000438210610d3a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d3190613a9a565b60405180910390fd5b610d45600a83611c6f565b9050919050565b60006005600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b606060048054610dc690613928565b80601f0160208091040260200160405190810160405280929190818152602001828054610df290613928565b8015610e3f5780601f10610e1457610100808354040283529160200191610e3f565b820191906000526020600020905b815481529060010190602001808311610e2257829003601f168201915b5050505050905090565b600080600960008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050905060008114610f3157600960008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600182610ee59190613bd7565b81548110610ef657610ef5613c0b565b5b9060005260206000200160000160049054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16610f34565b60005b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16915050919050565b6000801b81565b600080610f6c6114ab565b90506000610f7a8286611286565b905083811015610fbf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fb690613cac565b60405180910390fd5b610fcc82868684036114b3565b60019250505092915050565b600080610fe36114ab565b9050610ff0818585611708565b600191505092915050565b8342111561103e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161103590613d18565b60405180910390fd5b60006110a06110987fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf89898960405160200161107d9493929190613d38565b60405160208183030381529060405280519060200120612017565b858585612031565b90506110ab8161205c565b86146110ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110e390613dc9565b60405180910390fd5b6110f68188611e9c565b50505050505050565b83421115611142576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161113990613e35565b60405180910390fd5b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886111718c61205c565b8960405160200161118796959493929190613e55565b60405160208183030381529060405280519060200120905060006111aa82612017565b905060006111ba82878787612031565b90508973ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461122a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161122190613f02565b60405180910390fd5b6112358a8a8a6114b3565b50505050505050505050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b61126e8261087c565b6112778161197e565b6112818383611b8d565b505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b61131561319f565b600960008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208263ffffffff168154811061136c5761136b613c0b565b5b906000526020600020016040518060400160405290816000820160009054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016000820160049054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1681525050905092915050565b600b6020528060005260406000206000915090505481565b678ac7230489e8000081565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611522576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161151990613f94565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611591576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161158890614026565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161166f9190613432565b60405180910390a3505050565b60006116888484611286565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461170257818110156116f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116eb90614092565b60405180910390fd5b61170184848484036114b3565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611777576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161176e90614124565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036117e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117dd906141b6565b60405180910390fd5b6117f18383836120ba565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015611877576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161186e90614248565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516119659190613432565b60405180910390a36119788484846120bf565b50505050565b61198f8161198a6114ab565b6120cf565b50565b61199c8282610d4c565b611a6f5760016005600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550611a146114ab565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff16148015611aef57507f000000000000000000000000000000000000000000000000000000000000000046145b15611b1c577f00000000000000000000000000000000000000000000000000000000000000009050611b8a565b611b877f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612154565b90505b90565b611b978282610d4c565b15611c6b5760006005600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550611c106114ab565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b600080838054905090506000808290506005831115611ce5576000611c938461218e565b84611c9e9190613bd7565b905085611cab8883612287565b60000160009054906101000a900463ffffffff1663ffffffff161115611cd357809150611ce3565b600181611ce09190613a1a565b92505b505b5b80821015611d45576000611cfa838361229c565b905085611d078883612287565b60000160009054906101000a900463ffffffff1663ffffffff161115611d2f57809150611d3f565b600181611d3c9190613a1a565b92505b50611ce6565b60008114611d9457611d6386600183611d5e9190613bd7565b612287565b60000160049054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16611d97565b60005b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16935050505092915050565b606060006001611dcf846122c2565b01905060008167ffffffffffffffff811115611dee57611ded614268565b5b6040519080825280601f01601f191660200182016040528015611e205781602001600182028036833780820191505090505b509050600082602001820190505b600115611e83578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8581611e7757611e76613aba565b5b04945060008503611e2e575b819350505050919050565b611e988282612415565b5050565b6000611ea783610b8d565b90506000611eb484610c5e565b905082600860008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f60405160405180910390a4611fb08284836124a2565b50505050565b600063ffffffff8016821115612001576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ff890614309565b60405180910390fd5b819050919050565b600081600001549050919050565b600061202a612024611a73565b8361269b565b9050919050565b6000806000612042878787876126ce565b9150915061204f816127b0565b8192505050949350505050565b600080600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506120a981612009565b91506120b481612916565b50919050565b505050565b6120ca83838361292c565b505050565b6120d98282610d4c565b612150576120e681612957565b6120f48360001c6020612984565b6040516020016121059291906143c1565b6040516020818303038152906040526040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612147919061332d565b60405180910390fd5b5050565b6000838383463060405160200161216f9594939291906143fb565b6040516020818303038152906040528051906020012090509392505050565b60008082036121a05760009050612282565b600060016121ad84612bc0565b901c6001901b905060018184816121c7576121c6613aba565b5b048201901c905060018184816121e0576121df613aba565b5b048201901c905060018184816121f9576121f8613aba565b5b048201901c9050600181848161221257612211613aba565b5b048201901c9050600181848161222b5761222a613aba565b5b048201901c9050600181848161224457612243613aba565b5b048201901c9050600181848161225d5761225c613aba565b5b048201901c905061227e8182858161227857612277613aba565b5b04612ca1565b9150505b919050565b60008260005281602060002001905092915050565b600060028284186122ad9190613ae9565b8284166122ba9190613a1a565b905092915050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310612320577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000838161231657612315613aba565b5b0492506040810190505b6d04ee2d6d415b85acef8100000000831061235d576d04ee2d6d415b85acef8100000000838161235357612352613aba565b5b0492506020810190505b662386f26fc10000831061238c57662386f26fc10000838161238257612381613aba565b5b0492506010810190505b6305f5e10083106123b5576305f5e10083816123ab576123aa613aba565b5b0492506008810190505b61271083106123da5761271083816123d0576123cf613aba565b5b0492506004810190505b606483106123fd57606483816123f3576123f2613aba565b5b0492506002810190505b600a831061240c576001810190505b80915050919050565b61241f8282612cba565b612427612e10565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1661244d610843565b111561248e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612485906144c0565b60405180910390fd5b61249c600a612e3483612e4a565b50505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141580156124de5750600081115b1561269657600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146125bc57600080612565600960008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061311985612e4a565b915091508473ffffffffffffffffffffffffffffffffffffffff167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a72483836040516125b19291906144e0565b60405180910390a250505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16146126955760008061263e600960008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612e3485612e4a565b915091508373ffffffffffffffffffffffffffffffffffffffff167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724838360405161268a9291906144e0565b60405180910390a250505b5b505050565b600082826040516020016126b0929190614576565b60405160208183030381529060405280519060200120905092915050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c11156127095760006003915091506127a7565b60006001878787876040516000815260200160405260405161272e94939291906145ad565b6020604051602081039080840390855afa158015612750573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361279e576000600192509250506127a7565b80600092509250505b94509492505050565b600060048111156127c4576127c36145f2565b5b8160048111156127d7576127d66145f2565b5b031561291357600160048111156127f1576127f06145f2565b5b816004811115612804576128036145f2565b5b03612844576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161283b9061466d565b60405180910390fd5b60026004811115612858576128576145f2565b5b81600481111561286b5761286a6145f2565b5b036128ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016128a2906146d9565b60405180910390fd5b600360048111156128bf576128be6145f2565b5b8160048111156128d2576128d16145f2565b5b03612912576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016129099061476b565b60405180910390fd5b5b50565b6001816000016000828254019250508190555050565b61293783838361312f565b61295261294384610b8d565b61294c84610b8d565b836124a2565b505050565b606061297d8273ffffffffffffffffffffffffffffffffffffffff16601460ff16612984565b9050919050565b606060006002836002612997919061478b565b6129a19190613a1a565b67ffffffffffffffff8111156129ba576129b9614268565b5b6040519080825280601f01601f1916602001820160405280156129ec5781602001600182028036833780820191505090505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110612a2457612a23613c0b565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110612a8857612a87613c0b565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060006001846002612ac8919061478b565b612ad29190613a1a565b90505b6001811115612b72577f3031323334353637383961626364656600000000000000000000000000000000600f861660108110612b1457612b13613c0b565b5b1a60f81b828281518110612b2b57612b2a613c0b565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c945080612b6b906147cd565b9050612ad5565b5060008414612bb6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612bad90614842565b60405180910390fd5b8091505092915050565b600080600090506000608084901c1115612be257608083901c92506080810190505b6000604084901c1115612bfd57604083901c92506040810190505b6000602084901c1115612c1857602083901c92506020810190505b6000601084901c1115612c3357601083901c92506010810190505b6000600884901c1115612c4e57600883901c92506008810190505b6000600484901c1115612c6957600483901c92506004810190505b6000600284901c1115612c8457600283901c92506002810190505b6000600184901c1115612c98576001810190505b80915050919050565b6000818310612cb05781612cb2565b825b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603612d29576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612d20906148ae565b60405180910390fd5b612d35600083836120ba565b8060026000828254612d479190613a1a565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051612df89190613432565b60405180910390a3612e0c600083836120bf565b5050565b60007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff905090565b60008183612e429190613a1a565b905092915050565b6000806000858054905090506000808214612f1957612e7587600184612e709190613bd7565b612287565b6040518060400160405290816000820160009054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016000820160049054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1681525050612f55565b6040518060400160405280600063ffffffff16815260200160007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff168152505b905080602001517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff169350612f8a84868863ffffffff16565b9250600082118015612fa5575043816000015163ffffffff16145b1561301f57612fb383613134565b612fc988600185612fc49190613bd7565b612287565b60000160046101000a8154817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff02191690837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16021790555061310f565b86604051806040016040528061303443611fb6565b63ffffffff16815260200161304886613134565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff168152509080600181540180825580915050600190039060005260206000200160009091909190915060008201518160000160006101000a81548163ffffffff021916908363ffffffff16021790555060208201518160000160046101000a8154817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff02191690837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16021790555050505b5050935093915050565b600081836131279190613bd7565b905092915050565b505050565b60007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8016821115613197576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161318e90614940565b60405180910390fd5b819050919050565b6040518060400160405280600063ffffffff16815260200160007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1681525090565b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b613217816131e2565b811461322257600080fd5b50565b6000813590506132348161320e565b92915050565b6000602082840312156132505761324f6131dd565b5b600061325e84828501613225565b91505092915050565b60008115159050919050565b61327c81613267565b82525050565b60006020820190506132976000830184613273565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156132d75780820151818401526020810190506132bc565b60008484015250505050565b6000601f19601f8301169050919050565b60006132ff8261329d565b61330981856132a8565b93506133198185602086016132b9565b613322816132e3565b840191505092915050565b6000602082019050818103600083015261334781846132f4565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061337a8261334f565b9050919050565b61338a8161336f565b811461339557600080fd5b50565b6000813590506133a781613381565b92915050565b6000819050919050565b6133c0816133ad565b81146133cb57600080fd5b50565b6000813590506133dd816133b7565b92915050565b600080604083850312156133fa576133f96131dd565b5b600061340885828601613398565b9250506020613419858286016133ce565b9150509250929050565b61342c816133ad565b82525050565b60006020820190506134476000830184613423565b92915050565b600080600060608486031215613466576134656131dd565b5b600061347486828701613398565b935050602061348586828701613398565b9250506040613496868287016133ce565b9150509250925092565b6000819050919050565b6134b3816134a0565b81146134be57600080fd5b50565b6000813590506134d0816134aa565b92915050565b6000602082840312156134ec576134eb6131dd565b5b60006134fa848285016134c1565b91505092915050565b61350c816134a0565b82525050565b60006020820190506135276000830184613503565b92915050565b60008060408385031215613544576135436131dd565b5b6000613552858286016134c1565b925050602061356385828601613398565b9150509250929050565b600060ff82169050919050565b6135838161356d565b82525050565b600060208201905061359e600083018461357a565b92915050565b6000602082840312156135ba576135b96131dd565b5b60006135c884828501613398565b91505092915050565b6135da8161336f565b82525050565b60006020820190506135f560008301846135d1565b92915050565b600063ffffffff82169050919050565b613614816135fb565b82525050565b600060208201905061362f600083018461360b565b92915050565b60006020828403121561364b5761364a6131dd565b5b6000613659848285016133ce565b91505092915050565b61366b8161356d565b811461367657600080fd5b50565b60008135905061368881613662565b92915050565b60008060008060008060c087890312156136ab576136aa6131dd565b5b60006136b989828a01613398565b96505060206136ca89828a016133ce565b95505060406136db89828a016133ce565b94505060606136ec89828a01613679565b93505060806136fd89828a016134c1565b92505060a061370e89828a016134c1565b9150509295509295509295565b600080600080600080600060e0888a03121561373a576137396131dd565b5b60006137488a828b01613398565b97505060206137598a828b01613398565b965050604061376a8a828b016133ce565b955050606061377b8a828b016133ce565b945050608061378c8a828b01613679565b93505060a061379d8a828b016134c1565b92505060c06137ae8a828b016134c1565b91505092959891949750929550565b600080604083850312156137d4576137d36131dd565b5b60006137e285828601613398565b92505060206137f385828601613398565b9150509250929050565b613806816135fb565b811461381157600080fd5b50565b600081359050613823816137fd565b92915050565b600080604083850312156138405761383f6131dd565b5b600061384e85828601613398565b925050602061385f85828601613814565b9150509250929050565b613872816135fb565b82525050565b60007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff82169050919050565b6138a981613878565b82525050565b6040820160008201516138c56000850182613869565b5060208201516138d860208501826138a0565b50505050565b60006040820190506138f360008301846138af565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061394057607f821691505b602082108103613953576139526138f9565b5b50919050565b7f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008201527f20726f6c657320666f722073656c660000000000000000000000000000000000602082015250565b60006139b5602f836132a8565b91506139c082613959565b604082019050919050565b600060208201905081810360008301526139e4816139a8565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000613a25826133ad565b9150613a30836133ad565b9250828201905080821115613a4857613a476139eb565b5b92915050565b7f4552433230566f7465733a20626c6f636b206e6f7420796574206d696e656400600082015250565b6000613a84601f836132a8565b9150613a8f82613a4e565b602082019050919050565b60006020820190508181036000830152613ab381613a77565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000613af4826133ad565b9150613aff836133ad565b925082613b0f57613b0e613aba565b5b828204905092915050565b7f596f752063616e6e6f74206d696e74206d6f7265207468616e20000000000000815250565b600081905092915050565b6000613b568261329d565b613b608185613b40565b9350613b708185602086016132b9565b80840191505092915050565b7f204d544b00000000000000000000000000000000000000000000000000000000815250565b6000613bad82613b1a565b601a82019150613bbd8284613b4b565b9150613bc882613b7c565b60048201915081905092915050565b6000613be2826133ad565b9150613bed836133ad565b9250828203905081811115613c0557613c046139eb565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000613c966025836132a8565b9150613ca182613c3a565b604082019050919050565b60006020820190508181036000830152613cc581613c89565b9050919050565b7f4552433230566f7465733a207369676e61747572652065787069726564000000600082015250565b6000613d02601d836132a8565b9150613d0d82613ccc565b602082019050919050565b60006020820190508181036000830152613d3181613cf5565b9050919050565b6000608082019050613d4d6000830187613503565b613d5a60208301866135d1565b613d676040830185613423565b613d746060830184613423565b95945050505050565b7f4552433230566f7465733a20696e76616c6964206e6f6e636500000000000000600082015250565b6000613db36019836132a8565b9150613dbe82613d7d565b602082019050919050565b60006020820190508181036000830152613de281613da6565b9050919050565b7f45524332305065726d69743a206578706972656420646561646c696e65000000600082015250565b6000613e1f601d836132a8565b9150613e2a82613de9565b602082019050919050565b60006020820190508181036000830152613e4e81613e12565b9050919050565b600060c082019050613e6a6000830189613503565b613e7760208301886135d1565b613e8460408301876135d1565b613e916060830186613423565b613e9e6080830185613423565b613eab60a0830184613423565b979650505050505050565b7f45524332305065726d69743a20696e76616c6964207369676e61747572650000600082015250565b6000613eec601e836132a8565b9150613ef782613eb6565b602082019050919050565b60006020820190508181036000830152613f1b81613edf565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000613f7e6024836132a8565b9150613f8982613f22565b604082019050919050565b60006020820190508181036000830152613fad81613f71565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b60006140106022836132a8565b915061401b82613fb4565b604082019050919050565b6000602082019050818103600083015261403f81614003565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b600061407c601d836132a8565b915061408782614046565b602082019050919050565b600060208201905081810360008301526140ab8161406f565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b600061410e6025836132a8565b9150614119826140b2565b604082019050919050565b6000602082019050818103600083015261413d81614101565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b60006141a06023836132a8565b91506141ab82614144565b604082019050919050565b600060208201905081810360008301526141cf81614193565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b60006142326026836132a8565b915061423d826141d6565b604082019050919050565b6000602082019050818103600083015261426181614225565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f53616665436173743a2076616c756520646f65736e27742066697420696e203360008201527f3220626974730000000000000000000000000000000000000000000000000000602082015250565b60006142f36026836132a8565b91506142fe82614297565b604082019050919050565b60006020820190508181036000830152614322816142e6565b9050919050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000600082015250565b600061435f601783613b40565b915061436a82614329565b601782019050919050565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000600082015250565b60006143ab601183613b40565b91506143b682614375565b601182019050919050565b60006143cc82614352565b91506143d88285613b4b565b91506143e38261439e565b91506143ef8284613b4b565b91508190509392505050565b600060a0820190506144106000830188613503565b61441d6020830187613503565b61442a6040830186613503565b6144376060830185613423565b61444460808301846135d1565b9695505050505050565b7f4552433230566f7465733a20746f74616c20737570706c79207269736b73206f60008201527f766572666c6f77696e6720766f74657300000000000000000000000000000000602082015250565b60006144aa6030836132a8565b91506144b58261444e565b604082019050919050565b600060208201905081810360008301526144d98161449d565b9050919050565b60006040820190506144f56000830185613423565b6145026020830184613423565b9392505050565b7f1901000000000000000000000000000000000000000000000000000000000000600082015250565b600061453f600283613b40565b915061454a82614509565b600282019050919050565b6000819050919050565b61457061456b826134a0565b614555565b82525050565b600061458182614532565b915061458d828561455f565b60208201915061459d828461455f565b6020820191508190509392505050565b60006080820190506145c26000830187613503565b6145cf602083018661357a565b6145dc6040830185613503565b6145e96060830184613503565b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f45434453413a20696e76616c6964207369676e61747572650000000000000000600082015250565b60006146576018836132a8565b915061466282614621565b602082019050919050565b600060208201905081810360008301526146868161464a565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265206c656e67746800600082015250565b60006146c3601f836132a8565b91506146ce8261468d565b602082019050919050565b600060208201905081810360008301526146f2816146b6565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b60006147556022836132a8565b9150614760826146f9565b604082019050919050565b6000602082019050818103600083015261478481614748565b9050919050565b6000614796826133ad565b91506147a1836133ad565b92508282026147af816133ad565b915082820484148315176147c6576147c56139eb565b5b5092915050565b60006147d8826133ad565b9150600082036147eb576147ea6139eb565b5b600182039050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b600061482c6020836132a8565b9150614837826147f6565b602082019050919050565b6000602082019050818103600083015261485b8161481f565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000614898601f836132a8565b91506148a382614862565b602082019050919050565b600060208201905081810360008301526148c78161488b565b9050919050565b7f53616665436173743a2076616c756520646f65736e27742066697420696e203260008201527f3234206269747300000000000000000000000000000000000000000000000000602082015250565b600061492a6027836132a8565b9150614935826148ce565b604082019050919050565b600060208201905081810360008301526149598161491d565b905091905056fea26469706673582212202d987284ce465d4a58338d4cdaf2da3110e8170f3f5a3dd52af17db698f40ed164736f6c63430008110033',
  deployedBytecode:
    '0x608060405234801561001057600080fd5b50600436106101fb5760003560e01c806370a082311161011a578063a9059cbb116100ad578063d547741f1161007c578063d547741f1461064a578063dd62ed3e14610666578063f1127ed814610696578063f46eccc4146106c6578063fa9b7018146106f6576101fb565b8063a9059cbb146105c4578063c3cda520146105f4578063d505accf14610610578063d53913931461062c576101fb565b806395d89b41116100e957806395d89b41146105285780639ab24eb014610546578063a217fddf14610576578063a457c2d714610594576101fb565b806370a08231146104685780637ecebe00146104985780638e539e8c146104c857806391d14854146104f8576101fb565b80633644e5151161019257806340c10f191161016157806340c10f19146103d0578063587cde1e146103ec5780635c19a95c1461041c5780636fcfff4514610438576101fb565b80633644e5151461033657806336568abe1461035457806339509351146103705780633a46b1a8146103a0576101fb565b806323b872dd116101ce57806323b872dd1461029c578063248a9ca3146102cc5780632f2ff15d146102fc578063313ce56714610318576101fb565b806301ffc9a71461020057806306fdde0314610230578063095ea7b31461024e57806318160ddd1461027e575b600080fd5b61021a6004803603810190610215919061323a565b610714565b6040516102279190613282565b60405180910390f35b61023861078e565b604051610245919061332d565b60405180910390f35b610268600480360381019061026391906133e3565b610820565b6040516102759190613282565b60405180910390f35b610286610843565b6040516102939190613432565b60405180910390f35b6102b660048036038101906102b1919061344d565b61084d565b6040516102c39190613282565b60405180910390f35b6102e660048036038101906102e191906134d6565b61087c565b6040516102f39190613512565b60405180910390f35b6103166004803603810190610311919061352d565b61089c565b005b6103206108bd565b60405161032d9190613589565b60405180910390f35b61033e6108c6565b60405161034b9190613512565b60405180910390f35b61036e6004803603810190610369919061352d565b6108d5565b005b61038a600480360381019061038591906133e3565b610958565b6040516103979190613282565b60405180910390f35b6103ba60048036038101906103b591906133e3565b61098f565b6040516103c79190613432565b60405180910390f35b6103ea60048036038101906103e591906133e3565b610a23565b005b610406600480360381019061040191906135a4565b610b8d565b60405161041391906135e0565b60405180910390f35b610436600480360381019061043191906135a4565b610bf6565b005b610452600480360381019061044d91906135a4565b610c0a565b60405161045f919061361a565b60405180910390f35b610482600480360381019061047d91906135a4565b610c5e565b60405161048f9190613432565b60405180910390f35b6104b260048036038101906104ad91906135a4565b610ca6565b6040516104bf9190613432565b60405180910390f35b6104e260048036038101906104dd9190613635565b610cf6565b6040516104ef9190613432565b60405180910390f35b610512600480360381019061050d919061352d565b610d4c565b60405161051f9190613282565b60405180910390f35b610530610db7565b60405161053d919061332d565b60405180910390f35b610560600480360381019061055b91906135a4565b610e49565b60405161056d9190613432565b60405180910390f35b61057e610f5a565b60405161058b9190613512565b60405180910390f35b6105ae60048036038101906105a991906133e3565b610f61565b6040516105bb9190613282565b60405180910390f35b6105de60048036038101906105d991906133e3565b610fd8565b6040516105eb9190613282565b60405180910390f35b61060e6004803603810190610609919061368e565b610ffb565b005b61062a6004803603810190610625919061371b565b6110ff565b005b610634611241565b6040516106419190613512565b60405180910390f35b610664600480360381019061065f919061352d565b611265565b005b610680600480360381019061067b91906137bd565b611286565b60405161068d9190613432565b60405180910390f35b6106b060048036038101906106ab9190613829565b61130d565b6040516106bd91906138de565b60405180910390f35b6106e060048036038101906106db91906135a4565b61141d565b6040516106ed9190613432565b60405180910390f35b6106fe611435565b60405161070b9190613432565b60405180910390f35b60007f7965db0b000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19161480610787575061078682611441565b5b9050919050565b60606003805461079d90613928565b80601f01602080910402602001604051908101604052809291908181526020018280546107c990613928565b80156108165780601f106107eb57610100808354040283529160200191610816565b820191906000526020600020905b8154815290600101906020018083116107f957829003601f168201915b5050505050905090565b60008061082b6114ab565b90506108388185856114b3565b600191505092915050565b6000600254905090565b6000806108586114ab565b905061086585828561167c565b610870858585611708565b60019150509392505050565b600060056000838152602001908152602001600020600101549050919050565b6108a58261087c565b6108ae8161197e565b6108b88383611992565b505050565b60006012905090565b60006108d0611a73565b905090565b6108dd6114ab565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461094a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610941906139cb565b60405180910390fd5b6109548282611b8d565b5050565b6000806109636114ab565b90506109848185856109758589611286565b61097f9190613a1a565b6114b3565b600191505092915050565b60004382106109d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016109ca90613a9a565b60405180910390fd5b610a1b600960008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002083611c6f565b905092915050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6610a4d8161197e565b678ac7230489e8000082600b60008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610aa19190613a1a565b1115610ac7670de0b6b3a7640000678ac7230489e80000610ac29190613ae9565b611dc0565b604051602001610ad79190613ba2565b60405160208183030381529060405290610b27576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610b1e919061332d565b60405180910390fd5b50610b328383611e8e565b81600b60008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000828254610b819190613a1a565b92505081905550505050565b6000600860008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff169050919050565b610c07610c016114ab565b82611e9c565b50565b6000610c57600960008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050611fb6565b9050919050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000610cef600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612009565b9050919050565b6000438210610d3a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610d3190613a9a565b60405180910390fd5b610d45600a83611c6f565b9050919050565b60006005600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16905092915050565b606060048054610dc690613928565b80601f0160208091040260200160405190810160405280929190818152602001828054610df290613928565b8015610e3f5780601f10610e1457610100808354040283529160200191610e3f565b820191906000526020600020905b815481529060010190602001808311610e2257829003601f168201915b5050505050905090565b600080600960008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002080549050905060008114610f3157600960008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600182610ee59190613bd7565b81548110610ef657610ef5613c0b565b5b9060005260206000200160000160049054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16610f34565b60005b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16915050919050565b6000801b81565b600080610f6c6114ab565b90506000610f7a8286611286565b905083811015610fbf576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610fb690613cac565b60405180910390fd5b610fcc82868684036114b3565b60019250505092915050565b600080610fe36114ab565b9050610ff0818585611708565b600191505092915050565b8342111561103e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161103590613d18565b60405180910390fd5b60006110a06110987fe48329057bfd03d55e49b547132e39cffd9c1820ad7b9d4c5307691425d15adf89898960405160200161107d9493929190613d38565b60405160208183030381529060405280519060200120612017565b858585612031565b90506110ab8161205c565b86146110ec576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016110e390613dc9565b60405180910390fd5b6110f68188611e9c565b50505050505050565b83421115611142576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161113990613e35565b60405180910390fd5b60007f6e71edae12b1b97f4d1f60370fef10105fa2faae0126114a169c64845d6126c98888886111718c61205c565b8960405160200161118796959493929190613e55565b60405160208183030381529060405280519060200120905060006111aa82612017565b905060006111ba82878787612031565b90508973ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161461122a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161122190613f02565b60405180910390fd5b6112358a8a8a6114b3565b50505050505050505050565b7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b61126e8261087c565b6112778161197e565b6112818383611b8d565b505050565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b61131561319f565b600960008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000208263ffffffff168154811061136c5761136b613c0b565b5b906000526020600020016040518060400160405290816000820160009054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016000820160049054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1681525050905092915050565b600b6020528060005260406000206000915090505481565b678ac7230489e8000081565b60007f01ffc9a7000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916827bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916149050919050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611522576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161151990613f94565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603611591576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161158890614026565b60405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b9258360405161166f9190613432565b60405180910390a3505050565b60006116888484611286565b90507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461170257818110156116f4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016116eb90614092565b60405180910390fd5b61170184848484036114b3565b5b50505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff1603611777576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161176e90614124565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16036117e6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016117dd906141b6565b60405180910390fd5b6117f18383836120ba565b60008060008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905081811015611877576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161186e90614248565b60405180910390fd5b8181036000808673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516119659190613432565b60405180910390a36119788484846120bf565b50505050565b61198f8161198a6114ab565b6120cf565b50565b61199c8282610d4c565b611a6f5760016005600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550611a146114ab565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b60007f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff163073ffffffffffffffffffffffffffffffffffffffff16148015611aef57507f000000000000000000000000000000000000000000000000000000000000000046145b15611b1c577f00000000000000000000000000000000000000000000000000000000000000009050611b8a565b611b877f00000000000000000000000000000000000000000000000000000000000000007f00000000000000000000000000000000000000000000000000000000000000007f0000000000000000000000000000000000000000000000000000000000000000612154565b90505b90565b611b978282610d4c565b15611c6b5760006005600084815260200190815260200160002060000160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff021916908315150217905550611c106114ab565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b600080838054905090506000808290506005831115611ce5576000611c938461218e565b84611c9e9190613bd7565b905085611cab8883612287565b60000160009054906101000a900463ffffffff1663ffffffff161115611cd357809150611ce3565b600181611ce09190613a1a565b92505b505b5b80821015611d45576000611cfa838361229c565b905085611d078883612287565b60000160009054906101000a900463ffffffff1663ffffffff161115611d2f57809150611d3f565b600181611d3c9190613a1a565b92505b50611ce6565b60008114611d9457611d6386600183611d5e9190613bd7565b612287565b60000160049054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16611d97565b60005b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16935050505092915050565b606060006001611dcf846122c2565b01905060008167ffffffffffffffff811115611dee57611ded614268565b5b6040519080825280601f01601f191660200182016040528015611e205781602001600182028036833780820191505090505b509050600082602001820190505b600115611e83578080600190039150507f3031323334353637383961626364656600000000000000000000000000000000600a86061a8153600a8581611e7757611e76613aba565b5b04945060008503611e2e575b819350505050919050565b611e988282612415565b5050565b6000611ea783610b8d565b90506000611eb484610c5e565b905082600860008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508273ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff168573ffffffffffffffffffffffffffffffffffffffff167f3134e8a2e6d97e929a7e54011ea5485d7d196dd5f0ba4d4ef95803e8e3fc257f60405160405180910390a4611fb08284836124a2565b50505050565b600063ffffffff8016821115612001576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401611ff890614309565b60405180910390fd5b819050919050565b600081600001549050919050565b600061202a612024611a73565b8361269b565b9050919050565b6000806000612042878787876126ce565b9150915061204f816127b0565b8192505050949350505050565b600080600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002090506120a981612009565b91506120b481612916565b50919050565b505050565b6120ca83838361292c565b505050565b6120d98282610d4c565b612150576120e681612957565b6120f48360001c6020612984565b6040516020016121059291906143c1565b6040516020818303038152906040526040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612147919061332d565b60405180910390fd5b5050565b6000838383463060405160200161216f9594939291906143fb565b6040516020818303038152906040528051906020012090509392505050565b60008082036121a05760009050612282565b600060016121ad84612bc0565b901c6001901b905060018184816121c7576121c6613aba565b5b048201901c905060018184816121e0576121df613aba565b5b048201901c905060018184816121f9576121f8613aba565b5b048201901c9050600181848161221257612211613aba565b5b048201901c9050600181848161222b5761222a613aba565b5b048201901c9050600181848161224457612243613aba565b5b048201901c9050600181848161225d5761225c613aba565b5b048201901c905061227e8182858161227857612277613aba565b5b04612ca1565b9150505b919050565b60008260005281602060002001905092915050565b600060028284186122ad9190613ae9565b8284166122ba9190613a1a565b905092915050565b600080600090507a184f03e93ff9f4daa797ed6e38ed64bf6a1f0100000000000000008310612320577a184f03e93ff9f4daa797ed6e38ed64bf6a1f010000000000000000838161231657612315613aba565b5b0492506040810190505b6d04ee2d6d415b85acef8100000000831061235d576d04ee2d6d415b85acef8100000000838161235357612352613aba565b5b0492506020810190505b662386f26fc10000831061238c57662386f26fc10000838161238257612381613aba565b5b0492506010810190505b6305f5e10083106123b5576305f5e10083816123ab576123aa613aba565b5b0492506008810190505b61271083106123da5761271083816123d0576123cf613aba565b5b0492506004810190505b606483106123fd57606483816123f3576123f2613aba565b5b0492506002810190505b600a831061240c576001810190505b80915050919050565b61241f8282612cba565b612427612e10565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1661244d610843565b111561248e576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612485906144c0565b60405180910390fd5b61249c600a612e3483612e4a565b50505050565b8173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141580156124de5750600081115b1561269657600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16146125bc57600080612565600960008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002061311985612e4a565b915091508473ffffffffffffffffffffffffffffffffffffffff167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a72483836040516125b19291906144e0565b60405180910390a250505b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff16146126955760008061263e600960008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020612e3485612e4a565b915091508373ffffffffffffffffffffffffffffffffffffffff167fdec2bacdd2f05b59de34da9b523dff8be42e5e38e818c82fdb0bae774387a724838360405161268a9291906144e0565b60405180910390a250505b5b505050565b600082826040516020016126b0929190614576565b60405160208183030381529060405280519060200120905092915050565b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08360001c11156127095760006003915091506127a7565b60006001878787876040516000815260200160405260405161272e94939291906145ad565b6020604051602081039080840390855afa158015612750573d6000803e3d6000fd5b505050602060405103519050600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff160361279e576000600192509250506127a7565b80600092509250505b94509492505050565b600060048111156127c4576127c36145f2565b5b8160048111156127d7576127d66145f2565b5b031561291357600160048111156127f1576127f06145f2565b5b816004811115612804576128036145f2565b5b03612844576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161283b9061466d565b60405180910390fd5b60026004811115612858576128576145f2565b5b81600481111561286b5761286a6145f2565b5b036128ab576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016128a2906146d9565b60405180910390fd5b600360048111156128bf576128be6145f2565b5b8160048111156128d2576128d16145f2565b5b03612912576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016129099061476b565b60405180910390fd5b5b50565b6001816000016000828254019250508190555050565b61293783838361312f565b61295261294384610b8d565b61294c84610b8d565b836124a2565b505050565b606061297d8273ffffffffffffffffffffffffffffffffffffffff16601460ff16612984565b9050919050565b606060006002836002612997919061478b565b6129a19190613a1a565b67ffffffffffffffff8111156129ba576129b9614268565b5b6040519080825280601f01601f1916602001820160405280156129ec5781602001600182028036833780820191505090505b5090507f300000000000000000000000000000000000000000000000000000000000000081600081518110612a2457612a23613c0b565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a9053507f780000000000000000000000000000000000000000000000000000000000000081600181518110612a8857612a87613c0b565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a90535060006001846002612ac8919061478b565b612ad29190613a1a565b90505b6001811115612b72577f3031323334353637383961626364656600000000000000000000000000000000600f861660108110612b1457612b13613c0b565b5b1a60f81b828281518110612b2b57612b2a613c0b565b5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600485901c945080612b6b906147cd565b9050612ad5565b5060008414612bb6576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612bad90614842565b60405180910390fd5b8091505092915050565b600080600090506000608084901c1115612be257608083901c92506080810190505b6000604084901c1115612bfd57604083901c92506040810190505b6000602084901c1115612c1857602083901c92506020810190505b6000601084901c1115612c3357601083901c92506010810190505b6000600884901c1115612c4e57600883901c92506008810190505b6000600484901c1115612c6957600483901c92506004810190505b6000600284901c1115612c8457600283901c92506002810190505b6000600184901c1115612c98576001810190505b80915050919050565b6000818310612cb05781612cb2565b825b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1603612d29576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401612d20906148ae565b60405180910390fd5b612d35600083836120ba565b8060026000828254612d479190613a1a565b92505081905550806000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600082825401925050819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef83604051612df89190613432565b60405180910390a3612e0c600083836120bf565b5050565b60007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff905090565b60008183612e429190613a1a565b905092915050565b6000806000858054905090506000808214612f1957612e7587600184612e709190613bd7565b612287565b6040518060400160405290816000820160009054906101000a900463ffffffff1663ffffffff1663ffffffff1681526020016000820160049054906101000a90047bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1681525050612f55565b6040518060400160405280600063ffffffff16815260200160007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff168152505b905080602001517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff169350612f8a84868863ffffffff16565b9250600082118015612fa5575043816000015163ffffffff16145b1561301f57612fb383613134565b612fc988600185612fc49190613bd7565b612287565b60000160046101000a8154817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff02191690837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16021790555061310f565b86604051806040016040528061303443611fb6565b63ffffffff16815260200161304886613134565b7bffffffffffffffffffffffffffffffffffffffffffffffffffffffff168152509080600181540180825580915050600190039060005260206000200160009091909190915060008201518160000160006101000a81548163ffffffff021916908363ffffffff16021790555060208201518160000160046101000a8154817bffffffffffffffffffffffffffffffffffffffffffffffffffffffff02191690837bffffffffffffffffffffffffffffffffffffffffffffffffffffffff16021790555050505b5050935093915050565b600081836131279190613bd7565b905092915050565b505050565b60007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8016821115613197576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161318e90614940565b60405180910390fd5b819050919050565b6040518060400160405280600063ffffffff16815260200160007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff1681525090565b600080fd5b60007fffffffff0000000000000000000000000000000000000000000000000000000082169050919050565b613217816131e2565b811461322257600080fd5b50565b6000813590506132348161320e565b92915050565b6000602082840312156132505761324f6131dd565b5b600061325e84828501613225565b91505092915050565b60008115159050919050565b61327c81613267565b82525050565b60006020820190506132976000830184613273565b92915050565b600081519050919050565b600082825260208201905092915050565b60005b838110156132d75780820151818401526020810190506132bc565b60008484015250505050565b6000601f19601f8301169050919050565b60006132ff8261329d565b61330981856132a8565b93506133198185602086016132b9565b613322816132e3565b840191505092915050565b6000602082019050818103600083015261334781846132f4565b905092915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061337a8261334f565b9050919050565b61338a8161336f565b811461339557600080fd5b50565b6000813590506133a781613381565b92915050565b6000819050919050565b6133c0816133ad565b81146133cb57600080fd5b50565b6000813590506133dd816133b7565b92915050565b600080604083850312156133fa576133f96131dd565b5b600061340885828601613398565b9250506020613419858286016133ce565b9150509250929050565b61342c816133ad565b82525050565b60006020820190506134476000830184613423565b92915050565b600080600060608486031215613466576134656131dd565b5b600061347486828701613398565b935050602061348586828701613398565b9250506040613496868287016133ce565b9150509250925092565b6000819050919050565b6134b3816134a0565b81146134be57600080fd5b50565b6000813590506134d0816134aa565b92915050565b6000602082840312156134ec576134eb6131dd565b5b60006134fa848285016134c1565b91505092915050565b61350c816134a0565b82525050565b60006020820190506135276000830184613503565b92915050565b60008060408385031215613544576135436131dd565b5b6000613552858286016134c1565b925050602061356385828601613398565b9150509250929050565b600060ff82169050919050565b6135838161356d565b82525050565b600060208201905061359e600083018461357a565b92915050565b6000602082840312156135ba576135b96131dd565b5b60006135c884828501613398565b91505092915050565b6135da8161336f565b82525050565b60006020820190506135f560008301846135d1565b92915050565b600063ffffffff82169050919050565b613614816135fb565b82525050565b600060208201905061362f600083018461360b565b92915050565b60006020828403121561364b5761364a6131dd565b5b6000613659848285016133ce565b91505092915050565b61366b8161356d565b811461367657600080fd5b50565b60008135905061368881613662565b92915050565b60008060008060008060c087890312156136ab576136aa6131dd565b5b60006136b989828a01613398565b96505060206136ca89828a016133ce565b95505060406136db89828a016133ce565b94505060606136ec89828a01613679565b93505060806136fd89828a016134c1565b92505060a061370e89828a016134c1565b9150509295509295509295565b600080600080600080600060e0888a03121561373a576137396131dd565b5b60006137488a828b01613398565b97505060206137598a828b01613398565b965050604061376a8a828b016133ce565b955050606061377b8a828b016133ce565b945050608061378c8a828b01613679565b93505060a061379d8a828b016134c1565b92505060c06137ae8a828b016134c1565b91505092959891949750929550565b600080604083850312156137d4576137d36131dd565b5b60006137e285828601613398565b92505060206137f385828601613398565b9150509250929050565b613806816135fb565b811461381157600080fd5b50565b600081359050613823816137fd565b92915050565b600080604083850312156138405761383f6131dd565b5b600061384e85828601613398565b925050602061385f85828601613814565b9150509250929050565b613872816135fb565b82525050565b60007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff82169050919050565b6138a981613878565b82525050565b6040820160008201516138c56000850182613869565b5060208201516138d860208501826138a0565b50505050565b60006040820190506138f360008301846138af565b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b6000600282049050600182168061394057607f821691505b602082108103613953576139526138f9565b5b50919050565b7f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560008201527f20726f6c657320666f722073656c660000000000000000000000000000000000602082015250565b60006139b5602f836132a8565b91506139c082613959565b604082019050919050565b600060208201905081810360008301526139e4816139a8565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000613a25826133ad565b9150613a30836133ad565b9250828201905080821115613a4857613a476139eb565b5b92915050565b7f4552433230566f7465733a20626c6f636b206e6f7420796574206d696e656400600082015250565b6000613a84601f836132a8565b9150613a8f82613a4e565b602082019050919050565b60006020820190508181036000830152613ab381613a77565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000613af4826133ad565b9150613aff836133ad565b925082613b0f57613b0e613aba565b5b828204905092915050565b7f596f752063616e6e6f74206d696e74206d6f7265207468616e20000000000000815250565b600081905092915050565b6000613b568261329d565b613b608185613b40565b9350613b708185602086016132b9565b80840191505092915050565b7f204d544b00000000000000000000000000000000000000000000000000000000815250565b6000613bad82613b1a565b601a82019150613bbd8284613b4b565b9150613bc882613b7c565b60048201915081905092915050565b6000613be2826133ad565b9150613bed836133ad565b9250828203905081811115613c0557613c046139eb565b5b92915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b7f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760008201527f207a65726f000000000000000000000000000000000000000000000000000000602082015250565b6000613c966025836132a8565b9150613ca182613c3a565b604082019050919050565b60006020820190508181036000830152613cc581613c89565b9050919050565b7f4552433230566f7465733a207369676e61747572652065787069726564000000600082015250565b6000613d02601d836132a8565b9150613d0d82613ccc565b602082019050919050565b60006020820190508181036000830152613d3181613cf5565b9050919050565b6000608082019050613d4d6000830187613503565b613d5a60208301866135d1565b613d676040830185613423565b613d746060830184613423565b95945050505050565b7f4552433230566f7465733a20696e76616c6964206e6f6e636500000000000000600082015250565b6000613db36019836132a8565b9150613dbe82613d7d565b602082019050919050565b60006020820190508181036000830152613de281613da6565b9050919050565b7f45524332305065726d69743a206578706972656420646561646c696e65000000600082015250565b6000613e1f601d836132a8565b9150613e2a82613de9565b602082019050919050565b60006020820190508181036000830152613e4e81613e12565b9050919050565b600060c082019050613e6a6000830189613503565b613e7760208301886135d1565b613e8460408301876135d1565b613e916060830186613423565b613e9e6080830185613423565b613eab60a0830184613423565b979650505050505050565b7f45524332305065726d69743a20696e76616c6964207369676e61747572650000600082015250565b6000613eec601e836132a8565b9150613ef782613eb6565b602082019050919050565b60006020820190508181036000830152613f1b81613edf565b9050919050565b7f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460008201527f7265737300000000000000000000000000000000000000000000000000000000602082015250565b6000613f7e6024836132a8565b9150613f8982613f22565b604082019050919050565b60006020820190508181036000830152613fad81613f71565b9050919050565b7f45524332303a20617070726f766520746f20746865207a65726f20616464726560008201527f7373000000000000000000000000000000000000000000000000000000000000602082015250565b60006140106022836132a8565b915061401b82613fb4565b604082019050919050565b6000602082019050818103600083015261403f81614003565b9050919050565b7f45524332303a20696e73756666696369656e7420616c6c6f77616e6365000000600082015250565b600061407c601d836132a8565b915061408782614046565b602082019050919050565b600060208201905081810360008301526140ab8161406f565b9050919050565b7f45524332303a207472616e736665722066726f6d20746865207a65726f20616460008201527f6472657373000000000000000000000000000000000000000000000000000000602082015250565b600061410e6025836132a8565b9150614119826140b2565b604082019050919050565b6000602082019050818103600083015261413d81614101565b9050919050565b7f45524332303a207472616e7366657220746f20746865207a65726f206164647260008201527f6573730000000000000000000000000000000000000000000000000000000000602082015250565b60006141a06023836132a8565b91506141ab82614144565b604082019050919050565b600060208201905081810360008301526141cf81614193565b9050919050565b7f45524332303a207472616e7366657220616d6f756e742065786365656473206260008201527f616c616e63650000000000000000000000000000000000000000000000000000602082015250565b60006142326026836132a8565b915061423d826141d6565b604082019050919050565b6000602082019050818103600083015261426181614225565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f53616665436173743a2076616c756520646f65736e27742066697420696e203360008201527f3220626974730000000000000000000000000000000000000000000000000000602082015250565b60006142f36026836132a8565b91506142fe82614297565b604082019050919050565b60006020820190508181036000830152614322816142e6565b9050919050565b7f416363657373436f6e74726f6c3a206163636f756e7420000000000000000000600082015250565b600061435f601783613b40565b915061436a82614329565b601782019050919050565b7f206973206d697373696e6720726f6c6520000000000000000000000000000000600082015250565b60006143ab601183613b40565b91506143b682614375565b601182019050919050565b60006143cc82614352565b91506143d88285613b4b565b91506143e38261439e565b91506143ef8284613b4b565b91508190509392505050565b600060a0820190506144106000830188613503565b61441d6020830187613503565b61442a6040830186613503565b6144376060830185613423565b61444460808301846135d1565b9695505050505050565b7f4552433230566f7465733a20746f74616c20737570706c79207269736b73206f60008201527f766572666c6f77696e6720766f74657300000000000000000000000000000000602082015250565b60006144aa6030836132a8565b91506144b58261444e565b604082019050919050565b600060208201905081810360008301526144d98161449d565b9050919050565b60006040820190506144f56000830185613423565b6145026020830184613423565b9392505050565b7f1901000000000000000000000000000000000000000000000000000000000000600082015250565b600061453f600283613b40565b915061454a82614509565b600282019050919050565b6000819050919050565b61457061456b826134a0565b614555565b82525050565b600061458182614532565b915061458d828561455f565b60208201915061459d828461455f565b6020820191508190509392505050565b60006080820190506145c26000830187613503565b6145cf602083018661357a565b6145dc6040830185613503565b6145e96060830184613503565b95945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602160045260246000fd5b7f45434453413a20696e76616c6964207369676e61747572650000000000000000600082015250565b60006146576018836132a8565b915061466282614621565b602082019050919050565b600060208201905081810360008301526146868161464a565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265206c656e67746800600082015250565b60006146c3601f836132a8565b91506146ce8261468d565b602082019050919050565b600060208201905081810360008301526146f2816146b6565b9050919050565b7f45434453413a20696e76616c6964207369676e6174757265202773272076616c60008201527f7565000000000000000000000000000000000000000000000000000000000000602082015250565b60006147556022836132a8565b9150614760826146f9565b604082019050919050565b6000602082019050818103600083015261478481614748565b9050919050565b6000614796826133ad565b91506147a1836133ad565b92508282026147af816133ad565b915082820484148315176147c6576147c56139eb565b5b5092915050565b60006147d8826133ad565b9150600082036147eb576147ea6139eb565b5b600182039050919050565b7f537472696e67733a20686578206c656e67746820696e73756666696369656e74600082015250565b600061482c6020836132a8565b9150614837826147f6565b602082019050919050565b6000602082019050818103600083015261485b8161481f565b9050919050565b7f45524332303a206d696e7420746f20746865207a65726f206164647265737300600082015250565b6000614898601f836132a8565b91506148a382614862565b602082019050919050565b600060208201905081810360008301526148c78161488b565b9050919050565b7f53616665436173743a2076616c756520646f65736e27742066697420696e203260008201527f3234206269747300000000000000000000000000000000000000000000000000602082015250565b600061492a6027836132a8565b9150614935826148ce565b604082019050919050565b600060208201905081810360008301526149598161491d565b905091905056fea26469706673582212202d987284ce465d4a58338d4cdaf2da3110e8170f3f5a3dd52af17db698f40ed164736f6c63430008110033',
  linkReferences: {},
  deployedLinkReferences: {},
};
