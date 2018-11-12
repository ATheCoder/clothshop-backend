const abstractClothModel = require('./AbstractClothModel')

module.exports = async () => {
  try{
    return await abstractClothModel.find().populate('category').populate('color')
  }
  catch(e){
    throw e
  }
}
