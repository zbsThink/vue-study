import Vue from 'vue'
import VueRouter from 'vue-router'
import HelloWorld from '../components/HelloWorld'
import HelloBao from '../components/Hellobao'

Vue.use(VueRouter)





export default new VueRouter({
    routes:[{
      path:'/',
      component:HelloWorld
    },{
      path:'/bao',
      component:HelloBao
    }]
 })