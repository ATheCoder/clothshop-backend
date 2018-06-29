const id = require('express').Router()
const getClothByID = require('../controllers/getClothByID')

id.get('/id/:id', async (req, res) => {
  let clothes = await getClothByID(req.params.id)
  res.status(200).json(clothes)
})

module.exports = id
