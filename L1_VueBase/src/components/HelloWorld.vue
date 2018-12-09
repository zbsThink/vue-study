<template>
  <div class="hello">
    {{hello}}
    {{1+1}}
    {{"哈哈"}}
    {{0>10 ? '对的':'错的'}}
    <p>{{'注意:只能存在单行语句'}}</p>
    <p v-html="hello"></p>
    <p v-text="hello"></p>
    <p v-bind:class="ha">哈哈哈</p>
    <p v-bind:title="ts">提示</p>
    <button v-bind:disabled="isButtonDisabled">Button</button>
    {{ message.split('').reverse().join('') }}
    <div>
      <template v-if="show">
        <span>我是if为true看到的</span>
        <a href="#">author:zbs</a>
      </template>
      <template v-else>
        <span>我是if为false看到的</span>
        <span>哈哈</span>
      </template>
    </div>
    <div v-if="type === 'A'">
      <span>A</span>
    </div>
    <div v-else-if="type === 'B'">
      <span>B</span>
    </div>
    <div v-else-if="type === 'C'">
      <span>C</span>
    </div>
    <div v-else>
       <span>Not A/B/C</span>
    </div>
    <div v-show="show">我是v-show</div>
    <div class="list">
      <ul>
        <!-- 加上key值主要是为了以后方便查找 -->
        <li v-for="(name,index) in names" v-bind:key="index">
          {{ name }}-{{index}}
        </li>
      </ul>
      <ul>
        <li v-for="(item,index) in users" :key="index">
          <span>{{item.name}}</span>
          <span>{{item.age}}</span>
        </li>
      </ul>
    </div>
    <button v-on:click="num+=1">按钮</button>
    <p>{{num}}</p>
    <button v-on:click="handlerClick">按钮1</button>
    <!-- <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <a
          href="https://vuejs.org"
          target="_blank"
        >
          Core Docs
        </a>
      </li>
      <li>
        <a
          href="https://forum.vuejs.org"
          target="_blank"
        >
          Forum
        </a>
      </li>
      <li>
        <a
          href="https://chat.vuejs.org"
          target="_blank"
        >
          Community Chat
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/vuejs"
          target="_blank"
        >
          Twitter
        </a>
      </li>
      <br>
      <li>
        <a
          href="http://vuejs-templates.github.io/webpack/"
          target="_blank"
        >
          Docs for This Template
        </a>
      </li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li>
        <a
          href="http://router.vuejs.org/"
          target="_blank"
        >
          vue-router
        </a>
      </li>
      <li>
        <a
          href="http://vuex.vuejs.org/"
          target="_blank"
        >
          vuex
        </a>
      </li>
      <li>
        <a
          href="http://vue-loader.vuejs.org/"
          target="_blank"
        >
          vue-loader
        </a>
      </li>
      <li>
        <a
          href="https://github.com/vuejs/awesome-vue"
          target="_blank"
        >
          awesome-vue
        </a>
      </li>
    </ul> -->
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      // msg: 'Welcome to Your Vue.js App'
      num:1,
      hello:"<p>Hello,Vue</p>",
      ha:"ha1",
      ts:"我是提示",
      isButtonDisabled:null,
      message:"Hello",
      show:true,
      type:"B",
      names:["iwen","ime","ice"],
      users:[
        {
          id:0,
          name:'iwen',
          age:13
        },
        {
          id:1,
          name:'Tom',
          age:16
        },
        {
          id:2,
          name:'Mary',
          age:18
        }
      ]
    }
  },
  methods:{
    handlerClick(){
      // alert("我是点击事件")
      // this来索引data中的关键字
      // console.log(this)//this指向当前组件
      this.show = !this.show;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.ha{
  color:#f00;
}
</style>
