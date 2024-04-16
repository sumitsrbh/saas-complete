const mongoose = require('mongoose')
const dotenv = require('dotenv')
const app = require('./app')

dotenv.config({ path: `./config.env` })

//remote database
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
)

//local database.
const DBL = process.env.DATABASE_LOCAL

mongoose
  .connect(DBL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
  })
  .then((con) => {
    console.log('DB connection successful')
  })
  .catch((err) => {
    console.log('Mongo err!', err)
  })

const port = process.env.PORT || 3000
app.listen(port, () => {
  // console.log(`app runnig on port ${port}...`)
})
