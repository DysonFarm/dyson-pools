import { StoredPool } from 'src/Constants';

// assets used for vault tokens
const addresses = {
  // stables
  USDC: '0x2791bca1f2de4661ed88a30c99a7a9449aa84174',
  USDT: '0xc2132d05d31c914a87c6611c10748aeb04b58e8f',
  // coins
  WBTC: '0x1BFD67037B42Cf73acF2047067bd4F2C47D9BfD6',
  WETH: '0x7ceb23fd6bc0add59e62ac25578270cff1b9f619',
  WMATIC: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
  // bluechips
  stMATIC: '0x3A58a54C066FdC0f2D55FC9C89F0415C92eBf3C4',
  CRV: '0x172370d5cd63279efa6d502dab29171933a610af',
};

// vaults organised by strategy
export const polygonDystopiaMaximizerVaults: Array<StoredPool> = [
  // USDC/FRAX-PEN/WMATIC
  {
    id: 'Dyson-Maximizer-USDC/FRAX-PEN/WMATIC',
    name: 'USDC/FRAX Dystopia',

    walletToken: [
      {
        address: '0x53227c83a98ba1035fed912da6ce26a0c11c7c66',
        name: 'USDC/FRAX Dystopia',
        symbol: '',
        image: '',

        tokenAmount: '0',
        USDBalance: '0.00',
        decimals: 18,
        allowance: '0',
      },
    ],
    depositedToken: {
      address: '0x4Ce20AB2F090EF5Be3Fc87B2DA60279cC4516854',
      name: 'Maximizer-USDC/FRAX-PEN/WMATIC',
      symbol: '',
      image: '',

      tokenAmount: '0',
      USDBalance: '0.00',
      decimals: 18,
      allowance: '0',
    },
    vaultAddress: '',
    strategyAddress: '0xDaEed8623d480D9ffc5c41c1Df7b1EAF7A54543B',

    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    oracleId: 'dyson-dystopia-usdc-frax',
    status: 'active',
    platform: 'dystopia',
    poolComposition: ['USDC', 'FRAX'],

    extra: {
      addLiquidityUrl:
        'https://www.dystopia.exchange/liquidity/0x53227c83a98ba1035fed912da6ce26a0c11c7c66',
      buyTokenUrl: 'https://www.dystopia.exchange/swap',
      strategyDescription:
        'This strategy harvests rewards and compounds them over time, exposing depositors to a higher APY. The compounding process is automated & gas fees are socialised between vault depositors.',
    },
  },
  // USD+/USDC-PEN/WMATIC
  {
    id: 'Dyson-Maximizer-USD+/USDC-PEN/WMATIC',
    name: 'USD+/USDC Dystopia',

    walletToken: [
      {
        address: '0x421a018cC5839c4C0300AfB21C725776dc389B1a',
        name: 'USD+/USDC Dystopia',
        symbol: '',
        image: '',

        tokenAmount: '0',
        USDBalance: '0.00',
        decimals: 18,
        allowance: '0',
      },
    ],
    depositedToken: {
      address: '0x421a018cC5839c4C0300AfB21C725776dc389B1a',
      name: 'Maximizer-USD+/USDC-PEN/WMATIC',
      symbol: '',
      image: '',

      tokenAmount: '0',
      USDBalance: '0.00',
      decimals: 18,
      allowance: '0',
    },
    vaultAddress: '',
    strategyAddress: '0x8533047a785575Ad941be2fD6d90c2594Dd5E902',

    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    oracleId: 'dyson-dystopia-usdPlus-usdc',
    status: 'active',
    platform: 'dystopia',
    poolComposition: ['USD+', 'USDC'],

    extra: {
      addLiquidityUrl:
        'https://www.dystopia.exchange/liquidity/0x421a018cc5839c4c0300afb21c725776dc389b1a',
      buyTokenUrl: 'https://www.dystopia.exchange/swap',
      strategyDescription:
        'This strategy harvests rewards and compounds them over time, exposing depositors to a higher APY. The compounding process is automated & gas fees are socialised between vault depositors.',
    },
  },
  // FXS/FRAX
  {
    id: 'Dyson-Maximizer-FXS/FRAX-PEN/WMATIC',
    name: 'FXS/FRAX Dystopia',

    walletToken: [
      {
        address: '0xfc2e89aabd257471a461dd506188609b2bec53fa',
        name: 'FXS/FRAX Dystopia',
        symbol: '',
        image: '',

        tokenAmount: '0',
        USDBalance: '0.00',
        decimals: 18,
        allowance: '0',
      },
    ],
    depositedToken: {
      address: '0x6510f7C257094BE3884bAd2281f68A1dF001dAA5',
      name: 'Maximizer-FXS/FRAX-PEN/WMATIC',
      symbol: '',
      image: '',

      tokenAmount: '0',
      USDBalance: '0.00',
      decimals: 18,
      allowance: '0',
    },
    vaultAddress: '',
    strategyAddress: '0x1954c85EcbF92AC3F10d96ddC8ce8143EfF2BED5',

    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    oracleId: 'dyson-dystopia-fxs-frax',
    status: 'active',
    platform: 'dystopia',
    poolComposition: ['FXS', 'FRAX'],

    extra: {
      addLiquidityUrl:
        'https://www.dystopia.exchange/liquidity/0xfc2e89aabd257471a461dd506188609b2bec53fa',
      buyTokenUrl: 'https://www.dystopia.exchange/swap',
      strategyDescription:
        'This strategy harvests rewards and compounds them over time, exposing depositors to a higher APY. The compounding process is automated & gas fees are socialised between vault depositors.',
    },
  },
  // WMATIC/stMATIC
  {
    id: 'Dyson-Maximizer-WMATIC/stMATIC-PEN/WMATIC',
    name: 'WMATIC/stMATIC Dystopia',

    walletToken: [
      {
        address: '0x1237fea0b26f68191d50900bffd85e142697c423',
        name: 'WMATIC/stMATIC Dystopia',
        symbol: '',
        image: '',

        tokenAmount: '0',
        USDBalance: '0.00',
        decimals: 18,
        allowance: '0',
      },
    ],
    depositedToken: {
      address: '0x9CCd6F9b6d726bBC2566847B4fdBa3Ad34267ba3',
      name: 'Maximizer-WMATIC/stMATIC-PEN/WMATIC',
      symbol: '',
      image: '',

      tokenAmount: '0',
      USDBalance: '0.00',
      decimals: 18,
      allowance: '0',
    },
    vaultAddress: '',
    strategyAddress: '0x047a7C65C7aEf1f9746Ebbd52E632240ba04a88a',

    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    oracleId: 'dyson-dystopia-wmatic-stMatic',
    status: 'active',
    platform: 'dystopia',
    poolComposition: ['WMATIC', 'stMATIC'],

    extra: {
      addLiquidityUrl:
        'https://www.dystopia.exchange/liquidity/0x1237fea0b26f68191d50900bffd85e142697c423',
      buyTokenUrl: 'https://www.dystopia.exchange/swap',
      strategyDescription:
        'This strategy harvests rewards and compounds them over time, exposing depositors to a higher APY. The compounding process is automated & gas fees are socialised between vault depositors.',
    },
  },
  // USD+/CLAM
  {
    id: 'Dyson-Maximizer-USD+/CLAM-PEN/WMATIC',
    name: 'USD+/CLAM Dystopia',

    walletToken: [
      {
        address: '0x291e289c39cbaf5ee158028d086d76ffa141cfda',
        name: 'USD+/CLAM Dystopia',
        symbol: '',
        image: '',

        tokenAmount: '0',
        USDBalance: '0.00',
        decimals: 18,
        allowance: '0',
      },
    ],
    depositedToken: {
      address: '0xCc54C01fa54f5676Aaf820e68c9Eb6511c80A385',
      name: 'Maximizer-USD+/CLAM-PEN/WMATIC',
      symbol: '',
      image: '',

      tokenAmount: '0',
      USDBalance: '0.00',
      decimals: 18,
      allowance: '0',
    },
    vaultAddress: '',
    strategyAddress: '0xA9bC4778D3cB8582137eB6777C9770E14F931e86',

    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    oracleId: 'dyson-dystopia-usdPlus-clam',
    status: 'disabled',
    platform: 'dystopia',
    poolComposition: ['USD+', 'CLAM'],

    extra: {
      addLiquidityUrl:
        'https://www.dystopia.exchange/liquidity/0x291e289c39cbaf5ee158028d086d76ffa141cfda',
      buyTokenUrl: 'https://www.dystopia.exchange/swap',
      strategyDescription:
        'This strategy harvests rewards and compounds them over time, exposing depositors to a higher APY. The compounding process is automated & gas fees are socialised between vault depositors.',
    },
  },
  // WMATIC/MaticX
  {
    id: 'Dyson-Maximizer-WMATIC/MaticX-PEN/WMATIC',
    name: 'WMATIC/MaticX Dystopia',

    walletToken: [
      {
        address: '0xadb2395fec4d096b5086d3daf8b33f9f7568ba25',
        name: 'WMATIC/MaticX Dystopia',
        symbol: '',
        image: '',

        tokenAmount: '0',
        USDBalance: '0.00',
        decimals: 18,
        allowance: '0',
      },
    ],
    depositedToken: {
      address: '0xa7b93f5F3009B577A00340DD387f75a5f4A907Ea',
      name: 'Maximizer-WMATIC/MaticX-PEN/WMATIC',
      symbol: '',
      image: '',

      tokenAmount: '0',
      USDBalance: '0.00',
      decimals: 18,
      allowance: '0',
    },
    vaultAddress: '',
    strategyAddress: '0xD626D4df42548F94a7A8a34608b57A036690c997',

    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    oracleId: 'dyson-dystopia-wmatic-maticX',
    status: 'active',
    platform: 'dystopia',
    poolComposition: ['WMATIC', 'MaticX'],

    extra: {
      addLiquidityUrl:
        'https://www.dystopia.exchange/liquidity/0xadb2395fec4d096b5086d3daf8b33f9f7568ba25',
      buyTokenUrl: 'https://www.dystopia.exchange/swap',
      strategyDescription:
        'This strategy harvests rewards and compounds them over time, exposing depositors to a higher APY. The compounding process is automated & gas fees are socialised between vault depositors.',
    },
  },
  // USDC/TUSD
  {
    id: 'Dyson-Maximizer-USDC/TUSD-PEN/WMATIC',
    name: 'USDC/TUSD Dystopia',

    walletToken: [
      {
        address: '0xA498a892AD0D3F70AA449798023AA1F4A0888268',
        name: 'USDC/TUSD Dystopia',
        symbol: '',
        image: '',

        tokenAmount: '0',
        USDBalance: '0.00',
        decimals: 18,
        allowance: '0',
      },
    ],
    depositedToken: {
      address: '0xfc22A0067C9FCEff3d3d45C9bF7014De4414ADb0',
      name: 'Maximizer-USDC/TUSD-PEN/WMATIC',
      symbol: '',
      image: '',

      tokenAmount: '0',
      USDBalance: '0.00',
      decimals: 18,
      allowance: '0',
    },
    vaultAddress: '',
    strategyAddress: '0xFda5b46417A9322f376F7A79faeC0AEa06009cAa',

    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    oracleId: 'dyson-dystopia-usdc-tusd',
    status: 'active',
    platform: 'dystopia',
    poolComposition: ['USDC', 'TUSD'],

    extra: {
      addLiquidityUrl:
        'https://www.dystopia.exchange/liquidity/0xA498a892AD0D3F70AA449798023AA1F4A0888268',
      buyTokenUrl: 'https://www.dystopia.exchange/swap',
      strategyDescription:
        'This strategy harvests rewards and compounds them over time, exposing depositors to a higher APY. The compounding process is automated & gas fees are socialised between vault depositors.',
    },
  },
  // FRAX/MAI
  {
    id: 'Dyson-Maximizer-FRAX/MAI-PEN/WMATIC',
    name: 'FRAX/MAI Dystopia',

    walletToken: [
      {
        address: '0x3f54c58092e9735ad23cf296ee3af81f5a44a5bc',
        name: 'FRAX/MAI Dystopia',
        symbol: '',
        image: '',

        tokenAmount: '0',
        USDBalance: '0.00',
        decimals: 18,
        allowance: '0',
      },
    ],
    depositedToken: {
      address: '0xF75573cE8101a7b664539A8F91dB564a31478683',
      name: 'Maximizer-FRAX/MAI-PEN/WMATIC',
      symbol: '',
      image: '',

      tokenAmount: '0',
      USDBalance: '0.00',
      decimals: 18,
      allowance: '0',
    },
    vaultAddress: '',
    strategyAddress: '0xe1d2F79214A66db8086a3a9aCbfb51Ea875ED5B5',

    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    oracleId: 'dyson-dystopia-frax-mai',
    status: 'active',
    platform: 'dystopia',
    poolComposition: ['FRAX', 'MAI'],

    extra: {
      addLiquidityUrl:
        'https://www.dystopia.exchange/liquidity/0x3f54c58092e9735ad23cf296ee3af81f5a44a5bc',
      buyTokenUrl: 'https://www.dystopia.exchange/swap',
      strategyDescription:
        'This strategy harvests rewards and compounds them over time, exposing depositors to a higher APY. The compounding process is automated & gas fees are socialised between vault depositors.',
    },
  },
  // USD+/stMATIC
  {
    id: 'Dyson-Maximizer-USD+/stMATIC-PEN/WMATIC',
    name: 'USD+/stMATIC Dystopia',

    walletToken: [
      {
        address: '0x6f2fed287e47590b7702f9d331344c7dacbacfe5',
        name: 'USD+/stMATIC Dystopia',
        symbol: '',
        image: '',

        tokenAmount: '0',
        USDBalance: '0.00',
        decimals: 18,
        allowance: '0',
      },
    ],
    depositedToken: {
      address: '0xea2468be723f24378133B3f6447a5e1E02e5b088',
      name: 'Maximizer-USD+/stMATIC-PEN/WMATIC',
      symbol: '',
      image: '',

      tokenAmount: '0',
      USDBalance: '0.00',
      decimals: 18,
      allowance: '0',
    },
    vaultAddress: '',
    strategyAddress: '0x6341B8c8EdDb040EA6384B755d1025c3691CA694',

    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    oracleId: 'dyson-dystopia-usdPlus-stMATIC',
    status: 'active',
    platform: 'dystopia',
    poolComposition: ['USD+', 'stMATIC'],

    extra: {
      addLiquidityUrl:
        'https://www.dystopia.exchange/liquidity/0x6f2fed287e47590b7702f9d331344c7dacbacfe5',
      buyTokenUrl: 'https://www.dystopia.exchange/swap',
      strategyDescription:
        'This strategy harvests rewards and compounds them over time, exposing depositors to a higher APY. The compounding process is automated & gas fees are socialised between vault depositors.',
    },
  },
];
export const polygonBalancerMaximizerVaults: Array<StoredPool> = [
  // USDC/FRAX-PEN/WMATIC
  {
    id: 'Dyson-Maximizer-WMATIC/stMATIC-USDC/USDT',
    name: 'WMATIC/stMATIC Balancer',

    walletToken: [
      {
        address: '0x8159462d255c1d24915cb51ec361f700174cd994',
        name: 'WMATIC/stMATIC Balancer',
        symbol: '',
        image: '',

        tokenAmount: '0',
        USDBalance: '0.00',
        decimals: 18,
        allowance: '0',
      },
    ],
    depositedToken: {
      address: '0x6848f32F1f4e205b9B41f69e4Cdc924457Dbd14F',
      name: 'Maximizer-WMATIC/stMATIC-USDC/USDT',
      symbol: '',
      image: '',

      tokenAmount: '0',
      USDBalance: '0.00',
      decimals: 18,
      allowance: '0',
    },
    vaultAddress: '',
    strategyAddress: '0x006fA5B1A6640C5441ea316edA53490328F3F217',

    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    oracleId: 'dyson-dystopia-wmatic-stMatic', // TODO
    status: 'active',
    platform: 'balancer',
    poolComposition: ['WMATIC', 'stMATIC'],

    extra: {
      addLiquidityUrl:
        'https://polygon.balancer.fi/#/pool/0x8159462d255c1d24915cb51ec361f700174cd99400000000000000000000075d/invest',
      buyTokenUrl: 'https://polygon.balancer.fi/#/trade',
      strategyDescription:
        'This strategy harvests rewards and compounds them over time, exposing depositors to a higher APY. The compounding process is automated & gas fees are socialised between vault depositors.',
    },
  },
];
export const polygonStrategyVaults: Array<StoredPool> = [
  // GNS
  {
    id: 'Dyson-Strategy-Gains-DAI',
    name: 'GNS',

    walletToken: [
      {
        address: '0xE5417Af564e4bFDA1c483642db72007871397896',
        name: 'Gains',
        symbol: 'GNS',
        image: '',

        tokenAmount: '0',
        USDBalance: '0.00',
        decimals: 18,
        allowance: '0',
      },
    ],
    depositedToken: {
      address: '0x035001DdC2f6DcF2006565Af31709f8613a7D70C',
      name: 'Dyson-Gains-GNS',
      symbol: 'maticDysonGNSStakingVault ',
      image: '',

      tokenAmount: '0',
      USDBalance: '0.00',
      decimals: 18,
      allowance: '0',
    },
    vaultAddress: '0x035001DdC2f6DcF2006565Af31709f8613a7D70C',
    strategyAddress: '0x95e73a6a39940f0b62afe12a4a3468e95fc61ab0',

    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    oracleId: 'GNS',
    status: 'active',
    platform: 'gains',
    poolComposition: ['GNS'],

    extra: {
      addLiquidityUrl:
        'https://quickswap.exchange/#/swap?inputCurrency=0x8f3cf7ad23cd3cadbd9735aff958023239c6a063&outputCurrency=0xE5417Af564e4bFDA1c483642db72007871397896',
      buyTokenUrl:
        'https://quickswap.exchange/#/swap?inputCurrency=0x8f3cf7ad23cd3cadbd9735aff958023239c6a063&outputCurrency=0xE5417Af564e4bFDA1c483642db72007871397896',
      strategyDescription:
        'This strategy harvests rewards and compounds them over time, exposing depositors to a higher APY. The compounding process is automated & gas fees are socialised between vault depositors.',
    },
    // rewardToken: 'DAI',
  },
  // spSATIN/SATIN
  {
    id: 'satin-spsatin-satin',
    name: 'spSATIN/vAMM-CASH/SATIN Satin',
    walletToken: [
      {
        address: '0x36a7a1ee03dd9f5ee9363f41ae05bd15a8f1b85f',
        name: 'StableV1 AMM - spSATIN/vAMM-CASH/SATIN',
        symbol: 'sAMM-spSATIN/vAMM-CASH/SATIN',
        image: '',

        tokenAmount: '0',
        USDBalance: '0.00',
        decimals: 18,
        allowance: '0',
      },
    ],
    depositedToken: {
      address: '0xcac1c87Ca48C860De5fD71431d002a0c06b6Ede4',
      name: 'Dyson Matic SPSATIN/SATINLP Vault',
      symbol: 'DysonMaticSatinSpSatinSatinLPVault ',
      image: '',

      tokenAmount: '0',
      USDBalance: '0.00',
      decimals: 18,
      allowance: '0',
    },
    vaultAddress: '0xcac1c87Ca48C860De5fD71431d002a0c06b6Ede4',
    strategyAddress: '0xfd5e8e710f923305f5a4e7f3e9580d1cae3e14d9',

    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    oracleId: 'satin-spsatin-satin',
    status: 'active',
    platform: 'satin',
    poolComposition: ['spSATIN', 'SATIN'],
    extra: {
      addLiquidityUrl:
        'https://satin.exchange/liquidity/0x36a7a1ee03dd9f5ee9363f41ae05bd15a8f1b85f',
      buyTokenUrl: 'https://satin.exchange/liquidity/0x36a7a1ee03dd9f5ee9363f41ae05bd15a8f1b85f',
      strategyDescription:
        'This strategy harvests rewards and compounds them over time, exposing depositors to a higher APY. The compounding process is automated & gas fees are socialised between vault depositors.',
    },
  },
];
export const polygonUniV3Vaults: Array<StoredPool> = [
  // USDC/WETH 5Bps
  {
    id: 'Dyson-UniV3-USDC/WETH',
    name: 'USDC/WETH Uniswap V3',

    walletToken: [
      {
        address: addresses.USDC,
        name: 'USDC',
        symbol: 'USDC',
        image: '',

        tokenAmount: '0',
        USDBalance: '0.00',
        decimals: 6,
        allowance: '0',
      },
      {
        address: addresses.WETH,
        name: 'WETH',
        symbol: 'WETH',
        image: '',

        tokenAmount: '0',
        USDBalance: '0.00',
        decimals: 18,
        allowance: '0',
      },
    ],
    depositedToken: {
      address: '0x1b153352fe65b6cf5105bf285593797892fd083b',
      name: 'Dyson-UniV3-USDC/WETH',
      symbol: '',
      image: '',

      tokenAmount: '0',
      USDBalance: '0.00',
      decimals: 18,
      allowance: '0',
    },
    vaultAddress: '0x1b153352fe65b6cf5105bf285593797892fd083b',
    strategyAddress: '0x6656cDfBc514AC02d3D9A4869ee511B51c92510F',
    poolFromStrategyAddress: '0x45dda9cb7c25131df268515131f647d726f50608',

    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    oracleId: 'dyson-uniV3-USDC-WETH',
    status: 'active',
    platform: 'uniswapv3',
    poolComposition: ['USDC', 'WETH'],

    extra: {
      addLiquidityUrl: 'https://app.uniswap.org/#/swap',
      buyTokenUrl: 'https://app.uniswap.org/#/swap',
      strategyDescription:
        'This is a strategy for using a Uniswap-V3 liquidity pool made up of USDC and WETH tokens. By focusing on certain price ranges, this approach can generate more trading fees for liquidity providers (LPs) compared to other types of liquidity pools. In this strategy, the deposit token is staked in the Uniswap V3 protocol to earn USDC and WETH rewards. These rewards are then sold to buy more LP tokens.',
    },
  },
  // USDC/WETH 30Bps
  {
    id: 'Dyson-UniV3-USDC/WETH 30 Bps',
    name: 'USDC/WETH Uniswap V3',

    walletToken: [
      {
        address: addresses.USDC,
        name: 'USDC',
        symbol: 'USDC',
        image: '',

        tokenAmount: '0',
        USDBalance: '0.00',
        decimals: 6,
        allowance: '0',
      },
      {
        address: addresses.WETH,
        name: 'WETH',
        symbol: 'WETH',
        image: '',

        tokenAmount: '0',
        USDBalance: '0.00',
        decimals: 18,
        allowance: '0',
      },
    ],
    depositedToken: {
      address: '0x233aD09A43024e658A6Fb3a93C15dFA2444549Ee',
      name: 'Dyson-UniV3-USDC/WETH',
      symbol: '',
      image: '',

      tokenAmount: '0',
      USDBalance: '0.00',
      decimals: 18,
      allowance: '0',
    },
    vaultAddress: '0x233aD09A43024e658A6Fb3a93C15dFA2444549Ee',
    strategyAddress: '0x5020BD495f17f5626F4Fa31970bf99763140dB7b',
    poolFromStrategyAddress: '0x0e44cEb592AcFC5D3F09D996302eB4C499ff8c10',

    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    oracleId: 'dyson-uniV3-USDC-WETH30bps',
    status: 'active',
    platform: 'uniswapv3',
    poolComposition: ['USDC', 'WETH'],

    extra: {
      addLiquidityUrl: 'https://app.uniswap.org/#/swap',
      buyTokenUrl: 'https://app.uniswap.org/#/swap',
      strategyDescription:
        'This is a strategy for using a Uniswap-V3 liquidity pool made up of USDC and WETH tokens. By focusing on certain price ranges, this approach can generate more trading fees for liquidity providers (LPs) compared to other types of liquidity pools. In this strategy, the deposit token is staked in the Uniswap V3 protocol to earn USDC and WETH rewards. These rewards are then sold to buy more LP tokens.',
    },
  },
  // WMATIC/USDC 5Bps
  {
    id: 'Dyson-UniV3-WMATIC/USDC 5 Bps',
    name: 'WMATIC/USDC Uniswap V3 5 Bps',

    walletToken: [
      {
        address: addresses.WMATIC,
        name: 'WMATIC',
        symbol: 'WMATIC',
        image: '',

        tokenAmount: '0',
        USDBalance: '0.00',
        decimals: 18,
        allowance: '0',
      },
      {
        address: addresses.USDC,
        name: 'USDC',
        symbol: 'USDC',
        image: '',

        tokenAmount: '0',
        USDBalance: '0.00',
        decimals: 6,
        allowance: '0',
      },
    ],
    depositedToken: {
      address: '0x1576B3b53CcB4F0bB3f7A3F4276b0De641a7Adb0',
      name: 'Dyson-UniV3-WMATIC/USDC 5 Bps',
      symbol: '',
      image: '',

      tokenAmount: '0',
      USDBalance: '0.00',
      decimals: 18,
      allowance: '0',
    },
    vaultAddress: '0x1576B3b53CcB4F0bB3f7A3F4276b0De641a7Adb0',
    strategyAddress: '0x02359e119E241Af5A982295998A486d9B35842e5',
    poolFromStrategyAddress: '0xa374094527e1673a86de625aa59517c5de346d32',

    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    oracleId: 'dyson-uniV3-WMATIC-USDC5bps',
    status: 'active',
    platform: 'uniswapv3',
    poolComposition: ['WMATIC', 'USDC'],

    extra: {
      addLiquidityUrl: 'https://app.uniswap.org/#/swap',
      buyTokenUrl: 'https://app.uniswap.org/#/swap',
      strategyDescription:
        'This is a strategy for using a Uniswap-V3 liquidity pool made up of WMATIC and USDC tokens. By focusing on certain price ranges, this approach can generate more trading fees for liquidity providers (LPs) compared to other types of liquidity pools. In this strategy, the deposit token is staked in the Uniswap V3 protocol to earn WMATIC and USDC rewards. These rewards are then sold to buy more LP tokens.',
    },
  },
  // WMATIC/USDC 30Bps
  {
    id: 'Dyson-UniV3-WMATIC/USDC 30 Bps',
    name: 'WMATIC/USDC Uniswap V3 30 Bps',

    walletToken: [
      {
        address: addresses.WMATIC,
        name: 'WMATIC',
        symbol: 'WMATIC',
        image: '',

        tokenAmount: '0',
        USDBalance: '0.00',
        decimals: 18,
        allowance: '0',
      },
      {
        address: addresses.USDC,
        name: 'USDC',
        symbol: 'USDC',
        image: '',

        tokenAmount: '0',
        USDBalance: '0.00',
        decimals: 6,
        allowance: '0',
      },
    ],
    depositedToken: {
      address: '0xE4854e03f69f754f63086E6454BC89C173F3aC2C',
      name: 'Dyson-UniV3-WMATIC/USDC 30 Bps',
      symbol: '',
      image: '',

      tokenAmount: '0',
      USDBalance: '0.00',
      decimals: 18,
      allowance: '0',
    },
    vaultAddress: '0xE4854e03f69f754f63086E6454BC89C173F3aC2C',
    strategyAddress: '0x06aF8069F69DF2717267AE8e57058de5DaC97771',
    poolFromStrategyAddress: '0x88f3c15523544835ff6c738ddb30995339ad57d6',

    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    oracleId: 'dyson-uniV3-WMATIC-USDC30bps',
    status: 'active',
    platform: 'uniswapv3',
    poolComposition: ['WMATIC', 'USDC'],

    extra: {
      addLiquidityUrl: 'https://app.uniswap.org/#/swap',
      buyTokenUrl: 'https://app.uniswap.org/#/swap',
      strategyDescription:
        'This is a strategy for using a Uniswap-V3 liquidity pool made up of WMATIC and USDC tokens. By focusing on certain price ranges, this approach can generate more trading fees for liquidity providers (LPs) compared to other types of liquidity pools. In this strategy, the deposit token is staked in the Uniswap V3 protocol to earn WMATIC and USDC rewards. These rewards are then sold to buy more LP tokens.',
    },
  },
  // WMATIC/WETH 5Bps
  {
    id: 'Dyson-UniV3-WMATIC/WETH 5 Bps',
    name: 'WMATIC/WETH Uniswap V3 5 Bps',

    walletToken: [
      {
        address: addresses.WMATIC,
        name: 'WMATIC',
        symbol: 'WMATIC',
        image: '',

        tokenAmount: '0',
        USDBalance: '0.00',
        decimals: 18,
        allowance: '0',
      },
      {
        address: addresses.WETH,
        name: 'WETH',
        symbol: 'WETH',
        image: '',

        tokenAmount: '0',
        USDBalance: '0.00',
        decimals: 18,
        allowance: '0',
      },
    ],
    depositedToken: {
      address: '0x6Df6355DB123C83fD33c0A3AAc790730E5d8bE59',
      name: 'Dyson-UniV3-WMATIC/WETH 5 Bps',
      symbol: '',
      image: '',

      tokenAmount: '0',
      USDBalance: '0.00',
      decimals: 18,
      allowance: '0',
    },
    vaultAddress: '0x6Df6355DB123C83fD33c0A3AAc790730E5d8bE59',
    strategyAddress: '0xaDa3AC8Bc18803C2EaFDD4B41f83C94900761CE6',
    poolFromStrategyAddress: '0x86f1d8390222a3691c28938ec7404a1661e618e0',

    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    oracleId: 'dyson-uniV3-WMATIC-WETH5bps',
    status: 'active',
    platform: 'uniswapv3',
    poolComposition: ['WMATIC', 'WETH'],

    extra: {
      addLiquidityUrl: 'https://app.uniswap.org/#/swap',
      buyTokenUrl: 'https://app.uniswap.org/#/swap',
      strategyDescription:
        'This is a strategy for using a Uniswap-V3 liquidity pool made up of WMATIC and WETH tokens. By focusing on certain price ranges, this approach can generate more trading fees for liquidity providers (LPs) compared to other types of liquidity pools. In this strategy, the deposit token is staked in the Uniswap V3 protocol to earn WMATIC and WETH rewards. These rewards are then sold to buy more LP tokens.',
    },
  },
  // WMATIC/USDT 5Bps
  {
    id: 'Dyson-UniV3-WMATIC/USDT 5 Bps',
    name: 'WMATIC/USDT Uniswap V3 5 Bps',

    walletToken: [
      {
        address: addresses.WMATIC,
        name: 'WMATIC',
        symbol: 'WMATIC',
        image: '',

        tokenAmount: '0',
        USDBalance: '0.00',
        decimals: 18,
        allowance: '0',
      },
      {
        address: addresses.USDT,
        name: 'USDT',
        symbol: 'USDT',
        image: '',

        tokenAmount: '0',
        USDBalance: '0.00',
        decimals: 6,
        allowance: '0',
      },
    ],
    depositedToken: {
      address: '0x07A10f6E67e63A33bf62415331def452080D86Bf',
      name: 'Dyson-UniV3-WMATIC/USDT 5 Bps',
      symbol: '',
      image: '',

      tokenAmount: '0',
      USDBalance: '0.00',
      decimals: 18,
      allowance: '0',
    },
    vaultAddress: '0x07A10f6E67e63A33bf62415331def452080D86Bf',
    strategyAddress: '0x43807Cbb138597f80D37d5F85359332f08dfEfA3',
    poolFromStrategyAddress: '0x9b08288c3be4f62bbf8d1c20ac9c5e6f9467d8b7',

    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    oracleId: 'dyson-uniV3-WMATIC-USDT5bps',
    status: 'active',
    platform: 'uniswapv3',
    poolComposition: ['WMATIC', 'USDT'],

    extra: {
      addLiquidityUrl: 'https://app.uniswap.org/#/swap',
      buyTokenUrl: 'https://app.uniswap.org/#/swap',
      strategyDescription:
        'This is a strategy for using a Uniswap-V3 liquidity pool made up of WMATIC and USDT tokens. By focusing on certain price ranges, this approach can generate more trading fees for liquidity providers (LPs) compared to other types of liquidity pools. In this strategy, the deposit token is staked in the Uniswap V3 protocol to earn WMATIC and USDT rewards. These rewards are then sold to buy more LP tokens.',
    },
  },
  // WBTC/WETH 5Bps
  {
    id: 'Dyson-UniV3-WBTC/WETH 5 Bps',
    name: 'WBTC/WETH Uniswap V3 5 Bps',

    walletToken: [
      {
        address: addresses.WBTC,
        name: 'WBTC',
        symbol: 'WBTC',
        image: '',

        tokenAmount: '0',
        USDBalance: '0.00',
        decimals: 8,
        allowance: '0',
      },
      {
        address: addresses.WETH,
        name: 'WETH',
        symbol: 'WETH',
        image: '',

        tokenAmount: '0',
        USDBalance: '0.00',
        decimals: 18,
        allowance: '0',
      },
    ],
    depositedToken: {
      address: '0xDc6f84429fE8Cf4b7c879123Faf5E0b8d9e0f490',
      name: 'Dyson-UniV3-WBTC/WETH 5 Bps',
      symbol: '',
      image: '',

      tokenAmount: '0',
      USDBalance: '0.00',
      decimals: 18,
      allowance: '0',
    },
    vaultAddress: '0xDc6f84429fE8Cf4b7c879123Faf5E0b8d9e0f490',
    strategyAddress: '0x7f6dCCE64C01E930d93a2B1824Ac22aaF17074f7',
    poolFromStrategyAddress: '0x50eaedb835021e4a108b7290636d62e9765cc6d7',

    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    oracleId: 'dyson-uniV3-WBTC-WETH5bps',
    status: 'active',
    platform: 'uniswapv3',
    poolComposition: ['WBTC', 'WETH'],

    extra: {
      addLiquidityUrl: 'https://app.uniswap.org/#/swap',
      buyTokenUrl: 'https://app.uniswap.org/#/swap',
      strategyDescription:
        'This is a strategy for using a Uniswap-V3 liquidity pool made up of WBTC and WETH tokens. By focusing on certain price ranges, this approach can generate more trading fees for liquidity providers (LPs) compared to other types of liquidity pools. In this strategy, the deposit token is staked in the Uniswap V3 protocol to earn WBTC and WETH rewards. These rewards are then sold to buy more LP tokens.',
    },
  },
  // WMATIC/stMATIC 5Bps
  // disabled
  {
    id: 'Dyson-UniV3-WMATIC/stMATIC 1 Bps',
    name: 'WMATIC/stMATIC Uniswap V3 1 Bps',

    walletToken: [
      {
        address: addresses.WMATIC,
        name: 'WMATIC',
        symbol: 'WMATIC',
        image: '',

        tokenAmount: '0',
        USDBalance: '0.00',
        decimals: 18,
        allowance: '0',
      },
      {
        address: addresses.stMATIC,
        name: 'stMATIC',
        symbol: 'stMATIC',
        image: '',

        tokenAmount: '0',
        USDBalance: '0.00',
        decimals: 18,
        allowance: '0',
      },
    ],
    depositedToken: {
      address: '0xc9B8d012cCffd1A5db2CD63945B54FfEd2f175a2',
      name: 'Dyson-UniV3-WMATIC/stMATIC 1 Bps',
      symbol: '',
      image: '',

      tokenAmount: '0',
      USDBalance: '0.00',
      decimals: 18,
      allowance: '0',
    },
    vaultAddress: '0xc9B8d012cCffd1A5db2CD63945B54FfEd2f175a2',
    strategyAddress: '0xc9B8d012cCffd1A5db2CD63945B54FfEd2f175a2',
    poolFromStrategyAddress: '0x59db5ea66958b19641b6891fc373b44b567ea15c',

    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    oracleId: 'dyson-uniV3-WMATIC-stMATIC1bps',
    status: 'disabled',
    platform: 'uniswapv3',
    poolComposition: ['WMATIC', 'stMATIC'],

    extra: {
      addLiquidityUrl: 'https://app.uniswap.org/#/swap',
      buyTokenUrl: 'https://app.uniswap.org/#/swap',
      strategyDescription:
        'This is a strategy for using a Uniswap-V3 liquidity pool made up of WMATIC and stMATIC tokens. By focusing on certain price ranges, this approach can generate more trading fees for liquidity providers (LPs) compared to other types of liquidity pools. In this strategy, the deposit token is staked in the Uniswap V3 protocol to earn WMATIC and stMATIC rewards. These rewards are then sold to buy more LP tokens.',
    },
  },
  // WMATIC/CRV 30Bps
  {
    id: 'Dyson-UniV3-WMATIC/CRV 30 Bps',
    name: 'WMATIC/CRV Uniswap V3 30 Bps',

    walletToken: [
      {
        address: addresses.WMATIC,
        name: 'WMATIC',
        symbol: 'WMATIC',
        image: '',

        tokenAmount: '0',
        USDBalance: '0.00',
        decimals: 18,
        allowance: '0',
      },
      {
        address: addresses.CRV,
        name: 'CRV',
        symbol: 'CRV',
        image: '',

        tokenAmount: '0',
        USDBalance: '0.00',
        decimals: 18,
        allowance: '0',
      },
    ],
    depositedToken: {
      address: '0x46088957EEc2b4ab7314B24493a22c8ee1C66187',
      name: 'maticDysonUniV3WMATICCRV30BpsVault',
      symbol: '',
      image: '',

      tokenAmount: '0',
      USDBalance: '0.00',
      decimals: 18,
      allowance: '0',
    },
    vaultAddress: '0x46088957EEc2b4ab7314B24493a22c8ee1C66187',
    strategyAddress: '0x69561Ba14a232AA879d2fEBf86840b2C1ca1C3C4',
    poolFromStrategyAddress: '0x4d05f2a005e6f36633778416764e82d1d12e7fbb',

    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    oracleId: 'dyson-uniV3-WMATIC-CRV30bps',
    status: 'active',
    platform: 'uniswapv3',
    poolComposition: ['WMATIC', 'CRV'],

    extra: {
      addLiquidityUrl: 'https://app.uniswap.org/#/swap',
      buyTokenUrl: 'https://app.uniswap.org/#/swap',
      strategyDescription:
        'This is a strategy for using a Uniswap-V3 liquidity pool made up of WMATIC and CRV tokens. By focusing on certain price ranges, this approach can generate more trading fees for liquidity providers (LPs) compared to other types of liquidity pools. In this strategy, the deposit token is staked in the Uniswap V3 protocol to earn WMATIC and CRV rewards. These rewards are then sold to buy more LP tokens.',
    },
  },
  // USDC/USDT 1Bps
  {
    id: 'Dyson-UniV3-USDC/USDT',
    name: 'USDC/USDT Uniswap V3',

    walletToken: [
      {
        address: addresses.USDC,
        name: 'USDC',
        symbol: 'USDC',
        image: '',

        tokenAmount: '0',
        USDBalance: '0.00',
        decimals: 6,
        allowance: '0',
      },
      {
        address: addresses.USDT,
        name: 'USDT',
        symbol: 'USDT',
        image: '',

        tokenAmount: '0',
        USDBalance: '0.00',
        decimals: 6,
        allowance: '0',
      },
    ],
    depositedToken: {
      address: '0x0f82F88EE6f017F46CcAE0690a2e62B7ddAC730f',
      name: 'Dyson-UniV3-USDC/USDT',
      symbol: '',
      image: '',

      tokenAmount: '0',
      USDBalance: '0.00',
      decimals: 18,
      allowance: '0',
    },
    vaultAddress: '0x0f82F88EE6f017F46CcAE0690a2e62B7ddAC730f',
    strategyAddress: '0x5843Bf571ff204963618686C2d46Ca374B00c1fE',
    poolFromStrategyAddress: '0xdac8a8e6dbf8c690ec6815e0ff03491b2770255d',

    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    oracleId: 'dyson-uniV3-USDC-USDT', // TODO
    status: 'active',
    platform: 'uniswapv3',
    poolComposition: ['USDC', 'USDT'],

    extra: {
      addLiquidityUrl: 'https://app.uniswap.org/#/swap',
      buyTokenUrl: 'https://app.uniswap.org/#/swap',
      strategyDescription:
        'This is a strategy for using a Uniswap-V3 liquidity pool made up of USDC and USDT tokens. By focusing on certain price ranges, this approach can generate more trading fees for liquidity providers (LPs) compared to other types of liquidity pools. In this strategy, the deposit token is staked in the Uniswap V3 protocol to earn USDC and USDT rewards. These rewards are then sold to buy more LP tokens.',
    },
  },
];
export const polygonQSV3Vaults: Array<StoredPool> = [
  {
    id: 'Dyson-QSV3-WMATIC/WETH',
    name: 'WMATIC/WETH Quickswap V3',

    walletToken: [
      {
        address: addresses.WMATIC,
        name: 'WMATIC',
        symbol: '',
        image: '',

        tokenAmount: '0',
        USDBalance: '0.00',
        decimals: 18,
        allowance: '0',
      },
      {
        address: addresses.WETH,
        name: 'WETH',
        symbol: '',
        image: '',

        tokenAmount: '0',
        USDBalance: '0.00',
        decimals: 18,
        allowance: '0',
      },
    ],
    depositedToken: {
      address: '0x2904AcA8bf132de8be155e527D4e74E68438F479',
      name: 'maticDysonQSV3WMATICWETHVault',
      symbol: '',
      image: '',

      tokenAmount: '0',
      USDBalance: '0.00',
      decimals: 18,
      allowance: '0',
    },
    vaultAddress: '0x2904AcA8bf132de8be155e527D4e74E68438F479',
    strategyAddress: '0x9C8de942e94826DDFb7aA1A096c7166388673CFF',
    poolFromStrategyAddress: '0x479e1b71a702a595e19b6d5932cd5c863ab57ee0',

    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    oracleId: 'dyson-qsV3-WMATIC-WETH',
    status: 'active',
    platform: 'quickswapv3',
    poolComposition: ['WMATIC', 'WETH'],

    extra: {
      addLiquidityUrl: 'https://app.uniswap.org/#/swap',
      buyTokenUrl: 'https://app.uniswap.org/#/swap',
      strategyDescription:
        'This is a strategy for using a Quickswap-V3 liquidity pool made up of WMATIC and WETH tokens. By focusing on certain price ranges, this approach can generate more trading fees for liquidity providers (LPs) compared to other types of liquidity pools. In this strategy, the deposit token is staked in the Quickswap V3 protocol to earn WMATIC and WETH rewards. These rewards are then sold to buy more LP tokens.',
    },
  },
];
export const polygonRebaserVaults: Array<StoredPool> = [
  {
    id: 'rebaser-vault-wmatic/matic+',
    name: 'matic+ rebaser',

    walletToken: [
      {
        address: addresses.WMATIC,
        symbol: 'WMATIC',
        name: 'WMATIC',
        image: '',

        tokenAmount: '0',
        USDBalance: '0.00',
        decimals: 18,
        allowance: '0',
      },
    ],
    depositedToken: {
      address: '0xFAc11f32AeA2e02Edee1FD947a310F4f17936a9e', // main
      // address: '0x3e976DE2366B8689505Dc6Fd6330bc9CfcAad5a9', // test
      symbol: 'Matic+',
      name: 'Matic+',
      image: '',

      tokenAmount: '0',
      USDBalance: '0.00',
      decimals: 18,
      allowance: '0',
    },
    wrappedToken: {
      address: '0xd6D66C581Aa64F935ccEC6fd8be9688C6874E081', // main
      // address: '0x511b317169F4cA57385724055c6aC061aFe51Dfc', // test
      symbol: 'Wmatic+',
      name: 'Wmatic+',
      image: '',

      tokenAmount: '0',
      USDBalance: '0.00',
      decimals: 18,
      allowance: '0',
    },
    vaultAddress: '0x4D57db99095A02046f36De562275C95eC2c5Af70', // main
    // vaultAddress: '0xB3bDD5fF79272e91dFdF1Cc0AceeC8639063CE98', // test
    strategyAddress: '',

    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    oracleId: 'dyson-rebaser-wmatic-matic+',
    status: 'active',
    platform: 'dyson',
    poolComposition: ['WMATIC', 'MATIC+'],
    extra: {
      addLiquidityUrl: 'addLiquidityUrl.com',
      buyTokenUrl: 'buyTokenUrl.com',
      strategyDescription:
        'This strategy harvests rewards and compounds them over time, exposing depositors to a higher APY. The compounding process is automated & gas fees are socialised between vault depositors.',
    },
  },
];
export const polygonSolidMintVaults: Array<StoredPool> = [
  // spSATIN
  {
    id: 'mint-sphere-spsatin',
    name: 'Mint spSATIN',
    walletToken: [
      {
        address: '0xdc342a4c1108a2a1f34a3036a40e04627b923067',
        name: 'VolatileV1 AMM - CASH/SATIN  ',
        symbol: 'vAMM-CASH/SATIN ',
        image: '',

        tokenAmount: '0',
        USDBalance: '0.00',
        decimals: 18,
        allowance: '0',
      },
    ],
    depositedToken: {
      address: '0x3Ceb4c9CB783a7e7761f26E66133f7D84690728f',
      name: 'Sphere veSATIN Staker (spSATIN)',
      symbol: 'spSATIN',
      image: '',

      tokenAmount: '0',
      USDBalance: '0.00',
      decimals: 18,
      allowance: '0',
    },
    vaultAddress: '0x3Ceb4c9CB783a7e7761f26E66133f7D84690728f',
    strategyAddress: '',
    bypassPeg: true,

    risks: [
      'COMPLEXITY_LOW',
      'BATTLE_TESTED',
      'IL_NONE',
      'MCAP_MEDIUM',
      'AUDIT',
      'CONTRACTS_VERIFIED',
    ],
    oracleId: 'spsatin',
    status: 'active',
    platform: 'dyson',
    poolComposition: ['SATIN'],
    extra: {
      addLiquidityUrl:
        'https://satin.exchange/liquidity/0xdc342a4c1108a2a1f34a3036a40e04627b923067',
      buyTokenUrl: 'https://satin.exchange/liquidity/0xdc342a4c1108a2a1f34a3036a40e04627b923067',
      sellTokenUrl: 'https://satin.exchange/swap',
      strategyDescription:
        'This strategy harvests rewards and compounds them over time, exposing depositors to a higher APY. The compounding process is automated & gas fees are socialised between vault depositors.',
    },
  },
];

// all polygon vaults exported
export const polygonVaults: Array<StoredPool> = [
  //...polygonDystopiaMaximizerVaults, // disable until audits done
  //...polygonBalancerMaximizerVaults, // disable until audits done
  ...polygonStrategyVaults,
  ...polygonUniV3Vaults,
  ...polygonSolidMintVaults,
  // ...polygonRebaserVaults,
  // ...polygonQSV3Vaults, // disable quick swap pools for later launch
];
