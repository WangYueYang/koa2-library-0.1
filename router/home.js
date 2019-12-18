const Router = require('koa-router')

const router = new Router()

module.exports = router
  .get('/', async (ctx) => {
    let html = `
      <p><a href="/page/404">404.html</a></p>
      <p><a href="/index">index.html</a></p>
    `
    ctx.body = html
  })
  .get('index', async (ctx) => {
    ctx.body = 'index page!!!'
  })
