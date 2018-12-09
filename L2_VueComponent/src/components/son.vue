<template>
    <div>
        <!-- 儿子{{da}}-{{lifemsg}}-{{num*2}}-{{objectdata.name}} -->
        <p>{{data}}</p>
        <p>{{remsg}}</p>
    </div>
</template>
<script>
export default {
    name:"son",
    data(){
        return{
         
        }
    },
    // props:["da","lifemsg"]
    props:{
        data:String,
        remsg:String,
        //多种数据类型写法例子da
        da:[String,Number],
        //必选项必须传值
        lifemsg:{
            type:String,
            required:true
        },
        // 数据默认值(默认值只能是number类型或者string类型如果是Array或者Object那么default就只能是function了)
        num:{
            type:Number,
            default:5
        },
        //对象设置默认值
        objectdata:{
             type:Object,
             default:function(){
                 return {
                     name:"未知",
                     age:20

                 }
             }
        }
    }
}
</script>
<style scoped>
    
</style>