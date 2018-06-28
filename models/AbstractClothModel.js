const mongoose = require('mongoose')

let schema = new mongoose.Schema({
  title: String,
  price: Number,
  clothes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Cloth'}],
  //catagories: TODO: Catagories
  pictureURL: String
})

let AbstractClothModel = mongoose.model('AbstractCloth', schema)

module.exports = AbstractClothModel
