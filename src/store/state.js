const state = {
  web3: {
    isInjected: false,
    web3Instance: null,
    networkId: null,
    networkName: null,
    coinbase: null,
    balance: null,
    error: null
  },
  contractInstance: null,
  web3Error: {
    error_message: null
  },
  signature: {
    // to determine wether user has active request to be signed or not
    requestSign: false,
    // to determine wether user has active signature or not
    signed: false
  }
}
export default state
