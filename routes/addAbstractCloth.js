const addAbstractClothRouter = require('express').Router()
const addAbstractClothController = require('../cloth/addNewAbstractCloth')

addAbstractClothRouter.post('/addAbstractCloth', async (req, res) => {
  let {title, featured, price, category, pictureURL, color} = req.body
  if(!title || !price || !color){
    return res.status(400).send('Invalid Input')
  }
  try{
    let newAbstractCloth = await addAbstractClothController(title, price, color, category, pictureURL, featured)
    res.status(200).json(newAbstractCloth)
  }catch(e){
    res.status(500).send(e.message)
  }
})

module.exports = addAbstractClothRouter
