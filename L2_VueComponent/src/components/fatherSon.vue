<template>
    <!-- 父传子使用props，props代表着父级作用域 -->
    <div>
         <p>父组件</p>
         <input type="text" v-model="autoMsg">
        <Son :data="msg" :remsg="autoMsg"/>
    </div>
</template>
<script>
import Son from './son'
export default {
    name:'father',
    data(){
        return {
          msg:"我是父级的数据",
          autoMsg:"我是动态的数据"
        }
    },
    components:{
        Son
    }
}
</script>
<style scoped>

</style>

