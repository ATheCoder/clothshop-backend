const mongoose = require('mongoose')

let schema = new mongoose.Schema({
  featured: Boolean,
  title: String,
  price: Number,
  category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
  pictureURL: String
})

schema.index({title: 'text'})

let AbstractClothModel = mongoose.model('AbstractCloth', schema)

module.exports = AbstractClothModel
