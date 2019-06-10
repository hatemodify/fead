const mongoose = require('mongoose')
const Schema = mongoose.Schema

const USER_MODEL = {
  user_id: {
    type: String
  },
  user_name: {
    type: String
  },
  email: {
    type: String
  },
  interest: {
    type: Array
  },
  scrap: {
    type: Array
  },
  post: {
    type: Array
  }
}

const userSchema = new Schema(USER_MODEL)
module.exports = mongoose.model('user', userSchema)
