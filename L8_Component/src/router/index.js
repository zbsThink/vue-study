import Vue from 'vue'
import Router from 'vue-router'
import Button from '@/components/Button'
import Lunbo from '@/components/lunbo'
import HelloSwiper from '@/components/HelloSwiper'
import HelloSwiper2 from '@/components/HelloSwiper2'
import LazyLoad from '@/components/lazyload'
import HelloRem from '@/components/HelloRem'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloRem',
      component:HelloRem
    },
    {
      path:'/lunbo',
      name:'Lunbo',
      component:Lunbo
    }
  ]
})
