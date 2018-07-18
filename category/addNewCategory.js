const categoryModel = require('../models/CategoryModel')

module.exports = async (newCategoryName) => {
  let findOne = await categoryModel.findOne({title_lower: newCategoryName.toLowerCase()})
  if(findOne){
    return findOne
  }
  else{
    return await categoryModel.create({title: newCategoryName})
  }
}
