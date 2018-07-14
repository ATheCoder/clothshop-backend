const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('./config')
const cors = require('cors')
const mongoose = require('mongoose')
const routes = require('./routes/index')
const multer = require('multer')
const path = require('path')
const fs = require('fs')

const swaggerUi = require('swagger-ui-express')
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');

const upload = multer({dest: "upload/"})

let {port, env, databaseURL} = config

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())
app.use(cors())
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api', routes)

app.get('/', (req, res) => {
  res.status(200).send('Its working!')
})

app.post('/api/upload', upload.single("file"), (req, res) => {
  const tempPath = req.file.path
  const targetPath = path.join("/var/www/html/uploads/", req.file.originalname)
  //const targetPath = path.join(__dirname, "./uploads/image.png")
  fs.rename(tempPath, targetPath, err => {
    if(err) res.status(500).send(err)
    else res.status(200).send(targetPath)
  })
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
