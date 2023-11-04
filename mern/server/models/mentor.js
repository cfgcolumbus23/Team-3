const mongoose = require('mongoose')

const Schema = mongoose.Schema

const mentorSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    },
    bio: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: false
    }
    
}, { timestamps: true })

module.exports = mongoose.model('mentors', mentorSchema)