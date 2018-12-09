<template>
    <div>
        <ul>
            <li>
                <!-- 第一种写法 -->
                <router-link to="/"><span>helloworld</span></router-link>
                <!-- 第二种写法 -->
                <!-- <router-link :to="urlData.helloworld"><span>helloworld</span></router-link> -->
                <!-- 第三种写法 -->
                <!-- <router-link :to="{path:'/'}"><span>helloworld</span></router-link> -->
            </li>
            <li>
                <!-- 第一种写法 -->
                <router-link to="/bao"><span>hellobao</span></router-link>
                <!-- 第二种写法 -->
                <!-- <router-link :to="urlData.hellobao">hellobao</router-link> -->
                <!-- <router-link :to="{path:'/bao'}"><span>helloworld</span></router-link> -->
                <!-- 第三种写法 -->
                <!-- <router-link :to="{path:urlData.hellobao}"><span>hellobao</span></router-link> -->
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:'navlist',
    data(){
        return {
            urlData:{
                helloworld:"/",
                hellobao:"/bao"
            }
        }
    }
}
</script>
<style scoped>
   ul li{
       display:inline-block;
       /* text-decoration:none; */
       margin-right:50px;
       background:#f00;
       color:#fff;
       width:100px;
       height:30px;
       line-height:30px;

   }
   ul{
       list-style:none;
       text-align:center;
   }
   a{
       text-decoration:none;
       color:#fff;
   }
</style>


