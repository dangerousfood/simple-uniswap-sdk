export enum ChainId {
  MAINNET = 1,
  ROPSTEN = 3,
  RINKEBY = 4,
  GÖRLI = 5,
  KOVAN = 42,
  BASEMAINNET = 8453,
  SEPOLIA = 11155111,
}

export const ChainNames = new Map<number, string>([
  [ChainId.MAINNET, 'mainnet'],
  [ChainId.ROPSTEN, 'ropsten'],
  [ChainId.RINKEBY, 'rinkeby'],
  [ChainId.GÖRLI, 'görli'],
  [ChainId.KOVAN, 'kovan'],
  [ChainId.SEPOLIA, 'sepolia'],
  [ChainId.BASEMAINNET, 'basemainnet'],
]);
