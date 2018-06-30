const orderModel = require('../models/OrderModel')
const showOutOfStock = require('./showOutOfStock')

module.exports = async (cart, emailAddress, firstName, lastName, country, streetAddress, postalCode, city, aptNumber, phoneNumber) => {
  let result = {}
  let outOfStocks = showOutOfStock(cart)
  if(outOfStocks){
    result.message = 'Out of Stock'
    result.object = outOfStocks
    return result
  }
  //TODO: substract Stock.
  let newOrder = await orderModel.create({
    email: emailAddress,
    firstName: firstName,
    lastName: lastName,
    country: country,
    streetAddress: streetAddress,
    postalCode: postalCode,
    city: city,
    aptNumber: aptNumber,
    phoneNumber: phoneNumber,
    cart: cart,
    status: 'Awaiting payment!'
  })
}
