const errorHandler = (e, ctx) => {
  ctx.status = e.status || 500
  ctx.body = e || '发生错误'
}

module.exports = errorHandler