const { insert } = require('../utils/cloud')

class UserService {
  async create(user) {
    const { name, password } = user
    const res = await insert('node_user', {name, password: `${password}`})
    return res
  }
}

module.exports = new UserService()