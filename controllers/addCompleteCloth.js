const abstractClothModel = require('../models/AbstractClothModel')
const clothModel = require('../models/ClothModel')
const colorModel = require('../models/ColorModel')
const categoryModel = require('../models/CategoryModel')

const addClothCompleteCloth = async (title, price, size, pictureURL, colorHexCode, featured, categoryName) => {
  try{
    let abstractCloth = await abstractClothModel.create({title: title, price: price, pictureURL: pictureURL, featured: featured})
    let color = await colorModel.create({hexCode: colorHexCode})
    let category = await categoryModel.create({title: categoryName})
    return await clothModel.create({abstract: abstractCloth._id, size:size, pictureURL: pictureURL, color: color, category: category})
  }catch(e){
    throw e
  }
}

module.exports = addClothCompleteCloth
