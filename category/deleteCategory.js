const categoryModel = require('../models/CategoryModel')

module.exports = async (id) => {
  await categoryModel.deleteOne({_id: id})
}
