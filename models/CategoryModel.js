const mongoose = require('mongoose')

let schema = mongoose.Schema({
  title: String
})

let CategoryModel = mongoose.model('CategoryModel', schema)

module.exports = CategoryModel
