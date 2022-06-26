const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')
const router = require('./routes/users.routes')

dotenv.config()
const PORT = process.env.PORT || 4000
const app = express()


// middleware
app.use(express.json())
app.use(cors())

//routes
app.get('/', (req, res) => {
  res.send('NFQ servers')
})

app.use('/users', router)

// database connection
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.once('open', () => {
    console.log('Database is Connected')
})

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`)
})