const Koa = require('koa')
const path = require('path')
const static = require('koa-static')

const app = new Koa()

const staticPath = './static'


app.use(static(path.join(__dirname, staticPath)))

app.use(async (ctx) => {
  if (ctx.url === '/index') {
    ctx.cookies.set('koa-cookie', 'hello koa-cookie', {
      domain: 'localhost',  // 写cookie所在的域名
      path: '/index',       // 写cookie所在的路径
      maxAge: 10 * 60 * 1000, // cookie有效时长
      expires: new Date('2017-02-15'),  // cookie失效时间
      httpOnly: false,  // 是否只用于http请求中获取
      overwrite: false  // 是否允许重写
    })
    ctx.body = 'cookie is ok'
  } else {
    ctx.body = 'cookie not ok'
  }
})

app.listen(3000)