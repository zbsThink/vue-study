<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <HelloWorld/> -->
    <Jsserver/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Jsserver from './components/jsserver'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Jsserver
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
  margin-top: 60px;
}
</style>
