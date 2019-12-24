const Router = require('koa-router')

const router = new Router()

module.exports = router
  .get('index', async (ctx) => {
    let title = 'My Library'
    await ctx.render('index', {
      title
    })
  })
  .get('home', async (ctx) => {
    let title = 'hello ejs home'
    await ctx.render('home', {
      title
    })
  })
  .get('bookList', async (ctx) => {
    await ctx.render('bookList')
  })
  .get('addBooks', async (ctx) => {
    await ctx.render('addBooks')
  })
