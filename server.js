const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')
const path = require('path')
const router = require('./routes/users.routes')

dotenv.config()
const PORT = process.env.PORT || 4000
const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// middleware
app.use(express.json())
app.use(cors())

//routes
app.use(express.static(path.join(__dirname, "./client/build")))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build', 'index.html'))
})

app.get('/explore', (req, res) => {
  res.sendFile(path.join(__dirname, './client/build', 'index.html'))
})

app.use('/users', router)

// database connection
mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.once('open', () => {
    console.log('Database is Connected')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})