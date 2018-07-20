const category = require('express').Router()
const deleteCategory = require('../category/deleteCategory')
const addNewCategory = require('../category/addNewCategory')
const filterByCategory = require('../cloth/filterByCategory')
const getAllCategories = require('../category/getAllCategories')

category.delete('/category/:id', async (req, res) => {
  try {
    await deleteCategory(req.params.id)
    res.status(200).send('Success')
  }catch(e){
    res.status(404).send(e.message)
  }
})

category.post('/category/add', async (req, res) => {
  if(req.body.title){
    try{
      let newCategory = await addNewCategory(req.body.title)
      res.status(200).json(newCategory)
    }catch(e){
      res.status(500).send(e.message)
    }
  }
  else{
    res.status(400).send('Invalid Arguments')
  }
})

category.get('/category/:id', async (req, res) => {
  try{
    let id = req.params.id
    let clothes = await filterByCategory(id)
    res.status(200).json(clothes)
  }catch(e){
    res.status(500).send(e.message)
  }
})

category.get('/category', async (req, res) => {
  try{
    let allCategories = await getAllCategories()
    res.status(200).json(allCategories)
  }catch(e){
    res.status(500).send(e.message)
  }
})

module.exports = category
