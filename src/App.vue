<template>
  <div id="app">
    <v-app>
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <Navbar/>
    <v-content style="padding-bottom:160px;">
      <router-view/>
    </v-content>
    <Footer/>
    </v-app>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#loading-img {
	background: url("./assets/loading/loading.gif") center center no-repeat;
    display: none;
    height: 300px;
    width: 300px;
    position: absolute;
    top: 20%;
    left: 1%;
    right: 1%;
    margin: auto;
}
</style>
