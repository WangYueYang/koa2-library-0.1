const Koa = require('koa')
const fs = require('fs')
const router = require('./router')
const app = new Koa()

const bodyParser = require('koa-bodyparser')

app.use(bodyParser())


app.use(router.routes()).use(router.allowedMethods())

app.use(async (ctx) => {
  if (ctx.method === 'GET') {
    let html = `
    <h1>koa2 request post demo</h1>
    <form method="POST" action="/post">
        <p>userName</p>
        <input name="userName" /><br/>
        <p>nickName</p>
        <input name="nickName" /><br/>
        <p>email</p>
        <input name="email" /><br/>
        <button type="submit">submit</button>
      </form>
    `
    ctx.body = html
  } else if (ctx.method === 'POST') {
    ctx.body = ctx.request.body
  }
})



app.listen(3000)