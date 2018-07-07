const index = require('express').Router()
const addCompleteCloth = require('./addCompleteCloth')
const getClothes = require('./getClothes')
const id = require('./id')
const checkCartAvailability = require('./checkCartAvailability')
const getCategories = require('./getCategories')

index.use('/', addCompleteCloth)
index.use('/', getClothes)
index.use('/', id)
index.use('/', checkCartAvailability)
index.use('/', getCategories)

module.exports = index
