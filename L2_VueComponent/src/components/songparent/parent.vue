<template>
    <div>
        <!-- 子传父 -->
      <p>父组件</p>
       <input type="text" v-model="num">
      <Child @sendmsg="getMsg" :num="getNum"/>
      {{info}}
    </div>
</template>
<script>
import Child from "./child"
export default {
    name:"parent",
    data(){
        return {
          info:"",
          num:10
        }
    },
    components:{
        Child
    },
    computed:{
        getNum(){
            return this.num-0;
        }
    },
    methods:{
        getMsg(data){
            this.info = data;
        }
    }
}
</script>
<style>

</style>