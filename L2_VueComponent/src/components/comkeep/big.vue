<template>
    <div>
        big
        <!-- 动态组件 -->
        <!-- 不规范写法 -->
        <!-- {{currentView}} -->
        <!-- 规范写法 -->
        <!-- <component :is="currentView"></component> -->
        <!-- keep-alive用法 -->
        <keep-alive>
            <component :is="currentView"></component>
        </keep-alive>
        <button @click="changeView">切换small1</button>
        <button @click="changeView">切换samll2</button>
        <VueSxtCounter/>
    </div>
</template>
<script>
import Small1 from './small1'
import Small2 from './small2'
import VueSxtCounter from 'vxt'
export default {
    name:"big",
    data(){
        return {
          currentView:"Small1"
        }
    },
    components:{
        Small1,
        Small2,
        VueSxtCounter
    },
    methods:{
        changeView(){
           if(this.currentView==='Small1'){
               this.currentView = "Small2"
           }
          else{
               this.currentView = "Small1"
          }
        }
    }
}
</script>
<style scoped>

</style>


