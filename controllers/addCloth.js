const abstractClothModel = require('../models/AbstractClothModel')
const clothModel = require('../models/ClothModel')
const colorModel = require('../models/ColorModel')

const addCloth = async (abstractObjectID, size, pictureURL, colorObjectID) => {
  try{
    return await clothModel.create({abstract: abstractObjectID, size:size, pictureURL: pictureURL, color: colorObjectID})
  }catch(e){
    return e
  }
}

module.exports = addCloth
