const errorTypes = require('../constants/messageTypes.js')
const { query } = require('../utils/cloud')
const crypto = require('crypto');
const { CRYPTO_ITER, CRYPTO_KEYLEN, CRYPTO_HASH } = require('../app/config')

// 名称和密码的必填校验
const namePassRequired = async (ctx, next) => {
  const { name, password } = ctx.request.body
  if (!name || !password) {
    return ctx.app.emit('error', errorTypes.NAME_AND_PASSWORD_IS_REQUIRED, ctx)
  }
  await next()
}

// 密码加密
const passwordEncrypt = async (ctx, next) => {
  const { password } = ctx.request.body

  // 获取盐值和加密后的密码
  const { salt, hashPassword } = getHashPassword(password);
  // 传递盐值和加密后的密码
  ctx.request.body.password = hashPassword
  ctx.request.body.salt = salt
  await next()
}

// 验证密码是否正确，验证通过返回用户信息
const userVerify = async (ctx, next) => {
  const { name, password } = ctx.request.body
  const res = await query('node_user', {name}, ['salt', 'password', 'name'])
  if(res.success && res.data.length>0){
    const { salt, password: hashPassword } = res.data[0]
    const verifyHash = crypto.pbkdf2Sync(password, salt, CRYPTO_ITER, CRYPTO_KEYLEN, CRYPTO_HASH).toString('hex');
    if(verifyHash === hashPassword){
      ctx.request.body.userInfo = { name: res.data[0].name,id: res.data[0].id }
    }else{
      return ctx.app.emit('error', errorTypes.NAME_OR_PASSWORD_WARN, ctx)
    }
  }else{
    return ctx.app.emit('error', errorTypes.NAME_OR_PASSWORD_WARN, ctx)
  }
  await next()
}

// 对密码进行哈希计算，使用随机盐值和多次迭代
function getHashPassword(password) {
  // 生成随机盐值
  const salt = crypto.randomBytes(16).toString('hex');
  // password 被加密值 , salt 盐值, iterations 迭代次数, keylen 生成的密钥长度, 哈希算法
  const hashPassword = crypto.pbkdf2Sync(password, salt, CRYPTO_ITER, CRYPTO_KEYLEN, CRYPTO_HASH).toString('hex');
  return { salt, hashPassword };
}

module.exports = {
  namePassRequired,
  userVerify,
  passwordEncrypt
}