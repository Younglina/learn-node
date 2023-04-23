const setRes = (message, status=200) => {
  return { status, message}
}

//OTHER_ERROR 调用其他服务返回的错误。就用他们返回的
module.exports = {
  NAME_AND_PASSWORD_IS_REQUIRED: setRes('用户名或密码不能为空！', 400),
  USER_INSERT_SUCCESS: setRes('用户新增成功'),
  MAIL_SEND_SUCCESS: setRes('邮件发送成功'),
}