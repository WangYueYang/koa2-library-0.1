const Router = require('koa-router')

const router = new Router()

const home = router.get('/', async (ctx) => {
  let html = `
    <p><a href="/404">404.html</a></p>
    <p><a href="/index">index.html</a></p>
  `
  ctx.body = html
})

module.exports = {
  home
}