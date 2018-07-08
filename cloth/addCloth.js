const abstractClothModel = require('./AbstractClothModel')
const clothModel = require('./ClothModel')
const colorModel = require('../color/ColorModel')

const addCloth = async (abstractObjectID, size, pictureURL, colorObjectID) => {
  try{
    return await clothModel.create({abstract: abstractObjectID, size:size, pictureURL: pictureURL, color: colorObjectID})
  }catch(e){
    return e
  }
}

module.exports = addCloth
