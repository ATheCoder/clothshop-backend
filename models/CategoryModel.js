const mongoose = require('mongoose')

let schema = mongoose.Schema({
  title: String,
  title_lower: String
})

schema.pre('save', function(){
  this.title_lower = this.title.toLowerCase()
})

let CategoryModel = mongoose.model('Category', schema)

module.exports = CategoryModel
