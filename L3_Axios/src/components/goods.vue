<template>
    <div>
       <ul>
           <li v-for="good in goods" :key="good.id">
               <img :src="good.img" alt="">
               <p>{{good.title}}</p>
           </li>
       </ul>
       <!-- <img src="../assets/hot_1.jpg" alt="">  -->
    </div>
</template>
<script>
import ultils from '../lib/ultils'
export default {
    name:"",
    data(){
        return {
         goods:[]
        }
    },
    created(){
       this.$http.get('/api/goods')
       .then(res=>{
        //    console.log(res.body.data)
        // this.goods = res.body.data
        let goods = ultils.reSrc(res.body.data,'jpg')
        this.goods = goods
       })
       .catch(error=>{
           console.log(error);
       })
    }
}
</script>
<style scoped>
li{
    list-style-type:none;
    float:left;
    width:100px;
    height:100px;
    border:1px solid #f00;
    margin-left:10px;

}
img{
    width:100px;
    height:100px;
}
</style>
