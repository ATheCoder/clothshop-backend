const colorModel = require('./ColorModel')

module.exports = async (colorObject) => {
  let fineOne = await colorModel.findOne({name_lower: colorObject.name.toLowerCase()})
  if(fineOne){
    return fineOne
  }
  return await colorModel.create({name: colorObject.name, hexCode: colorObject.hexCode, pictureURL: colorObject.pictureURL})
}
