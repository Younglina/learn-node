const { insert } = require('../utils/cloud')

class UserService {
  async create(user) {
    const { name, password, salt } = user
    const res = await insert('node_user', {name, password: `${password}`, salt})
    return res
  }
}

module.exports = new UserService()