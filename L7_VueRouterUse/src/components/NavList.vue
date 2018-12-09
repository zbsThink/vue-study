<template>
    <div>
        <ul>
            <li><router-link to="/" exact>首页</router-link></li>
            <li><router-link to="/course">课程</router-link></li>
            <!-- <li><router-link to="/express">专家</router-link></li> -->
            <!-- 常用的参数传递方式 -->
            <li><router-link :to="{name:'express',params:{count:100,type:obj}}">专家</router-link></li>
            <!-- 带问号的参数传递必须采用函数模式太过复杂不建议使用 -->
            <!-- <li><router-link :to="{path:'/express',query:{count:100}}">专家</router-link></li> -->
        </ul>
    </div>
</template>
<script>
export default {
    name:'navlist',
    data(){
         return {
             obj:{
                 name:'zbs'
             }
         }
    }
}
</script>
<style scoped>
    div{
        width:100%;
        height:50px;
        /* line-height:60px; */
        background:#f1f1f1;
    }
    ul{
        list-style:none;
    }
    li{
        float:left;
        margin:0 20px;
    }
    a{
        text-decoration:none;
        background:#f40;
        color:#fff;
        display:block;
        width:100px;
        height:50px;
        line-height:50px;
        text-align:center;
    }
</style>