const colorModel = require('./ColorModel')
const isValidObjectID = require('../helper').isValidObjectID

module.exports = async (idOrName) => {
  if(isValidObjectID(idOrName)){
    let findByID = await colorModel.findById(idOrName)
    if(!findByID) throw new Error('No color with this ID was found!')
    return findByID
  }
  let findOne = await colorModel.findOne({name_lower: idOrName.toLowerCase()})
  if(findOne) return findOne
  return await colorModel.create({name: idOrName})
}
