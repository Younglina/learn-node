const Koa = require('koa')
const userRouter = require('./router')
const { koaBody } = require('koa-body')

const app = new Koa()

app.use(koaBody());
app.use(userRouter.routes())
app.use(userRouter.allowedMethods())

app.listen(3000, ()=>{
  console.log('start http://localhost:3000')
})