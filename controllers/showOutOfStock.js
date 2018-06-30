const clothModel = require('../models/ClothModel')

module.exports = async (cart) => {
  let outOfStocks = {}
  let clothIDs = Object.keys(cart)
  for(let clothID of clothIDs){
    console.log(typeof cart)
    let clothObject = await clothModel.findById(clothID)
    if(!clothObject){
      outOfStocks[clothID] = cart[clothID]
    }
    else if(clothObject.stock < cart[clothID]){
      outOfStocks[clothID] = cart[clothID] - clothObject.stock
    }
  }
  if(Object.keys(outOfStocks).length === 0){
    return false
  }
  return outOfStocks
}
