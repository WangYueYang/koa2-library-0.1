const Koa = require('koa')
const path = require('path')
const views = require('koa-views')
const static = require('koa-static')
const bodyParser = require('koa-bodyparser')

const app = new Koa()

const router = require('./router')

// 静态资源
const staticPath = './static'
app.use(static(
  path.join( __dirname,  staticPath)
))

// Post请求 ctx.body 解析
app.use(bodyParser())

// 加载模板引擎
app.use(views(path.join(__dirname, './view'), {
  extension: 'ejs'
}))

app.use(router.routes()).use(router.allowedMethods())


app.listen(3000)