function log(ctx) {
  console.log(ctx.method, ctx.header.host + ctx.url, 'async log')
}

// generator
// module.exports = function () {
//   return function* (next) {
//     log(this)
//     if (next) {
//       yield next
//     }
//   }
// }

// async await

module.exports = function () {
  return async function (ctx, next) {
    log(ctx)
    await next()
  }
}