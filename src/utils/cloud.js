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
      for (let [k,v] of Object.entries(data)) {
        dataObj.set(k, v);
      }
      const res = await dataObj.save()
      return { success: true }
    } catch (e) {
      console.log(e, 'inser error')
      const message = e.rawMessage.split('.')
      return { success: false, message: message[0], status: 500 }
    }
  }

  async query(table, params, returnKey) {
    try {
      const queryObj = new cloud.Query(table);
      for (let [k, v] of Object.entries(params)) {
        queryObj.equalTo(k, v);
      }
      if(!returnKey || returnKey.length===0){
        return { success: false, message: 'returnKey' }
      }
      queryObj.select(returnKey)
      const res = await queryObj.find()
      const formatRes = res.map(item=>{
        return {
          ...item.attributes,
          updatedAt: item.updatedAt
        }
      })
      return { success: true, data: formatRes }
    } catch (e) {
      console.log(e, 'query error')
      const message = e.rawMessage.split('.')
      return { success: false, message: message[0], status: 500 }
    }
  }
}

module.exports = new Storage()