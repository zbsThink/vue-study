<template>
    <div>
       外部-{{getCount}}
       <button @click="add">加加</button>
    </div>
</template>
<script>
export default {
    data(){
        return {

        }
    },
    computed:{
        getCount(){
            // return this.$store.state.count;
            //使用getters方法进行过滤
             return this.$store.getters.getState
        }
    },
    methods:{
        add(){
            //针对mutation中方法的调用必须使用commit方法
            // this.$store.commit('increment')
            //Action 通过 store.dispatch 方法触发
            this.$store.dispatch("increment")
        }
    }
}
</script>
<style scoped>

</style>


