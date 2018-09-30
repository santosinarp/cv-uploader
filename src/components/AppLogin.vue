<template>
  <div>
    <v-card>
      <v-card-text v-if="web3.coinbase">
        <v-layout row wrap>
          <v-flex xs12>
            <v-flex xs12 md4 offset-md8>
              <p class="text-lg-right">
                <v-icon color="green darken-4">check_circle</v-icon> &nbsp;{{ web3.networkName }} &nbsp; |
                <v-icon>person_outline</v-icon> &nbsp;{{ web3.coinbase.replace(web3.coinbase.substring(6,34), "...") }}
              </p>
            </v-flex>
          </v-flex>
        </v-layout>        
      </v-card-text>
    </v-card>
    <v-container>
      <v-flex xs12 md8 offset-md2>
        <v-card>
          <v-layout v-if="web3Error.error_message == 'metamask_locked'" row wrap>
            <v-flex xs12 md8>
              <v-card-text class="text-xs-left">
                <h1 class="display-1 font-weight-light" style="color:#252d6b">Your Metamask is Locked</h1>
                <br/>
                <v-flex xs12 md8>
                  <p class="title font-weight-thin" style="color:#5a6872">Please open your metamask and follow the instructions to unlock it</p>
                </v-flex>
              </v-card-text>
            </v-flex>
            <v-flex xs4>
              <img alt="Metamask logo" :src="metamaskImg" />
            </v-flex>
          </v-layout>

          <v-layout v-if="web3Error.error_message == 'metamask_disabled'"  row wrap>
            <v-flex xs12 md8>
              <v-card-text class="text-xs-left">
                <h1 class="display-1 font-weight-light" style="color:#252d6b">You Need to install Metamask for Login</h1>
                <br/>
                <v-flex xs12 md8>
                  <p class="title font-weight-thin" style="color:#5a6872">How to install metamask? <a target="_blank" href="https://metamask.io/">Click Here</a></p>
                </v-flex>
              </v-card-text>
            </v-flex>
            <v-flex xs4>
              <img alt="Metamask logo" :src="metamaskImg" />
            </v-flex>
          </v-layout>
        </v-card>
      </v-flex>
      <!-- <p>Metamask: {{ web3.isInjected}} </p>
      <p>Network ID: {{ web3.networkId}} </p>
      <p>Network Name: {{ web3.networkName}} </p>
      <p>Account: {{ web3.coinbase}} </p>
      <p>Balance: {{ web3.balance}} </p> -->
    </v-container>
  </div>
</template>


<script>
export default {
  data () {
    return {
      metamaskImg: require("../assets/metamask.png")
    }
  },

  computed: {
    web3 () {
      return this.$store.state.web3
    },
    web3Error () {
      return this.$store.state.web3Error
    }
  }
}
</script>
