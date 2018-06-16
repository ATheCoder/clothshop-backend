const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const config = require('./config')
let {port, env} = config
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.status(200).send('Its working!')
})

app.listen(port, () => {
  console.log(`App is running in ${env} mode. (Listening on port: ${port})`)
})
