const mongoose = require('mongoose')

let schema = mongoose.Schema({
  email: {type: String, required: true},
  phoneNumber: String,
  firstName: {type: String, required: true},
  lastName: {type: String, required: true},
  country: {type: String, required: true},
  streetAddress: {type: String, required: true},
  aptNumber: Number,
  postalCode: {type: String, required: true},
  city: {type: String, required: true},
  status: {type: String, required: true},
  cart: {type: mongoose.Schema.Types.ObjectId, ref: 'Cloth'}
})

let orderModel = mongoose.model('Order', schema)

module.exports = orderModel
