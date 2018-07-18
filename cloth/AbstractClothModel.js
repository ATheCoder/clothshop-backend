const mongoose = require('mongoose')

let schema = new mongoose.Schema({
  featured: Boolean,
  title: String,
  title_lower: String,
  price: Number,
  category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
  pictureURL: String
})

schema.pre('save', function(){
  this.title_lower = this.title.toLowerCase()
})

schema.index({title: 'text'})

let AbstractClothModel = mongoose.model('AbstractCloth', schema)

module.exports = AbstractClothModel
