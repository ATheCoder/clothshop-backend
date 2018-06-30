const checkCartAvailability = require('express').Router()
const showOutOfStock = require('../controllers/showOutOfStock')

checkCartAvailability.post('/checkCartAvailability', async (req, res) => {
  try{
    let {cart} = req.body
    cart = JSON.parse(cart)
    let outOfStocks = await showOutOfStock(cart)
    if(outOfStocks){
      res.status(200).json(outOfStocks)
    }
    else res.status(200).json({})
  }catch(e){
    res.status(500).send(e.message)
  }
})

module.exports = checkCartAvailability
