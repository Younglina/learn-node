const Router = require('koa-router')
const { create } = require('../controller/user.c')
const { userVerify } = require('../middleware/userVerify.m.js')
const userRouter = new Router({prefix: '/user'})

userRouter.post('/', userVerify, create)

module.exports = userRouter