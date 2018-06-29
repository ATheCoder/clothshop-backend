const getClothes = require('express').Router()
const getAllClothes = require('../controllers/getAllClothes')
const getFeaturedClothes = require('../controllers/getFeaturedClothes')
const searchByName = require('../controllers/searchByName')

getClothes.get('/getClothes', async (req, res) => {
  try{
    if(req.query.featured){
      let featuredClothes = await getFeaturedClothes()
      res.status(200).json(featuredClothes)
    }
    else if(req.query.query){
      let results = await searchByName(req.query.query)
      res.status(200).json(results)
    }
    else{
      let allClothes = await getAllClothes()
      res.status(200).json(allClothes)
    }
  }catch(e){
    res.status(500).send(e.message)
  }
})

module.exports = getClothes
