const Router = require('koa-router')
const router = new Router({prefix: '/user'})

router.get('/', (ctx, next)=>{
  console.log(ctx.query)
  ctx.body = "get"
})
// router.get('/:id', (ctx, next)=>{
//   ctx.body = "get"
//   console.log(ctx.query)
//   console.log(ctx.params)
// })
router.post('/', (ctx,  next)=>{
  console.log(ctx.request.body)
  ctx.body = "post"
})
router.post('/upload', (ctx, next)=>{
  console.log(ctx.request.body)
  ctx.body = "upload"
})

module.exports = router