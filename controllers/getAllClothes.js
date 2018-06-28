const abstractClothModel = require('../models/AbstractClothModel')

module.exports = async () => {
  try{
    return await abstractClothModel.find()
  }
  catch(e){
    throw e
  }
}
