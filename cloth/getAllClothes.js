const abstractClothModel = require('./AbstractClothModel')

module.exports = async () => {
  try{
    return await abstractClothModel.find().populate('category')
  }
  catch(e){
    throw e
  }
}
