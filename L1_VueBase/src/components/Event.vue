<template>
    <!-- 在template中只能存在一个跟组件 -->
    <div class="event">
        <ul>
            <li v-on:click.once="getItemInfo(index,$event)" v-for="(name,index) in names" :key="index">
                {{name}}
            </li>
        </ul>
        <input type="text" v-on:keyup.enter='getkeyInfo'>
        <button v-on:click="pushArr">添加</button>
        <button @click="getOdd">过滤排序</button>
        <ul><li v-for="(n,index) in numbers" :key="index">{{n%2!==0?n:""}}</li></ul>
        <div>
            <p>计算属性得出的结果：{{msgRe}}</p>
            <p>methods方法得出的结果：{{msgRe1()}}</p>
        </div>
    </div>
</template>
<script>
export default {
    //data中数据的改变，会引起视图的改变
    data(){
        return{
           names:["iwen","ime","ice"],
           numbers:[1,2,3,4,5,6,7,8],
           message:"I am is a software engineer"
        }
    },
    methods:{
        getItemInfo(data,event){
        //    事件中的默认事件event
           console.log("名字是:"+this.names[data])
           console.log("索引是:"+data);
           console.log(event)

        },
        getkeyInfo(event){
            console.log(event)
        },
        pushArr(){
            // this.names.push("Frank")
            this.names.concat(["Mary"]);
        },
        getOdd(){
              this.numbers.filter(function(num){
                 if(num%2!==0){
                     console.log(num)
                 }
            })
        },
        msgRe1(){
             return this.message.split("").reverse().join("");
        }
    },
    computed:{
        msgRe(){
            return this.message.split("").reverse().join("");
        }
    }  
}
</script>
<style>
    li{
        list-style:none;
        /* background:#f40;
        color:#fff;
        width:100px;
        height:30px;
        line-height:30px;
        margin-bottom:10px; */
    }
</style>


