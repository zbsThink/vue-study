<template>
    <div>json</div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    created(){
        var url = this.HOST+"/phone"
        this.$http.get(url)
        .then(res=>{
            console.log(res.data)
        })
        .catch(error=>{
            console.log(error)
        })
    }
}
</script>
<style scoped>

</style>


