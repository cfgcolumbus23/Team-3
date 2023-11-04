const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ratingsSchema = new Schema({
    page: {
        type: String,
        required: true
    },
    numSmile: {
        type: Number,
        required: true
    },
    numNeutral: {
        type: Number,
        required: true
    },
    numFrown: {
        type: Number,
        required: true
    },
    
}, { timestamps: true })

module.exports = mongoose.model('pageRating', ratingsSchema)