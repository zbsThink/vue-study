<template>
    <div>
        <!-- 文本实时响应 -->
      <!-- <input type="text" v-model.lazy="msg">
      <p>{{msg}}</p> -->
      <!-- 文本延时响应 -->
      <input type="text" v-model="msg" placeholder="edit me">
      <p>{{message}}</p>
      <!-- 多行文本 -->
      <span>Multiline message is:</span>
      <p>{{message1}}</p>
      <textarea name="" id="" cols="30" rows="10" v-model="message1" placeholder="请输入多行文本"></textarea><br>
      <!-- 单个复选框绑定到bool值 -->
      <input type="checkbox" id="checkbox" value="" v-model="checked">
      <label for="checkbox">{{checked}}</label>
      <!-- 多个复选框绑定到数组中 -->
      <div>
          <input type="checkbox" name="" id="Jack" v-model="checkedNames" value="Jack">
          <label for="Jack">Jack</label>
          <input type="checkbox" name="" id="Tom" v-model="checkedNames" value="Tom">
          <label for="Tom">Tom</label>
          <input type="checkbox" name="" id="Json" v-model="checkedNames" value="Json">
          <label for="Json">Json</label><br>
          <span>checked names:{{checkedNames}}</span>
      </div>
      <!-- 选择框单选时 -->
      <!-- <div>
          <select name="" id="" v-model="selected">
              <option value="">请选择</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
          </select>
          <span>selected:{{selected}}</span>
      </div> -->
      <!-- 选择框多选时 -->
      <!-- <div>
         <select name="" id="" v-model="selected1" style="height:100px;" multiple>
              <option value="">请选择</option>
              <option value="A">A</option>
              <option value="B">B</option>
              <option value="C">C</option>
          </select>
          <span>selected:{{selected1}}</span>  
      </div> -->
      <!-- v-for列表渲染 -->
      <div>
          <select name="" id="" v-model="selected">
              <option v-for="(option,index) in options" v-bind:value="option.value" :key="index">
                  {{option.text}}
              </option>
          </select>
          <span>selected:{{selected}}</span>
      </div>
    </div>
</template>
<script>
   export default{
       name:"formdata",
       data(){
           return{
             msg:"",
             message:"",
             message1:"",
             checked:false,
             checkedNames:[],
             selected:"A",
             options:[
                 {text:"One",value:"A"},
                 {text:"Two",value:"B"},
                 {text:"Three",value:"c"}
             ]
           }
       },
       watch:{
           msg:function(data){
            //    if(data == "哈哈"){
            //        console.log("你个傻子")
            //    }
            // 延时响应
            setTimeout(()=>{
                this.message = data;
            },1000)
           }
       }
   }
</script>
<style>

</style>

