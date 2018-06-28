const getClothes = require('express').Router()
const getAllClothes = require('../controllers/getAllClothes')

getClothes.get('/getClothes', async (req, res) => {
  let allClothes = await getAllClothes()
  res.status(200).json(allClothes)
})

module.exports = getClothes
