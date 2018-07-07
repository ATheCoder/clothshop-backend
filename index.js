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
app.use('/api', routes)

app.get('/', (req, res) => {
  res.status(200).send('Its working!')
})

app.get('/api/jenkins', (req, res) => {
  res.status(200).send('Jenkins is Working')
})

//Connecting to Database:
mongoose.connect(databaseURL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Successfully connected to database at: ' + databaseURL)
});

//Staring Express Server:
app.listen(port, () => {
  console.log(`App is running in ${env} mode. (Listening on port: ${port})`)
})
