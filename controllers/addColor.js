const colorModel = require('../models/ColorModel')

module.exports = async (colorObject) => {
  return await colorModel.create({name: colorObject.name, hexCode: colorObject.hexCode, pictureURL: colorObject.pictureURL})
}
