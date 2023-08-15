<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <GoogleMap/>
  <HelloWorld msg="Welcome to Your Vue.js App"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import GoogleMap from "@/components/GoogleMap.vue";

export default {
  name: 'App',
  components: {
    GoogleMap,
    HelloWorld
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
