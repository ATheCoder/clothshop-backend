const abstractClothModel = require('./AbstractClothModel')

module.exports = async (textToSearchFor) => {
  try{
    return await abstractClothModel.find({$text: {$search: textToSearchFor}}, {score: {$meta: 'textScore'}}).sort({score: {$meta: 'textScore'}}).populate('color').populate('category')
  }catch(e){
    throw e
  }
}
