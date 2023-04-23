const cloud = require('leancloud-storage')
const { CLOUD_APPID, CLOUD_APPKEY, CLOUD_SERVERURL } = require('../app/config')

class Storage {
  init() {
    cloud.init({
      appId: CLOUD_APPID,
      appKey: CLOUD_APPKEY,
      serverURL: CLOUD_SERVERURL
    });
  }

  async insert(table, data) {
    try {
      const lcObj = cloud.Object.extend(table);
      const dataObj = new lcObj();
      for (let key in data) {
        dataObj.set(key, data[key]);
      }
      const res = await dataObj.save()
      return { success: true }
    } catch (e) {
      const message = e.rawMessage.split('.')
      return { success: false, message: message[0], status: 500 }
    }
  }
}

module.exports = new Storage()