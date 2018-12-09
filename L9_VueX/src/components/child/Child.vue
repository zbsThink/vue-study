<template>
    <div>
       儿子:
       {{title}}
       <button @click="sendMsg">发送</button>
       <button @click="min">减减</button>
    </div>
</template>
<script>
export default {
    name:"child",
    data(){
        return {
           info:"嗯嗯嗯"
        }
    },
   props:{
       title:{
           type:String,
           default:""
       }
   },
   methods:{
       sendMsg(){
           this.$emit("info",this.info)
        
       },
       min(){
        //    this.$store.commit("decrement")
        this.$store.dispatch("decrement");
       }
   }
}
</script>
<style scoped>

</style>


