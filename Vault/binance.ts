import { StoredPool } from 'src/Constants';

export const binanceStrategyVaults: Array<StoredPool> = [
  // USDT/USDC
  {
    id: 'dyson-thena-usdt-usdc',
    name: 'USDT/USDC Thena',

    walletToken: [
      {
        address: '0x618f9eb0e1a698409621f4f487b563529f003643',
        name: 'StableV1 AMM - USDT/USDC',
        symbol: 'sAMM-USDT/USDC',
        image: '',

        tokenAmount: '0',
        USDBalance: '0.00',
        decimals: 18,
        allowance: '0',
      },
    ],
    depositedToken: {
      address: '0xD7f442f4fAD9C5C58425AC69C60670C05eE7cf9d',
      name: 'StableV1 AMM - USDT/USDC',
      symbol: 'sAMM-USDT/USDC',
      image: '',

      tokenAmount: '0',
      USDBalance: '0.00',
      decimals: 18,
      allowance: '0',
    },
    vaultAddress: '0xD7f442f4fAD9C5C58425AC69C60670C05eE7cf9d',
    strategyAddress: '0xB51760C33220C396f60aE2a8E0B639e23c43624a',

    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    oracleId: 'dyson-thena-usdt-usdc',
    status: 'active',
    platform: 'thena',
    poolComposition: ['USDT', 'USDC'],

    extra: {
      addLiquidityUrl:
        'https://thena.fi/liquidity/manage/0x618f9Eb0E1a698409621f4F487B563529f003643',
      buyTokenUrl: 'https://thena.fi/liquidity/manage/0x618f9Eb0E1a698409621f4F487B563529f003643',
      strategyDescription:
        'This strategy harvests rewards and compounds them over time, exposing depositors to a higher APY. The compounding process is automated & gas fees are socialised between vault depositors.',
    },
  },
];

export const binanceVaults: Array<StoredPool> = [...binanceStrategyVaults];
// export const binanceVaults: Array<StoredPool> = [];
