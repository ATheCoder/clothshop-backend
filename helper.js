const mongoose = require('mongoose')
const isValidObjectID = (string) => {
  if(!mongoose.Types.ObjectId.isValid(string)){
    return false
  }
  let objectIDString = new mongoose.Types.ObjectId(string)
  return objectIDString.toString() === string
}

module.exports = {isValidObjectID}
