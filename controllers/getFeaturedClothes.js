const abstractClothModel = require('../models/AbstractClothModel')

module.exports = async () => {
  try{
    return await abstractClothModel.find({featured: true})
  }catch(e){
    throw e
  }
}
