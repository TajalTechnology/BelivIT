const mongoose = require('mongoose')

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength:3,
        maxlength:45,
    }
})

module.exports = mongoose.model('Author', authorSchema)