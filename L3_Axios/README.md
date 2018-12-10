### Axios
    中文：https://www.kancloud.cn/yunye/axios/234845
    github:https//github.com/axios/axios
    1. 安装
       npm install axios
    2. 引入加载
       import Axios from "axios"
       Vue.prototype.$axios = Axios
    3. 请求
        * get请求：
            this.$axios("http://www.wwtliu.com/sxtstu/news/newsdetails.php",{
            params:{
             type:"junshi",
             count:30
            }
        })
        .then(res=>{
          console.log(res.data);
        })
        .catch(error=>{
          console.log(error);
        })
       * post请求
         第一种格式：form-data:?name=iwen&age=20
         第二种格式：x-www-form-urlencoded:{name:'iwen',age:20}
         注意：axios请求接受的post发请求的参数的格式是form-data格式
               报错解决方法：一般来说我们写的都是第二种格式此时我们可以通过引入一个qs库，然后调用其中的stringify方法将其转换为第二种格式
         this.$axios.post('http://www.wwtliu.com/sxtstu/blueberrypai/login.php',qs.stringify({
            user_id:"iwen@qq.com",
            password:"iwen123",
            verification_code:"crfvw"
        }))
        .then(res=>{
            console.log(res)
        })
        .catch(error=>{
            console.log(error)
        })
    4. 全局的axios默认值
    ```
    axios.defaults.baseURL = 'https://api.example.com';
    axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
    axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';
    ```
    
    5. 拦截器
    //主要是在数据传过来进行处理前，对数据进行判断是否正确或者进行参数转换
    // 添加请求拦截器
    
    ```
    Axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    if(config.method =='post'){
     config.data = qs.stringify(config.data)
    }
    ```
    ```
   //拦截是发生在then和catch之前的，从这个打印结果就可以看出
   console.log(config)
   return config;
   }, function (error) {
   // 对请求错误做些什么
   return Promise.reject(error);
   });
    ```
    ```
  // 添加响应拦截器
  Axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  return response;
 }, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
 });
   ```
   
6. 跨域处理
   1. 修改config index.js文件
   ```
   proxyTable: {
      "/api":{
        target:"http://localhost:3000",
        changeOrigin:true,
        pathRewrite:{
          '^/api':''
        }
      }
    }
   ```
  2. 添加host
   在main.js中添加`Vue.prototype.HOST = '/api'`
  3. 定义一个url放入$axios中
  var url = this.HOST+'/login'
注意：此种跨域解决方案，只能适用于测试阶段，打包的时候，不会具备服务器不能跨域了，后端解决

### Mock 数据模拟
    1. 自己创建json数据，使用get请求形式访问数据
       优点:方便，快捷
       缺点：只能存在get请求
    2. 在项目中集成服务器，模拟各种接口
       优点：模拟真实线上环境
       缺点：增加开发成本
    3. 直接使用线上数据
       优点：真实
       缺点：不一定每个项目都存在
    4. 数据模拟库mock.js
    网址：https://mock.js.com
    **具体语法见参考文档**
      
