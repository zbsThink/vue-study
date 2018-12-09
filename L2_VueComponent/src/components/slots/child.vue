<template>
    <div class="child">
        子组件
        <slot name="s1"></slot>
        <hr/>
        <slot name="s2" text="我是子集传过来的数据"></slot>
    </div>
</template>
<script>
export default {
    name:"child",
    data(){
        return {
       
        }
    }   
}
</script>
<style>

</style>
