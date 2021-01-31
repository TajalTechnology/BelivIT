const mongoose = require('mongoose')

const menuSchema = new mongoose.Schema({
        menu_name: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
            maxlength: 45,

        },
        price: {
            type: Number,
            required: true,
            minlength: 2,
        },
        menu_status: {
            type: Boolean,
            default: true
        },
        description: {
            type: String,
            required: true,
            trim: true,
            minlength: 3,
            maxlength: 45,
            faker: 'lorem.words',
        }

    }, {
        timestamps: {
            createdAt: "createdAt",
            updatedAt: "updatedAt",
        }
    }

)

module.exports = mongoose.model('Menu', menuSchema)