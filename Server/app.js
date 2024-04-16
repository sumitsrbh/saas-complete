const path = require('path')
const fs = require('fs')
const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')
const userRouter = require('./routers/userRoutes')
const cardRouter = require('./routers/cardRoutes')
const enquiryRouter = require('./routers/enquiryRoutes')

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}
app.use(express.json())
app.use(cors())

app.use('/api/cards', (req, res, next) => {
  // Attach the current date to the request object
  req.customDate = new Date()
  next()
})
// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

//middleware
app.use((req, res, next) => {
  // req.requestTime = new Data().toISOString()
  // console.log(req.headers)
  next()
})

app.use('/api/users', userRouter)
app.use('/api/cards', cardRouter)
app.use('/api/enquiry', enquiryRouter)

module.exports = app
