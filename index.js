const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('./config')
const cors = require('cors')
const mongoose = require('mongoose')
const ColorModel = require('./color/ColorModel')
const AbstractClothModel = require('./cloth/AbstractClothModel')
const ClothModel = require('./cloth/ClothModel')
const routes = require('./routes/index')
const addCompleteCloth = require('./cloth/addCompleteCloth')

const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');


let {port, env, databaseURL} = config

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api', routes)

app.get('/', (req, res) => {
  res.status(200).send('Its working!')
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
