const errorHandler = ({status, message}, ctx) => {
  console.log(status, message,'error-handle')
  ctx.status = status
  ctx.body = { message: message, code: status }
}

module.exports = errorHandler