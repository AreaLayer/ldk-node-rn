export const mockLdkNodeModule = {
  createConfig: jest.fn(),
  fromConfig: jest.fn(),

  setEsploraServer: jest.fn(),
  setEntropySeedPath: jest.fn(),
  setEntropySeedBytes: jest.fn(),
  setEntropyBip39Mnemonic: jest.fn(),
  setGossipSourceP2p: jest.fn(),
  setGossipSourceRgs: jest.fn(),
  setStorageDirPath: jest.fn(),
  setNetwork: jest.fn(),
  setListeningAddress: jest.fn(),
  build: jest.fn(),

  start: jest.fn(),
  stop: jest.fn(),
  syncWallets: jest.fn(),
  nodeId: jest.fn(),
  listeningAddress: jest.fn(),
  newOnchainAddress: jest.fn(),
  sendToOnchainAddress: jest.fn(),
  sendAllToOnchainAddress: jest.fn(),
  spendableOnchainBalanceSats: jest.fn(),
  totalOnchainBalanceSats: jest.fn(),
  connect: jest.fn(),
  disconnect: jest.fn(),
  connectOpenChannel: jest.fn(),
  closeChannel: jest.fn(),
  sendPayment: jest.fn(),
  sendPaymentUsingAmount: jest.fn(),
  sendSpontaneousPayment: jest.fn(),
  receivePayment: jest.fn(),
  receiveVariableAmountPayment: jest.fn(),
  listPayments: jest.fn(),
  listPeers: jest.fn(),
  listChannels: jest.fn(),
  payment: jest.fn(),
  removePayment: jest.fn(),
  signMessage: jest.fn(),
  verifySignature: jest.fn(),
  updateChannelConfig: jest.fn(),

  createEntropyMnemonic: jest.fn(),
};

jest.mock('react-native', () => ({
  NativeModules: { LdkNodeRnModule: mockLdkNodeModule },
}));