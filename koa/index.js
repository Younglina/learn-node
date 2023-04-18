const Koa = require('koa')
const userRouter = require('./router')
const path = require('path');
const { koaBody } = require('koa-body')

const app = new Koa()

app.use(koaBody({
  multipart: true,
  formidable: {
    uploadDir: path.join(__dirname,'./uploads'),
    // 保持后缀名\
    keepExtensions: true,
    // 文件大小
    maxFileSize: 2 * 1024 * 1024, // 设置上传文件大小限制，默认2M
    onFileBegin: (name, file) => {
      //修改上传文件名
      file.filepath = path.join(__dirname, "./uploads/") + Date.now() + file.originalFilename;
    },
    onError(err){
        console.log(err)
    }
  }
}));
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

app.listen(3000, ()=>{
  console.log('start http://localhost:3000')
})