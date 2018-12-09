<template>
    <div>
        <button @click="showHide">过渡</button>
        <transition name="fade">
            <p v-if="show">haha</p>
        </transition>

        <button @click="showHideAnim">动画</button>
        <transition name="hello">
            <p v-if="showAnim">嘿嘿</p>
        </transition>

        <button @click="animLibs">动画库</button>
        <transition name="world" enter-active-class="animated flip"
    leave-active-class="animated flip">
            <p v-show="libs">呵呵呵</p>
        </transition>
    </div>
</template>
<script>
export default {
    name:"animate",
    data(){
        return {
          show:true,
          showAnim:true,
          libs:true
          
        }
    },
    methods:{
        showHide(){
            this.show = !this.show
        },
        showHideAnim(){
            this.showAnim = !this.showAnim
        },
        animLibs(){
            this.libs = !this.libs
        }
    }
}
</script>
<style scoped>
/* .fade-enter-active, .fade-leave-active {
  transition: opacity 2.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
} */
/*从开始到结束（0-1)从无到有*/
.fade-enter,.fade-leave-to{
    /* opacity:0; */
    transform: translateX(100px)
}
.fade-enter-active,.fade-leave-active{
    transition: all 2.5s;
}
.fade-enter-to,.fade-leave{
    /* opacity: 1.0 */
    transform:translateX(0px)
}
.hello-enter-active{
    animation:bounce-in 1s ease
}
.hello-leave-active{
    animation:bounce-out 1s ease;
}
@keyframes bounce-in {
  0% {
    transform: scale(0) skew(0);
  }
  50% {
    transform: scale(1.5) skew(45deg);
  }
  100% {
    transform: scale(1) skew(0);
  }
}
@keyframes bounce-out {
  0% {
    transform: scale(1) skew(0);

  }
  50% {
    transform: scale(1.5) skew(45deg);
  }
  100% {
    transform: scale(0) skew(0);
  }
}
p{
    font-size:40px;
    /* position:absolute; */
}

</style>
