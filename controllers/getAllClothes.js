const abstractClothModel = require('../models/AbstractClothModel')

module.exports = async () => {
  try{
    return await abstractClothModel.find().populate('category')
  }
  catch(e){
    throw e
  }
}
