const errorHandler = (e, ctx) => {
  console.log(e, 'errorhandle')
  ctx.status = e.status || 500
  ctx.body = e || '发生错误'
}

module.exports = errorHandler