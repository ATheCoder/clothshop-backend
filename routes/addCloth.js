const addClothRouter = require('express').Router()
const addClothController = require('../cloth/addCloth')

addClothRouter.post('/addCloth', async (req, res) => {
  let {abstractClothID, color, size, pictureURL, stock} = req.body
  console.log(abstractClothID)
  if(!abstractClothID){
    res.status(400).send('Invalid arguments')
  }
  try{
    let newCloth = await addClothController(abstractClothID, size, pictureURL, color, stock)
    res.status(200).json(newCloth)
  }catch(e){
    res.status(500).send(e.message)
  }
})

module.exports = addClothRouter
