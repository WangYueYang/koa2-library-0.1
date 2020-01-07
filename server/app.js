const Koa = require('koa')
const path = require('path')
const fs = require('fs')
const util = require('util')
const views = require('koa-views')
const Static = require('koa-static')
const bodyParser = require('koa-bodyparser')
const app = new Koa()
const router = require('./router')

import routers from './controllers'

routers(router)

// 静态资源
const staticPath = './static'
app.use(Static(
  path.join( __dirname,  staticPath)
))

// Post请求 ctx.body 解析
app.use(bodyParser())

// 加载模板引擎
app.use(views(path.join(__dirname, './view'), {
  extension: 'ejs'
}))

app.use(router.routes()).use(router.allowedMethods())

let indexPath = path.join(__dirname, '../public/index.html')
const readFile = util.promisify(fs.readFile)

app.use(async (ctx) => {
  const fs = await readFile(indexPath, 'utf-8')
  ctx.body = fs
})

app.listen(3000)