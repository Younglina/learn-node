const service = require('../service/user.s')
const { USER_INSERT_SUCCESS } = require('../constants/messageTypes')
class UserController {
  async create(ctx, next){
    const user = ctx.request.body
    const res = await service.create(user)
    if(res.success){
      ctx.body = USER_INSERT_SUCCESS
    }else{
      ctx.app.emit('error', res, ctx)
    }
  }
}

module.exports = new UserController()