1.子父级组件的交互
2.VueX
Vuex是一个专为Vue.js应用程序开发的状态管理模式，它采用集中式存储管理应用的所有组件状态，并以相应的规则保证状态以一种可预测的方式发生变化
  1.什么情况下使用VueX
     虽然Vuex可以帮助我们管理共享状态，但也附加了更多的概念和框架。这需要对短期和长期效益进行权衡。
     如果您不打算开发大型单页应用，使用Vuex可能是繁琐冗余的，确实是如此——如果你的页面的应用足够简单，您最好不要使用Vuex，一个简单的global event bus就足够您所需。但是，如果您需要构建是一个中大型的单页应用，您很可能会考虑如何更好的在组件外部管理状态，Vuex将会成为你自然而然的选择
  2.Vuex的状态管理
  view->(dispatch) Action->(commit) Mustations->(mutate) State->View
  注意：Action不是必需品，如果有异步操作才可能用到Action，否则可以不使用  
  3.Actions：
     Action 提交的是mutation，而不是直接变更状态
     Action 可以包含任意异步操作
