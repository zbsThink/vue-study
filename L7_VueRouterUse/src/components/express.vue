<template>
    <div>
        <p>
            专家:{{$route.params.count}}
        </p>
        <p>姓名:{{$route.params.type.name}}</p>
    </div>
</template>
<script>
export default {
    name:'express',
    data(){
         return {
             
         }
    }
}
</script>
<style scoped>

</style>