const index = require('express').Router()
const addCompleteCloth = require('./addCompleteCloth')
const getClothes = require('./getClothes')

index.use('/', addCompleteCloth)
index.use('/', getClothes)

module.exports = index
