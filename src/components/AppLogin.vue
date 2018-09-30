<template>
  <div>
    <v-card>
      <v-card-text>
          <p v-if="web3.coinbase" class="text-lg-right"><v-icon>person_outline</v-icon> &nbsp;{{ web3.coinbase.replace(web3.coinbase.substring(6,34), "...") }}</p>
      </v-card-text>
    </v-card>
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
