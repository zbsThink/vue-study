<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld/> -->
    <!-- <MyComponent/> -->
    <!-- <Parent/> -->
    <Big/>
    <!-- <Anim /> -->
    <!-- <Hello/> -->
    <!-- <Fs/> -->
    <!-- <Parent1/> -->
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld'
import MyComponent from './components/myComponent'
import Parent from './components/slots/parent'
import Parent1 from './components/songparent/parent'
import Big from './components/comkeep/big'
import Anim from './components/animate/animate'
import Fs from './components/fatherSon'
export default {
  name: 'App',
  components: {
    HelloWorld,
    MyComponent,
    Parent,
    Big,
    Anim,
    Fs,
    Parent1
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
