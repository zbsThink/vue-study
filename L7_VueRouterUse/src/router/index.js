import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/index'
import Course from '@/components/course'
import Express from '@/components/express'
import Java from '@/components/pages/java'
import Web from '@/components/pages/web'

Vue.use(Router)

export default new Router({
  mode:"history",
  linkActiveClass:"active",
  routes: [
    {
      path: '/',
      name: 'Index',
      component:Index
    },
    {
      path:'/course',
      name:'course',
      component:Course,
      redirect:'/course/java',
      children:[{
        path:'java',
        name:'java',
        component:Java
      },{
        path:'web',
        name:'web',
        component:Web
      }]
    },
    {
      path:'/express/:count/:type',
      name:'express',
      component:Express
    }
    
  ]
})
