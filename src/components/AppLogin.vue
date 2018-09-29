<template>
  <div>
    <v-container>
      <p>Metamask: {{ web3.isInjected}} </p>
      <p>Network ID: {{ web3.networkId}} </p>
      <p>Network Name: {{ web3.networkName}} </p>
      <p>Account: {{ web3.coinbase}} </p>
      <p>Balance: {{ web3.balance}} </p>
    </v-container>
  </div>
</template>


<script>
export default {
  computed: {
    web3 () {
      return this.$store.state.web3
    }
  }
}
</script>
