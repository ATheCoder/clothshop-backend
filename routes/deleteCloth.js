const deleteClothRouter = require('express').Router()
const deleteCloth = require('../cloth/deleteClothByID')

deleteClothRouter.delete('/cloth/:id', async (req, res) => {
  let clothID = req.params.id
  try{
    await deleteCloth(clothID)
    res.status(200).send('Success!')
  }catch(e){
    res.status(500).send(e.message)
  }
})

module.exports = deleteClothRouter
