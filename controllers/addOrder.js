const orderModel = require('../models/OrderModel')
const showOutOfStock = require('./showOutOfStock')
const clothModel = require('../cloth/ClothModel')

module.exports = async (cart, emailAddress, firstName, lastName, country, streetAddress, postalCode, city, aptNumber, phoneNumber) => {
  let result = {}
  let outOfStocks = showOutOfStock(cart)
  if(outOfStocks){
    result.message = 'Out of Stock'
    result.object = outOfStocks
    return result
  }
  await substractStock(cart)
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
  result.message = 'Order created'
  result.object = newOrder
  return result
}

const substractStock = async (cart) => {
  let clothes = Object.keys(cart)
  for(let cloth of clothes){
    await clothModel.findByIdAndUpdate(cloth, {$inc: {stock: -Number(cart[cloth])}})
  }
}
