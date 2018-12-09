import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)
//创建一个store仓库
export default new Vuex.Store({
  state:{
    count:0
  },
  mutations:{
    increment(state){
      state.count++
    },
    decrement(state){
      state.count--
    }
  },
  actions:{
    increment(context){
      //模拟异步加载
      // setTimeout(() => {
      //   context.commit("increment");
      // }, 1000);
      context.commit("increment");
    },
    decrement(context){
      // setTimeout(() => {
      //   context.commit("decrement")
      // },1000);
      context.commit("decrement")
    }
  },
  //getters相当于给上面的state中的count添加一个过滤规则（数字不能小于0）
  getters:{
    getState(state){
      return state.count>0?state.count:0
    }
  }
})