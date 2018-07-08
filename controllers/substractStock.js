const clothModel = require('../cloth/ClothModel')

module.exports = async (cart) => {
  let clothIDs = Object.keys(cart)
  for(let clothID of clothIDs){
    let clothObject = await clothModel.findById(clothID)
    clothObject.stock--
    await clothObject.save()
  }
}
