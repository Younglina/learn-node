const errorHandler = ({status, message}, ctx) => {
  console.log(status, message, ctx.request.url, ctx.request.body, 'error-handle')
  ctx.status = status
  ctx.body = { message: message, code: status }
}

module.exports = errorHandler