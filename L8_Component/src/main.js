// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import { Button,Carousel,CarouselItem } from 'element-ui';
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import 'swiper/dist/js/swiper.min.js'
import VueLazyload from 'vue-lazyload'
Vue.use(VueLazyload)
Vue.use(Button)
Vue.use(Carousel);
Vue.use(CarouselItem);
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
