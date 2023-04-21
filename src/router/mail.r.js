const Router = require('koa-router')
const { send } = require('../controller/mail.c')
const mailRouter = new Router()

// 设置路由
mailRouter.post('/sendmail', async (ctx, next) => {
  // 从请求体中获取电子邮件的相关信息
  const { to, subject, text } = ctx.request.body;
  await send({to, subject, text}, ctx)
});

module.exports = mailRouter
