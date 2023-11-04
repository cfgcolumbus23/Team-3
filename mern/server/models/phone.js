const mongoose = require('mongoose')

const Schema = mongoose.Schema

const phoneSchema = new Schema({
    phoneNumber: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('phones', phoneSchema)