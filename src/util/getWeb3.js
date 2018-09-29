import Web3 from 'web3'
import { networks } from './network'
/*
* 1. Check for injected web3 either from metmask or mist
* 2. If metamask / mist create a new web3 instance and pass on result
* 3. Get networkId - Now we can check the user is connected to the right network to use our dApp
* 4. Get user account from metamask
* 5. Get user balance
*/
let getWeb3 = new Promise((resolve, reject) => {
  // Check for injected web3 either from metamask or mist
  var web3js = window.web3
  if (typeof web3js !== 'undefined') {
    var web3 = new Web3(web3js.currentProvider)
    resolve({
      injectedWeb3: web3.isConnected(),
      web3 () {
        return web3
      }
    })
  } else {
    reject(new Error('You Need Metamask / Mist'))
  }
})
  .then(result => {
    return new Promise((resolve, reject) => {
      // Retreive Network ID
      result.web3().version.getNetwork((err, networkId) => {
        if (err) {
          reject(new Error('Unable to retreive your network ID'))
        } else {
          if (!(networkId in networks)) {
            reject(new Error('Unknown Network'))
          } else {
            // assign networkID property to our result
            const networkName = networks[networkId]
            result = Object.assign({}, result, { networkName, networkId })
            resolve(result)
          }
        }
      })
    })
  })
  .then(result => {
    return new Promise((resolve, reject) => {
      // Retreive address user
      result.web3().eth.getCoinbase((err, coinbase) => {
        if (err) {
          reject(new Error('Unable to retreive your address'))
        } else {
          // if metamask is locked
          if (typeof coinbase === 'undefined' || !coinbase) {
            reject(new Error('Your metamask is locked, unlock it first'))
          } else {
            // assign address property to our result
            result = Object.assign({}, result, { coinbase })
            resolve(result)
          }
        }
      })
    })
  })
  .then(result => {
    return new Promise((resolve, reject) => {
      // Retreive balance user
      result.web3().eth.getBalance(result.coinbase, (err, balance) => {
        if (err) {
          reject(new Error(`Unable to retreive the balance from address: ${result.coinbase}`))
        } else {
          result = Object.assign({}, result, { balance })
          resolve(result)
        }
      })
    })
  })

export default getWeb3
