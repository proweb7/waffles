export const NFTconstants = {
    maxValue:10,
    minValue: 1,
    gasFee: 0.05,
    tokenABI: [
        {
          inputs: [
            {
              internalType: 'uint256',
              name: 'numberOfTokens',
              type: 'uint256',
            },
          ],
          name: 'mintWaffles',
          outputs: [],
          stateMutability: 'payable',
          type: 'function',
        },
      ],
      address: '0x4bbaa5cf55d59e7e137525d966097e136e27104d',
      rpcurl:'wss://mainnet.infura.io/ws/v3/22a1cff6af0048e28a524d97a1bf7f24',
};
