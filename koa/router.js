const Router = require('koa-router')
const router = new Router({ prefix: '/user' })
const { koaBody } = require('koa-body')
const path = require('path');

router.get('/', (ctx, next) => {
  console.log(ctx.query)
  ctx.body = "get"
})
router.post('/', (ctx, next) => {
  console.log(ctx.request.body)
  ctx.body = "post"
})
router.post('/upload', koaBody({
  multipart: true,
  formidable: {
    uploadDir: path.join(__dirname, './uploads'),
    // 保持后缀名\
    keepExtensions: true,
    // 文件大小
    maxFileSize: 2 * 1024 * 1024, // 设置上传文件大小限制，默认2M
    onFileBegin: (name, file) => {
      //修改上传文件名
      file.filepath = path.join(__dirname, "./uploads/") + Date.now() + file.originalFilename;
    },
    onError(err) {
      console.log(err)
    }
  }
}), (ctx, next) => {
  console.log(ctx.request.body)
  ctx.body = "upload"
})

module.exports = router