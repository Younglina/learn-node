const errorTypes = require('../constants/messageTypes.js')

const userVerify = async (ctx, next) => {
  const { name, password } = ctx.request.body
  console.log(name, password)
  if(!name || !password) { 
    return ctx.app.emit('error', errorTypes.NAME_AND_PASSWORD_IS_REQUIRED, ctx)
  }
  await next()
}

module.exports = {
  userVerify
}