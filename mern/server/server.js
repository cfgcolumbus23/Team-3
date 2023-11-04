const express = require('express')
const getRatingsRoutes = require('./routes/getRatings')
const mongoose = require('mongoose')
//express app
const app = express()
require("dotenv").config({ path: "./config.env" });

port = process.env.PORT

//middleware
app.use(express.json())
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next()
})

//routes
app.get('/', (req, res) => {
  res.json({mssg: "Welcome to the app"})
})
app.use('/api/ratings', getRatingsRoutes)

// connect to db
mongoose.connect(process.env.ATLAS_URI).then(() => {
  app.listen(port, () => {
    console.log('connected to db and listening on ' + port)
  })
}).catch((error) => {
  console.log(error)
})

// listen for request
