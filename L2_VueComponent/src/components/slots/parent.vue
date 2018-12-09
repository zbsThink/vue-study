<template>
    <div class="parent">
      <p>父组件</p>
      <Child>
         <div slot="s1">
              <p class="p1">我是插槽1</p>
              <p class="p1">我是插槽11</p>
         </div>
         <!-- 在2.5.0之前作用域插槽 -->
         <!-- <template slot="s2" slot-scope="props">
             <p class="p1">{{props.text}}</p>
         </template> -->
         <!-- 在2.5.0之后使用作用域插槽可以被用于任何地方 -->
          <p class="p1" slot="s2"  slot-scope="props">
              {{props.text}}
          </p>
      </Child>
    </div>
</template>
<script>
import Child from "./child"
export default {
    name:"parent",
    data(){
        return {
        
        }
    },
    components:{
        Child
    }
}
</script>
<style scoped>
    @import './p.css'
</style>