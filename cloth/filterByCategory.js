const abstractClothModel = require('./AbstractClothModel')
const isValidID = require('../helper').isValidObjectID
const categoryModel = require('../models/CategoryModel')

module.exports = async (categoryNameOrID) => {
  if(!isValidID(categoryNameOrID)){
    let category = await categoryModel.findOne({title_lower: categoryNameOrID.toLowerCase()})
    if(!category) throw new Error('Category not found!')
    categoryNameOrID = category._id
  }
  else{
    let category = categoryModel.findById(categoryNameOrID)
    if(!category) throw new Error('Category not found!')
  }
  return await abstractClothModel.find({category: categoryNameOrID}).populate('category')
}
