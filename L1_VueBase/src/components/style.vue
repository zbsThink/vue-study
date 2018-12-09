<template>
    <div>
        <p v-bind:class="styleObj" :id="ms">haha</p>
        <p :class="[demo1,demo2]">你好</p>
        <p :class="[{active:isActive},'info-'+id]"></p>
        <ul>
            <li :class="[{active:index%2==0},'info-'+index]" v-for="(name,index) in names" :key="name.id">{{name}}-{{index}}</li>
        </ul>
        <div>
            <p :style="stob">我是谁，我在那？我活着是为了什么？世界的本质是什么？</p>
        </div>
        <VueSxtCounter/>
    </div>
</template>
<script>
import VueSxtCounter from 'vxt'
export default {
    name:"style",
    data(){
        return{
            // 第一种方式写在对象里面
          styleObj:{
              active:true ,
              'demo':true
              },
        // 第二种方式运用computed属性
        isActive:true,
        isDemo:false,
        // 第三种形式数组形式
        demo1:"demo11",
        demo2:"demo12",
        // 第四种形式数组语法中使用对象语法
        id:10,
        names:['iswen','ice','france','Mary','Tom'],
        //内联样式
        stob:{
           color:"red",
           fontSize:"30px"
        },
        ms:['m1']
        }
    },
    computed:{
        // styleObj(){
        //     return {
        //         active:this.isActive,
        //         "demo":this.isDemo
        //     }
        // }
    },
    components:{
        VueSxtCounter
    }
}
</script>
<style>
  .active{
      color:#f00;
 
  }
    ul{
       width:109px;
       /* margin:0 auto; */
   }  
  li{
       width:109px;
      height:40px;
      line-height:40px;
      text-align:center;
      background:#eaeaea;
      list-style:none;
      margin-bottom:5px;
     

  }
  .demo11{
      color:#0f0;
  }
  #m1{
      font-size:50px;
      color:#00f;
  }
</style>


