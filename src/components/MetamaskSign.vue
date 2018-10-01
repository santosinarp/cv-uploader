<template>
<div>
  <v-layout row wrap>
    <v-flex xs12 md8>
      <v-card-text class="text-xs-left">
        <h1 class="display-1 font-weight-light" style="color:#252d6b">Sign In with your wallet</h1>
        <br/>
        <v-flex xs12 md8>
          <p class="body-2 font-weight-thin" style="color:#5a6872">
            Once you have digitally signed the verification code with your MetaMask wallet, your wallet will allow you to single-sign into your BTM account without the need for a dedicated username and password combination. This signing operation has no cost associated and can be completed by clicking on the «SIGN» button in your MetaMask.
          </p>
        </v-flex>
      </v-card-text>
    </v-flex>
    <v-flex xs4>
      <img alt="Metamask logo" :src="metamaskImg" />
    </v-flex>
  </v-layout>

  <v-layout row wrap>
    <div class="pl-4 pr-4 pb-4">
      <v-flex xs12 md12>
        <v-alert
            :value="true"
            color="info"
            icon="info"
            outline
          >
            <span class="caption">If MetaMask does not open automatically, please check that the browser extension does not have an outstanding request by clicking on its icon.</span>
        </v-alert>
      </v-flex>
    </div>
  </v-layout>
</div>
</template>

<script>
export default {
  data () {
    return {
      metamaskImg: require("../assets/metamask.png")
    }
  },
}
</script>

<style scoped>
.application--wrap {
  min-height: 0vh !important
}
</style>


