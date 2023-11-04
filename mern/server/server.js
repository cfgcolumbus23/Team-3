const express = require('express')

//ROUTES
const getRatingsRoutes = require('./routes/getRatings')
const getArticleRoutes = require('./routes/articles')
const userRoutes = require('./routes/user')
const phoneRoutes = require('./routes/phone')
const commentRoutes = require('./routes/comments')
const eventRoutes = require('./routes/events')
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
app.get('/webhook')
app.use('/api/ratings', getRatingsRoutes)
app.use('/api/articles', getArticleRoutes)
app.use('/api/user', userRoutes)
app.use('/api/phone', phoneRoutes)
app.use('/api/comments', commentRoutes)
app.use('/api/events', eventRoutes)

// connect to db
mongoose.connect(process.env.ATLAS_URI).then(() => {
  app.listen(port, () => {
    console.log('connected to db and listening on ' + port)
  })
}).catch((error) => {
  console.log(error)
})

// listen for request
