const Koa = require('koa')
const { koaBody } = require('koa-body')
const { init } = require('../utils/cloud')
const errorHandler = require('../utils/error-handler')

const userRouter = require('../router/user.r.js')

const app = new Koa()

init()
app.use(koaBody())
app.use(userRouter.routes())
app.on('error', errorHandler);

module.exports = app