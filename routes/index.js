const index = require('express').Router()
const addCompleteCloth = require('./addCompleteCloth')
const getClothes = require('./getClothes')
const id = require('./id')
const checkCartAvailability = require('./checkCartAvailability')
const getCategories = require('./getCategories')
const category = require('./category')

index.use('/', addCompleteCloth)
index.use('/', getClothes)
index.use('/', id)
index.use('/', checkCartAvailability)
index.use('/', getCategories)
index.use('/', category)

module.exports = index
