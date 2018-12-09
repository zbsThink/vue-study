<template>
    <div>
       父亲:
       {{info}}
       {{getCount}}
       <button @click="sendSon" title="点击即可发送信息给儿子">点击</button>
       <Child :title="msg" @info="handlerMsg"/>
       
    </div>
</template>
<script>
import Child from './Child'
export default {
    name:"parent",
    data(){
        return {
          msg:"爸爸爸爸，我是你儿子",
          info:""
        }
    },
    components:{
        Child
    },
    methods:{
        handlerMsg(data){
            this.info = data
        },
        sendSon(){
            this.msg = "爸爸给儿子的信息"
        }
       
    },
     computed:{
            getCount(){
                //调用state获取count的值
                // return this.$store.state.count;
                //关于getter属性的使用是添加过滤规则
                 return this.$store.getters.getState
            }
        }
}
</script>
<style scoped>

</style>


