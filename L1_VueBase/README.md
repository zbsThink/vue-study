# vuebase

> test

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).


#项目初始化
1：安装vue-cli
    npm install -g vue-cli
2:初始化项目
    vue init webpack my-project(你的项目名如：L1_VueBase)
3:进入项目
   cd my-project
4:安装依赖
  npm install
5:启动项目
  npm run dev
#项目目录结构
 index.html：项目根视图
 package.json：配置文件
 .postcssrc.js:postcss配置文件
 .gitgnore:使用git上传的忽略文件
 .babelrc:针对es6的文件
 .static:静态文件目录
 config：配置文件
#Vue基础
    注意:同级标签不能嵌套(div除外,可以使用template(这个标签单纯起容器作用)包裹)
    Vue组件：
        包含三个部分
            template:视图
            script：逻辑
            style：样式

   Mustache:模板
       特点:双大括号会将数据解释为普通文本
       表现形式：{{语法}}
                {{hello}}
                {{1+1}}
                {{"哈哈"}}
                {{0>10 ? '对的':'错的'}}
                {{'注意:1.只能存在单行语句;2.不能作用在HTML特性上(即不能作为HTML属性)'}}
   VUE基本指令:
       v-html:渲染文本
       特点:与Mustache模板不同它有html标签
       v-text:渲染文本
       v-bind:绑定(让属性变活)
       v-bind的简写: (:)
   条件渲染:
       v-if:
       v-else:
       v-else-if
       问题:v-if与v-show有什么区别?
       简单来说:v-if为false时你就在代码中看不到那个元素了,而v-show只是改变了css的display属性代码中元素还在
       具体来说:
       v-if 是“真正”的条件渲染，因为它会确保在切换过程中条件块内的事件监听器和子组件适当地被销毁和重建。
       v-if 也是惰性的：如果在初始渲染时条件为假，则什么也不做——直到条件第一次变为真时，才会开始渲染条件块。
      相比之下，v-show 就简单得多——不管初始条件是什么，元素总是会被渲染，并且只是简单地基于 CSS 进行切换。
      一般来说，v-if 有更高的切换开销，而 v-show 有更高的初始渲染开销。因此，如果需要非常频繁地切换，则使用 v-show 较好；如果在运行时条件很少改变，则使用 v-if 较好。
   列表渲染:
      v-for:把一个数组对应为一组元素(类似于for循环)
      两种情况：1.for循环数组(item,index) in names item:数组中的数组项，index:数组的索引
                2.for循环对象(value,key) in obj 第一个参数为对象值，第二个参数为键名
      每个列表都要添加key
   事件监听:
      v-on:监听DOM事件,并在触发时运行一些JavaScript代码
           methods:添加多个事件处理方法,事件处理方法集
          事件参数:每个事件都有一个event，获取event使用$event
          修饰符:
           .stop(取消冒泡)
           .prevent(阻止默认事件)
           .capture
           .self(自身)
           .once(只生效一次)
          简写方法：@代替v-on:

   数组更新检测：
        变异方法：引起视图更新（即原先那些改变数组的方法）
        替换数组：不会引起视图更新（那些不改变原数组的方法）
   显示过滤/排序结果
   filter:

   计算属性与观察者:
   computed:与data和methods同级
   计算机属性缓存即getter方法
   计算属性缓存VS方法：
   不同的是计算属性是基于它们的依赖进行缓存的。只在相关依赖发生改变时它们才会重新求值。这就意味着只要 message 还没有发生改变，多次访问 reversedMessage 计算属性会立即返回之前的计算结果，而不必再次执行函数。
   watch:观察者也就是侦听器

  表单输入绑定：
     v-model:双向数据绑定可读可写
     watch：1.监听器，监听数据的改变
            2.延迟响应用户的交互
     修饰符：
        .lazy(事件改变时发生响应)
        .number(转换为数字)
        .trim(自动过滤用户输入的首尾字符串)
    Class与Style绑定
    绑定HTML Class
 (主要是使用v-bind绑定动态数据) 



