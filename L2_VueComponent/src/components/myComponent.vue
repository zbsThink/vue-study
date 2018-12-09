<template>
    <div>
        父亲<br>
        <input type="text" v-model="lifemsg">
        <Son  :da="msg" :lifemsg="lifemsg" :num="num" :objectdata="myobject"/>
        <button @click="changeMsg">按钮</button>
        </div>
</template>
<script>
import Son from "./son"
export default {
    name:"father",
    data(){
        return{
        // 动态传递数据第一种
          msg:"我是动态的数据",
          //动态传递数据第三种使用v-model
          lifemsg:"hfhf",
          num:10,
          myobject:{
              name:'zbs',
              age:22
          }
        }
    },
    components:{
        Son
    },
    methods:{
        // 动态传递数据第二种
        changeMsg(event){
            this.msg = "我是修改之后的数据"
        }
    }
}
</script>
<style scoped>
    
</style>

