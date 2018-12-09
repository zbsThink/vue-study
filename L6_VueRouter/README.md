1.安装
npm install --save vue-router
2.引入
import VueRouter from 'vue-router'
Vue.use(VueRouter)
3.配置路由文件
在main.js中进行以下操作(最好新建一个route文件)
var router = new VueRouter({
   routes:[{
    //根路径
     path:'/',
     component:HelloWorld
   }]
})
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  //注入router
  router
})
4.视图加载的位置
<router-view></router-view>
5.跳转（导航）

