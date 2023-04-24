// const service = require('../service/user.s')
const { insert } = require('../utils/cloud')
const { USER_INSERT_SUCCESS, USER_LOGIN_SUCCESS } = require('../constants/messageTypes')
class UserController {
  async create(ctx, next){
    const user = ctx.request.body
    const res = await insert('node_user',user)
    if(res.success){
      ctx.body = USER_INSERT_SUCCESS
    }else{
      ctx.app.emit('error', res, ctx)
    }
  }

  async login(ctx, next){
    const userInfo = ctx.request.body.userInfo
    if(userInfo){
      ctx.body = USER_LOGIN_SUCCESS
    }else{
      ctx.app.emit('error', res, ctx)
    }
  }
}

module.exports = new UserController()