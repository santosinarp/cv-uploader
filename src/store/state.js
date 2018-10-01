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
    requestSign: false
  }
}
export default state
