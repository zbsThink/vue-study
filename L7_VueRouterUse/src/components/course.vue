<template>
    <div>
        <Navlist/>
       <div class="left">
        课程页面
         <ul>
            <li><router-link to="/course/java">java</router-link></li>
            <li><router-link to="/course/web">前端</router-link></li>
            <li>Android</li>
         </ul>
       </div>
       <div class="right">
           <!-- 视图区域 -->
           <router-view></router-view>
       </div>
    </div>
</template>
<script>
import Navlist from './NavList'
export default {
    name:'course',
    data(){
         return {

         }
    },
    components:{
       Navlist
  }
}
</script>
<style scoped>
   .left,.right{
       float:left;
       border:1px solid #000;
   }
   .right{
       margin-left:50px;
   }
</style>

