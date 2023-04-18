const service = require('../service/user.s')

class UserController {
  async create(ctx, next){
    const user = ctx.request.body
    const res = await service.create(user)
    if(res.success){
      ctx.body = {...res, message: '用户新增成功'}
    }else{
      ctx.app.emit('error', res, ctx)
    }
  }
}

module.exports = new UserController()