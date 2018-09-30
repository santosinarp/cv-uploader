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

export default {
  data () {
    return {
      opacity: 0.4,
      displayLoadingImage: 'block'
    }
  },
  beforeCreate () {
    console.log('registerWeb3 Action dispatched from this page')
    const web3js = window.web3
    
    if(typeof web3js !== 'undefined') {
      this.$store.dispatch('registerWeb3')

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
    }
  },
  components: {
    AppLogin
  }
}
</script>
