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
      address: '0x4bbAa5Cf55D59E7e137525D966097e136E27104d',
      rpcurl:'wss://mainnet.infura.io/ws/v3/0c4614c66b244dc9a975984b0cf0934a',
};