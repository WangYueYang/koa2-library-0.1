const Router = require('koa-router')
const router = new Router()

const home = require('./home')
const user = require('./user')


router.use('/', home.routes(), home.allowedMethods())
router.use('/user', user.routes(), user.allowedMethods())
module.exports = router