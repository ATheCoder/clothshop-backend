const mongoose = require('mongoose')

let schema = new mongoose.Schema({
  featured: Boolean,
  title: String,
  price: Number,
  clothes: [{type: mongoose.Schema.Types.ObjectId, ref: 'Cloth'}],
  //catagories: TODO: Catagories
  pictureURL: String
})

schema.index({title: 'text'})

let AbstractClothModel = mongoose.model('AbstractCloth', schema)

module.exports = AbstractClothModel
