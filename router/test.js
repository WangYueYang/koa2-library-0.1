const Router = require('koa-router')

const router = new Router()

router.get('/test1', async (ctx) => {
  ctx.body = 'test ddd'
})

module.exports = router