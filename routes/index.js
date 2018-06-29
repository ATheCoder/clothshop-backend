const index = require('express').Router()
const addCompleteCloth = require('./addCompleteCloth')
const getClothes = require('./getClothes')
const id = require('./id')

index.use('/', addCompleteCloth)
index.use('/', getClothes)
index.use('/', id)

module.exports = index
