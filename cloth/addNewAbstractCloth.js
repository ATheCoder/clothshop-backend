const abstractClothModel = require('./AbstractClothModel')
const isValidObjectID = require('../helper').isValidObjectID
const addNewCategory = require('../category/addNewCategory')

module.exports = async (title, price, category, pictureURL, featured) => {
  let findOne = await abstractClothModel.findOne({title_lower: title.toLowerCase()})
  if(findOne){
    throw new Error('This title exists for a the cloth')
  }
  else{
    if(!isValidObjectID(category)){
      let newCategory = await addNewCategory(category)
      category = newCategory._id
    }
    return await abstractClothModel.create({title: title, price: price, category: category, pictureURL: pictureURL, featured: featured})
  }
}










// let schema = new mongoose.Schema({
//   featured: Boolean,
//   title: String,
//   price: Number,
//   category: {type: mongoose.Schema.Types.ObjectId, ref: 'Category'},
//   pictureURL: String
// })
