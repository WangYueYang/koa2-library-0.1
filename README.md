简单的展示与添加数据库demo
技术栈：Koa2 + ejs + mysql
主要目录结构：
  config  --- mysql配置
  db      --- 链接数据库
  router  --- 路由
  static  --- 静态资源
  view    --- 页面文件
  app.js  ---  入口文件

没有 node 模块包，直接在文件目录下 node app.js 就好了。 记得启动mysql数据库
首页： localhost:3000/index 路由
后期会继续进行拓展，目标：
前端：react-hooks + ts 的 spa
后弹：Koa + mysql
工程化： webpack打包。
暂定这样。