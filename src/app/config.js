const dotenv = require('dotenv')

dotenv.config()

module.exports = {
  APP_PORT,
  CLOUD_APPID,
  CLOUD_APPKEY,
  CLOUD_SERVERURL
} = process.env