const Koa = require('koa')
const views = require('koa-views')
const path = require('path')

const router = require('./router')

const app = new Koa()



app.use(router.routes()).use(router.allowedMethods())
app.use(views(path.join(__dirname, './view'), {
  extension: 'ejs'
}))

app.use(async (ctx) => {
  let title = 'hello ejs'
  await ctx.render('index', {
    title,
  })
})


app.listen(3000)