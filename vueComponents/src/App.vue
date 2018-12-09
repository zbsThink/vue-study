<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld/> -->
    <Counter :max="max" :min="min"/>
  </div>
</template>

<script>
import Counter from './components/Counter'

export default {
  name: 'App',
  data(){
    return {
      max:10,
      min:1
    }
  },
  components: {
    Counter
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
