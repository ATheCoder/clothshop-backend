const mongoose = require('mongoose')
const isValidObjectID = (string) => {
  console.log(string)
  if(!mongoose.Types.ObjectId.isValid(string)){
    return false
  }
  let objectIDString = new mongoose.Types.ObjectId(string)
  console.log(objectIDString)
  console.log((objectIDString.toString() == string))
  return objectIDString.toString() == string
}

module.exports = {isValidObjectID}
