使用npm管理组件版本
 1.npm发布一个包
    1.官网注册一个账号
    2.cmd下登录账号：npm login
    3.发布：npm publish
 2.创建自己的组件
    1.初始化项目
    2.修改package.json文件
        "private":false

        "main":"dist/vue-counter.min.js"
    3.修改webpck.prod.config.js文件
      1.修改out输出目录
      2.删除无用的内容
    4.修改输出
      1.修改mian.js文件，输出自己的组件即可使用
