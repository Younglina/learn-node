const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  APP_PORT,
  CLOUD_APPID,
  CLOUD_APPKEY,
  CLOUD_SERVERURL,
  MAIL_USER,
  MAIL_USERGET,
  MAIL_PASS,
  CRYPTO_ITER,
  CRYPTO_KEYLEN,
  CRYPTO_HASH,
} = process.env