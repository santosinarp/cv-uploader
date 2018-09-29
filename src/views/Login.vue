<template>
  <div>
      <app-login></app-login>
  </div>
</template>

<script>
import AppLogin from '@/components/AppLogin.vue'

export default {
  beforeCreate () {
    console.log('registerWeb3 Action dispatched from this page')
    this.$store.dispatch('registerWeb3')
  },
  components: {
    AppLogin
  }
}
</script>
