<template>
  <v-layout row wrap>
    <v-flex xs12 md8>
      <v-card-text class="text-xs-left">
        <h1 class="display-1 font-weight-light" style="color:#252d6b">You Need Metamask for Login</h1>
        <br/>
        <v-flex xs12 md8>
            <p class="subheading font-weight-thin" style="color:#5a6872">We don't detect metamask on your browser. To know How to install metamask, refer to this site <a target="_blank" href="https://metamask.io/">Click Here</a></p>
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


