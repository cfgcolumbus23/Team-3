const mongoose = require('mongoose')

const Schema = mongoose.Schema

const commentSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    number: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('comments', commentSchema)