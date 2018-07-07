const getCategories = require('express').Router()
const getCategoriesController = require('../controllers/getAllCategories')

getCategories.get('/getCategories', async (req, res) => {
  let allCategories = await getCategoriesController()
  res.status(200).json(allCategories)
})

module.exports = getCategories
