<template>
  <v-layout row wrap>
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
