const colorModel = require('./ColorModel')

module.exports = async (colorID) => {
  if(colorID !== undefined)
  return await colorModel.find({_id: colorID})
  else return await colorModel.find({})
}
