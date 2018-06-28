const mongoose = require('mongoose')

let schema = mongoose.Schema({
  size: String,
  pictureURL: String,
  color: {type: mongoose.Schema.Types.ObjectId, ref: 'Color'},
  sales: Number,
  stock: Number,
  abstract: {type: mongoose.Schema.Types.ObjectId, ref: 'AbstractCloth'}
})

let ClothModel = mongoose.model('Cloth', schema)

module.exports = ClothModel
