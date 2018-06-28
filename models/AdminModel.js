const mongoose = require('mongoose')

let schema = mongoose.Schema({
  username: {type: String, unique: true},
  password: String,
  firstName: String,
  lastName: String
})

schema.post('save', function (error, doc, next) {
  if(error.name === 'MongoError' && error.code === 11000){
    next(new Error('This username already exists!'))
  }
  else if(error){
    next(error)
  }
})

let AdminModel = mongoose.model('Admin', schema)

module.exports = AdminModel
