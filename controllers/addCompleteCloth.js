const abstractClothModel = require('../models/AbstractClothModel')
const clothModel = require('../models/ClothModel')
const colorModel = require('../models/ColorModel')

const addClothCompleteCloth = async (title, price, size, pictureURL, colorHexCode, featured) => {
  try{
    let abstractCloth = await abstractClothModel.create({title: title, price: price, pictureURL: pictureURL, featured: featured})
    let color = await colorModel.create({hexCode: colorHexCode})
    return await clothModel.create({abstract: abstractCloth._id, size:size, pictureURL: pictureURL, color: color})
  }catch(e){
    throw e
  }
}

module.exports = addClothCompleteCloth
