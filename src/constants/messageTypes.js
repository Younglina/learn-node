const setRes = (message, status=200) => {
  return { status, message}
}

module.exports = {
  // 用户
  NAME_AND_PASSWORD_IS_REQUIRED: setRes('用户名或密码不能为空！', 400),
  NAME_OR_PASSWORD_WARN: setRes('用户名或密码错误！', 401),
  USER_INSERT_SUCCESS: setRes('用户新增成功'),
  USER_LOGIN_SUCCESS: setRes('用户登录成功'),
  // 邮件
  MAIL_SEND_SUCCESS: setRes('邮件发送成功'),
}