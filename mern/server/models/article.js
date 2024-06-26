const mongoose = require('mongoose')

const Schema = mongoose.Schema

const articleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    imageURL: {
        type: String,
        required: false
    },
    imageCaption: {
        type: String,
        required: false
    }
    
}, { timestamps: true })

module.exports = mongoose.model('articles', articleSchema)