<template>
  <div id="app">
    <img src="./assets/logo.png">
    <!-- <HelloWorld/> -->
    <NavList/>
    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import NavList from './components/NavList'
export default {
  name: 'App',
  components: {
    // HelloWorld
    NavList
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
