const mongoose = require('mongoose')
const isHexColor = require('validator').isHexColor
const isURL = require('validator').isURL

let schema = mongoose.Schema({
  name: {type: String},
  hexCode: {type: String, validate: {validator: isHexColor, message: 'The Color you entered is not a valid Hex Color'}},
  pictureURL: {type: String, validate: {validator: isURL, message: 'The URL entered is Invalid!'}}
})

schema.post('save', function (error, doc, next) {
  if(error.name === 'MongoError' && error.code === 11000){
    next(new Error('Color with this name already exists!'))
  }
  else if(error){
    next(error)
  }
})

let ColorModel = mongoose.model('Color', schema)

module.exports = ColorModel
