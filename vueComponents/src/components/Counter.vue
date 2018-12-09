<template>
    <div class="counter-component">
        <div class="counter-btn left" @click="minus">-</div>
        <div class="counter-show">
            <input type="text" v-model="number" @keyup="fixNumber" style="width:48px;height:16px;text-align:center;">
        </div>
        <div class="counter-btn right" @click="adds">+</div>
    </div>
</template>
<script>
export default {
    data(){
        return {
          number:1
        }
    },
    props:{
        max:{
            type:Number,
            default:5
        },
        min:{
            type:Number,
            default:1
        }
    },
    methods:{
        fixNumber(event){
            let fix;
            if(typeof this.number==="string"){
                fix = Number(this.number.replace(/\D/g,''));
            }else{
                fix = this.number;
            }
            if(fix>this.max||this>this.min){
                fix = this.min;
            }
            this.number = fix;
        },
        minus(event){
            if(this.number == this.min){
                return;
            }
            this.number--
        },
        adds(event){
            if(this.number == this.max){
                return;
            }
            this.number++
        }
        
    }
}
</script>
<style scoped>
@import './Counter.css'
</style>



