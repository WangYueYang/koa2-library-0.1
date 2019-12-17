const Koa = require('koa')
const fs = require('fs')
//generator 中间件在koa v2中需要用koa-convert封装一下才能使用
// const convert = require('koa-convert')
// const log = require('./middleware/middle-log')
// app.use(log())

const Router = require('koa-router')

const router = require('./router')

const app = new Koa()



// function render(page) {
//   return new Promise((res, rej) => {
//     let viewUrl = `./view/${page}`
//     fs.readFile(viewUrl, 'binary', function (err, data) {
//       if (err) {
//         rej(err)
//       } else {
//         res (data)
//       }
//     }) 
//   })
// }

// async function route(url) {
//   let view = `404.html`
//   if (url) {
//     view = `${url.slice(1)}.html`
//   }
//   console.log(url, url.slice(1), `${url.slice(1)}`)
//   let html = await render(view)
//   return html
// }

app.use(router.routes()).use(router.allowedMethods())

app.listen(3000)