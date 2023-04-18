const Router = require('koa-router')
const { create } = require('../controller/user.c')
const userRouter = new Router({prefix: '/user'})

userRouter.post('/', async (ctx, next) => {
  await create(ctx, next)
})

module.exports = userRouter