const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength:3,
        maxlength:45,
    },
    publisher: {
        type: String,
        required: true,
        trim: true,
        minlength:3,
        maxlength:45,
    },
    author: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Author'
    }]
},
    {
        timestamps: {
            createdAt: "CrtAt",
            updatedAt: "UrtAt",
        }
    }

)

bookSchema.index({ "name": 1, "author": 1 }, { unique: true, background: true })
module.exports = mongoose.model('Book', bookSchema)
