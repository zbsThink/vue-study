<template>
    <div>
       <p>图片延迟加载</p>
       <img v-lazy="imgObj"/>
       <img v-lazy="imgUrl"/> 
    </div>
</template>
<script>
export default {
    name:'lazy',
    data(){
        return {
            //引入图片如果是在js中，必须require进来
          imgObj: {
             src:"http://www.wwtliu.com/sxtstu/blueberrypai/indexImg/banner1.jpg",
             error: require("../assets/error.jpg"),
             loading:require("../assets/loadding.gif")
          },
          imgUrl:'http://www.wwtliu.com/sxtstu/blueberrypai/indexImg/banner2.jpg'
        }
    }
}
</script>
<style scoped>

</style>

