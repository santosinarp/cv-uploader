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

          <div v-if="web3Error.error_message == 'metamask_locked'">
            <metamask-locked></metamask-locked>
          </div>

          <div v-if="web3Error.error_message == 'metamask_disabled'">
            <metamask-disabled></metamask-disabled>
          </div>

          <div v-if="signature.requestSign == '1'">
            <metamask-sign></metamask-sign>
          </div>

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
import AuthService from '@/services/AuthService'
import MetamaskDisabled from '@/components/MetamaskDisabled'
import MetamaskLocked from '@/components/MetamaskLocked'
import MetamaskSign from '@/components/MetamaskSign'

export default {
  data () {
    return {
      metamaskImg: require("../assets/metamask.png")
    }
  },

  components: {
    MetamaskDisabled,
    MetamaskLocked,
    MetamaskSign
  },

  computed: {
    web3 () {
      return this.$store.state.web3
    },
    web3Error () {
      return this.$store.state.web3Error
    },
    signature () {
      return this.$store.state.signature
    }
  },

  async created () {
  
  },
  
}
</script>
