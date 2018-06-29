const abstractClothModel = require('../models/AbstractClothModel')

module.exports = async (textToSearchFor) => {
  try{
    return await abstractClothModel.find({$text: {$search: textToSearchFor}}, {score: {$meta: 'textScore'}}).sort({score: {$meta: 'textScore'}})
  }catch(e){
    throw e
  }
}
