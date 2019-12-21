const Router = require('koa-router')


const router = new Router()


router.post('/addBooks', (ctx) => {
  const postData = ctx.request.body
  ctx.body = postData
})

router.get('/getpage', (ctx) => {
  ctx.body = 'hahahah'
})


module.exports = router
