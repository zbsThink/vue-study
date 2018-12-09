<template>
    <div>
        small1
        <button @click="changeMsg">改变信息</button>
        <p>{{msg}}</p>
    </div>
    
</template>
<script>
export default {
    name:"small1",
    data(){
        return {
           msg:"我是原来的信息"
        }
    },
    methods:{
        changeMsg(){
            this.msg = "我是新的信息"
        }
    }
}
</script>
<style scoped>
  div{
      border:1px solid #f00;
      width:200px;
      height:100px;
      margin:0 auto;
      
  }
</style>