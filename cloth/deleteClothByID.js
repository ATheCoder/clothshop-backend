const abstractClothModel = require('./AbstractClothModel')
const clothModel = require('./ClothModel')

module.exports = async (id) => {
  await clothModel.deleteMany({abstract: id})
  await abstractClothModel.deleteOne({_id: id})
  return true
}
