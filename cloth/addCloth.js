const abstractClothModel = require('./AbstractClothModel')
const clothModel = require('./ClothModel')
const isValidObjectID = require('../helper').isValidObjectID
const findOrAddColor = require('../color/findOrAddColor')

const addCloth = async (abstractObjectID, size, stock) => {
  if(!isValidObjectID(abstractObjectID)) throw new Error('This abstract Object ID is not Valid')
  let findByID = await abstractClothModel.findById(abstractObjectID)
  if(!findByID) throw new Error('No abstract Cloth with this ID is found!')
  return await clothModel.create({abstract: abstractObjectID, size:size, stock: stock})
}

module.exports = addCloth
