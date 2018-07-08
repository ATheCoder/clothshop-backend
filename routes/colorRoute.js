const colorRoute = require('express').Router()
const addColor = require('../color/addColor')
const getColor = require('../color/getColor')
const colorModel = require('../color/ColorModel')

colorRoute.get('/color/:id', async (req, res) => {
  try{
    let colors = await getColor(req.params.id)
    res.status(200).json(colors)
  }catch(e){
    res.status(500).send(e.message)
  }
})

colorRoute.get('/color', async (req, res) => {
  try{
    let colors = await getColor()
    res.status(200).json(colors)
  }catch(e){
    res.status(500).send(e.message)
  }
})

colorRoute.post('/addColor', async (req, res) => {
  const colorObject = {
    name: req.body.name,
    hexCode: req.body.hexCode,
    pictureURL: req.body.pictureURL
  }
  try{
    let newColor = await addColor(colorObject)
    res.status(200).json(newColor)
  }catch(e){
    res.status(500).send(e.message)
  }
})


module.exports = colorRoute
