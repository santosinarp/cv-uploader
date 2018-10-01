import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import getWeb3 from '../util/getWeb3'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state,
  mutations: {
    registerWeb3Instance (state, payload) {
      console.log('registerWeb3Instance Mutation being executed', payload)
      let result = payload
      let web3Copy = state.web3
      web3Copy.coinbase = result.coinbase
      web3Copy.networkId = result.networkId
      web3Copy.balance = parseInt(result.balance, 10)
      web3Copy.isInjected = result.injectedWeb3
      web3Copy.web3Instance = result.web3
      web3Copy.networkName = result.networkName
      state.web3 = web3Copy
    },
    registerErrorWeb3 (state, err) {
      console.log('Error on register web3, mutation web3 errors being executed', err)
      state.web3Error.error_message = err
    },

    /* mutation to change the value of requestSign (boolean (1/0))
    * if false, means that no request sign, and vice versa
    */
    sendRequestSignInstance (state, requestSign) {
      // remember that value of requestSign and signed must be opposite
      state.signature.requestSign = requestSign
      if (requestSign) {
        var signed = 0
      } else {
        signed = 1
      }
      state.signature.signed = signed
    }
  },
  actions: {
    registerWeb3 ({ commit }) {
      console.log('registerWeb3 Action being executed')
      return new Promise((resolve) => {
        getWeb3.then(result => {
          console.log('committing result to registerWeb3Instance mutation')
          resolve(commit('registerWeb3Instance', result))
        }).catch(e => {
          resolve(commit('registerErrorWeb3', e.message))
          console.log('error in action registerWeb3', e)
        })
      })
    },
    sendRequestSign: (context, requestSign) => {
      return new Promise((resolve) => {
        resolve(context.commit('sendRequestSignInstance', requestSign))
      })
    }
  }
})
