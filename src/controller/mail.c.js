const nodemailer = require('nodemailer');
const { MAIL_USER, MAIL_PASS, MAIL_USERGET } = require('../app/config')
const { MAIL_SEND_SUCCESS } = require('../constants/messageTypes')

class MailController {
  async send({to, subject, text}, ctx){
    // 创建一个SMTP传输对象，用于发送电子邮件
    const transporter = nodemailer.createTransport({
      host: 'smtp.qq.com',
      port: 465,
      secure: true,
      auth: {
        user: MAIL_USER,
        pass: MAIL_PASS
      }
    });

    // 设置电子邮件的选项
    const mailOptions = {
      from: MAIL_USER,
      to,
      subject: subject,
      text: text
    };

    try {
      // 使用SMTP传输对象发送电子邮件
      const info = await transporter.sendMail(mailOptions);
      console.log('Message sent: %s', info.messageId);
      ctx.body = MAIL_SEND_SUCCESS;
    } catch (error) {
      ctx.app.emit('error', { status: 500, message: error.message}, ctx)
    }
  }
}

module.exports = new MailController()