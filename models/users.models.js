const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    email: String,
    first_name: String,
    last_name: String,
    lat: Number,
    lng: Number
})

module.exports = mongoose.model('usersdb', schema);
