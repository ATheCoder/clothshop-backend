const mongoose = require('mongoose')

let schema = mongoose.Schema({
  title: String
})

let CategoryModel = mongoose.model('Category', schema)

module.exports = CategoryModel
