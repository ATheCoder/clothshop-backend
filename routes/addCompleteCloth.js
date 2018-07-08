const addCompleteCloth = require('express').Router()
const addCompleteClothController = require('../cloth/addCompleteCloth')

addCompleteCloth.post('/addCompleteCloth', async (req, res) => {
  let {title, price, size, pictureURL, colorHexCode, featured, category} = req.body
  if(title && price && size && pictureURL && colorHexCode){
    try{
      let newCloth = await addCompleteClothController(title, price, size, pictureURL, colorHexCode, featured, category)
      console.log('IM IN!!!')
      res.status(200).json(newCloth)
    }
    catch(e){
      res.status(500).send(e.message)
    }
  }
  else res.status(400).send('Invalid parameters!')
})

module.exports = addCompleteCloth
