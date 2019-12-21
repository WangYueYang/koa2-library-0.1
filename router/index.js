const Router = require('koa-router')
const router = new Router()

const home = require('./home')
const user = require('./user')
const test = require('./test')


router.use('/', home.routes(), home.allowedMethods())
router.use('/user', user.routes(), user.allowedMethods())
router.use('/test', test.routes(), test.allowedMethods())
module.exports = router