const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    author: [{
        type: mongoose.Schema.Types.ObjectId,
        required: true,
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

module.exports = mongoose.model('Book', bookSchema)
