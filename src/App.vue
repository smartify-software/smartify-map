<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <GoogleMap/>
</template>

<script>
import GoogleMap from "@/components/GoogleMap.vue";

export default {
  name: 'App',
  components: {
    GoogleMap,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
