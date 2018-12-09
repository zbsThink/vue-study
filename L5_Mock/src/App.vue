<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <HelloWorld/> -->
    <!-- <Axiop/> -->
    <Mok/>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import Mok from './components/mok'
export default {
  name: 'App',
  components: {
    HelloWorld,
    Mok
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
