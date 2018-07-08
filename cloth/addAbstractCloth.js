const abstractClothModel = require('./AbstractClothModel')

module.exports = async (abstractClothObject) => {
  return await abstractClothModel.create({abstractClothObject})
}
