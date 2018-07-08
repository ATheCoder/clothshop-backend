const clothModel = require('../models/ClothModel')

module.exports = async (id) => {
  return await clothModel.find({abstract: id}).populate('color').populate('abstract').populate({
    path: 'abstract',
    populate: {path: 'category'}
  })
}
