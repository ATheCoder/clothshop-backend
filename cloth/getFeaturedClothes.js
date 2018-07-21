const abstractClothModel = require('./AbstractClothModel')

module.exports = async () => {
  try{
    return await abstractClothModel.find({featured: true}).populate('category').populate('color')
  }catch(e){
    throw e
  }
}
