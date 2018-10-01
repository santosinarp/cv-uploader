<template>
  <div>
    <div id="loading-img" :style="{ display: displayLoadingImage }"></div>
    <div :style="{ opacity: opacity }">
      <app-login></app-login>
    </div>
  </div>
</template>

<script>
import AppLogin from '@/components/AppLogin.vue'
import Web3 from 'web3'
import AuthService from '@/services/AuthService'

export default {
  data () {
    return {
      opacity: 1,
      displayLoadingImage: 'none'
    }
  },
  async beforeCreate () {
    console.log('registerWeb3 Action dispatched from this page')
    const web3js = window.web3
    
    if(typeof web3js !== 'undefined') {
      this.opacity = 0.4,
      this.displayLoadingImage = 'block'
  
      const dispatchRegisterWeb3 = await this.$store.dispatch('registerWeb3')
      try{
        let responseUserDetail = await AuthService.getUserDetail(this.$store.state.web3.coinbase)
        if(responseUserDetail.data.returns.length) {
          const nonce = responseUserDetail.data.returns[0].nonce
          const publicAddress = responseUserDetail.data.returns[0].public_address

          // send request sign to metamask
          this.$store.dispatch('sendRequestSign', 1)

          // wait until user sign or cancel
          const signature = await this.signNonce(publicAddress, nonce)
          
          // if sign, then authenticate the signature 
          // if cancel then automatically throw to catch
          const doAuthenticate = await this.authenticate(signature.publicAddress, signature.signature)

          if(typeof doAuthenticate.data !== 'undefined') {
            if(doAuthenticate.data.returns === 'signed') {
              // if user signed
              alert('Success signed')

            }
          } else {
            alert('Cannot authenticate your credentials')
          }
        } else {
          // if user not exists then create the users
          // and if coinbase != null ( metamask is unlocked )
          if(this.$store.state.web3.coinbase){
            this.registerUser()
            location.reload()
          }
        }
      } catch (err) {
        if(err.message === 'Error: MetaMask Message Signature: User denied message signature.'){
          // check if user cancel the sign
          alert('You have cancelled the signature')
        }else if(err.message === 'Request failed with status code 401') {
          // wrong signature
          alert('Your signature is not match')
        }else {
          alert('Oops... Something went wrong while retreiving your data')
        }
      }

      // check change account metamask
      var account = web3.eth.accounts[0];
      setInterval(() => {
        if (web3js.eth.accounts[0] !== account) {
          // if change
          location.reload()
        } else {
          this.opacity = 1,
          this.displayLoadingImage = 'none'
        }
      }, 1000);
    } else {
      // If metamask has not installed yet
      this.$store.dispatch('registerWeb3')
    }
  },
  methods : {
    async registerUser () {
      try{
        let responseRegisterUser = await AuthService.registerUser(this.$store.state.web3.coinbase)
        return responseRegisterUser
      } catch(err) {
        return err
      }
    },

    signNonce(publicAddress, nonce) {
      return new Promise((resolve, reject) => {
        // Send signature request
        web3.personal.sign(web3.fromUtf8(`Please sign this your one time password: ${nonce}`), 
        publicAddress,
        (err, signature) => {
          if(err) return reject(err)
          return resolve({publicAddress, signature})
        });
      })
    },

    authenticate(publicAddress, signature) {
      return new Promise(async (resolve, reject) => {
        try{
          let responseAuthenticate = await AuthService.authenticate(publicAddress, signature)

          // if signature wrong, then throw to catch
          // if signature true, then change the MetamaskSign state
          this.$store.dispatch('sendRequestSign', 0)
          return resolve(responseAuthenticate)
        } catch (err) {
          return reject(err)
        }
      })
    }

  },
  components: {
    AppLogin
  },
}
</script>
