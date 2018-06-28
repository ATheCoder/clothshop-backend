const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('./config')
const mongoose = require('mongoose')
const ColorModel = require('./models/ColorModel')
const AbstractClothModel = require('./models/AbstractClothModel')
const ClothModel = require('./models/ClothModel')
const routes = require('./routes/index')
const addCompleteCloth = require('./controllers/addCompleteCloth')
let {port, env, databaseURL} = config

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use('/', routes)

app.get('/', (req, res) => {
  res.status(200).send('Its working!')
})

//Connecting to Database:
mongoose.connect(databaseURL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Successfully connected to database at: ' + databaseURL)
  mongoose.connection.db.dropDatabase();
  // ColorModel.create({name: 'Red', hexCode: '#FF0000', pictureURL: 'http://cdn7.bigcommerce.com/s-hfhomm5/images/stencil/1280x1280/products/180/451/Solid_Red_Sized__25214.1507754519.jpg?c=2&imbypass=on'}, function (err, newShit) {
  //   if(err) console.log(err)
  //   else{
  //     AbstractClothModel.create({title: 'Damane Kootah', price: 20}, function (err, newAbstractCloth) {
  //       if(err) console.log(err)
  //       let newCloth = new ClothModel({
  //         size: 'S',
  //         pictureURL: 'https://c.76.my/Malaysia/2014-korean-style-short-skirt-pants-78838-moresales-1410-27-moresales@6.jpg',
  //         color: newShit._id,
  //         sales: 0,
  //         stock: 10,
  //         abstract: newAbstractCloth
  //       })
  //       newCloth.save(function (err) {
  //         if(err) console.log(err)
  //         else{
  //           AbstractClothModel.findOne({title: 'Damane Kootah'}).populate('clothes').exec(function (err, dank) {
  //             console.log(dank)
  //           })
  //         }
  //       })
  //     })
  //   }
  // })
  addCompleteCloth('my first cloth', 200, 'XL', 'http://cdn.shopify.com/s/files/1/1231/3996/products/MK508_1024x1024.jpg?v=1487817125', '#ff0000')
});

//Staring Express Server:
app.listen(port, () => {
  console.log(`App is running in ${env} mode. (Listening on port: ${port})`)
})
