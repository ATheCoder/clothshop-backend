const category = require('express').Router()
const deleteCategory = require('../category/deleteCategory')

category.delete('/category/:id', async (req, res) => {
  try {
    await deleteCategory(req.params.id)
    res.status(200).send('Success')
  }catch(e){
    res.status(404).send(e.message)
  }
})

module.exports = category
