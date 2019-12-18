const Koa = require('koa')
const fs = require('fs')
const router = require('./router')

const app = new Koa()


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
    ctx.body = await parsePostData(ctx)
  }
})
// 对于POST请求的处理，koa2没有封装获取参数的方法，需要通过解析上下文context中的原生node.js请求对象req，将POST表单数据解析成query string（例如：a=1&b=2&c=3），再将query string 解析成JSON格式（例如：{"a":"1", "b":"2", "c":"3"}）
// ctx.req == node.request  ctx.res == node.response  
function parsePostData(ctx) {
  return new Promise((res, rej) => {
    try {
      let postData = ''
      ctx.req.on('data', data => {
        postData += data
      })
      ctx.req.on('end', function () {
        let parseData = parseQueryStr(postData)
        res(parseData)
      })
    } catch (err) {
      rej(err)
    }
  })
}

// post请求的字符串转json对象
// 将POST请求参数字符串解析成JSON
function parseQueryStr( queryStr ) {
  let queryData = {}
  let queryStrList = queryStr.split('&')
  console.log( queryStrList )
  for (  let [ index, queryStr ] of queryStrList.entries()  ) {
    let itemList = queryStr.split('=')
    queryData[ itemList[0] ] = decodeURIComponent(itemList[1])
  }
  return queryData
}


app.listen(3000)