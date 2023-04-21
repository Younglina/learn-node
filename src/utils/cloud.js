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
      return { success: true, message: '操作成功' }
    } catch (e) {
      return { success: false, message: e.rawMessage, code: e.code }
    }
  }
}

module.exports = new Storage()