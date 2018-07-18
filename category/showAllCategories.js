const categoryModel = require('../models/CategoryModel')

module.exports = async () => {
  return await categoryModel.find({})
}
