const mongoose = require('mongoose')

const orderSchema = new mongoose.Schema({
    order_name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 45,
    },
    menus: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Menu'
    }]
}, {
    timestamps: {
        createdAt: "createdAt",
        updatedAt: "updatedAt",
    }
})

module.exports = mongoose.model('Order', orderSchema)