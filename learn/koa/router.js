const Router = require('koa-router')
const { koaBody } = require('koa-body')

const router = new Router({prefix: '/user'})

router.get('/', (ctx, next)=>{
  ctx.body = "get"
})
// router.get('/:id', (ctx, next)=>{
//   ctx.body = "get"
//   console.log(ctx.query)
//   console.log(ctx.params)
// })
router.post('/', (ctx, next)=>{
  ctx.body = "post"
})
router.post('/upload', koaBody({
  multipart: true
}), (ctx, next)=>{
  console.log(ctx.request.body)
  console.log(ctx.request.files)
  ctx.body = "upload"
})

module.exports = router