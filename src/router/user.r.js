const Router = require('koa-router')
const { create, login } = require('../controller/user.c')
const { namePassRequired, userVerify, passwordEncrypt } = require('../middleware/userVerify.m.js')
const userRouter = new Router()

userRouter.post('/user', namePassRequired, passwordEncrypt, create)
userRouter.post('/login', namePassRequired, userVerify, login)

module.exports = userRouter