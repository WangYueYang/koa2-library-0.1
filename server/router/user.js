const Router = require('koa-router')

const mysql = require('../db/mysql')

const router = new Router()


router.post('/addBooks', async (ctx) => {
  const postData = ctx.request.body
  let { name, author, time, price } = postData;
  if (!time) {
    time = '2019-12-12';
  }
  await mysql.addBooks([name, author, time, price]).then(res => {
    ctx.body = {
      success: 200,
      postData,
      res
    }
  }).catch(err => {
    ctx.body = {
      err
    }
  })



})

router.get('/getpage', (ctx) => {
  ctx.body = 'hahahah'
})

router.get('/getBookList', async (ctx) => {
  await mysql.getBookList().then(res => {
    ctx.body = {
      success: 200,
      res
    }
  })
})


module.exports = router
