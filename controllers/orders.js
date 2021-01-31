const Order = require('../models/orders')
const Menu = require('../models/menus')
const { models } = require('mongoose')
const { validationResult } = require('express-validator')

module.exports = {

    authorCreate: (req, res) => {

        let { order_name, menus } = req.body
        let total = 0
            //error show
        let errors = validationResult(req)
        const formatter = (error) => error.msg
        if (!errors.isEmpty()) {
            return res.status(404).send({
                message: errors.formatWith(formatter).mapped(),
            });
        }

        let order = new Order({ order_name, menus })

        order.save()
            .then(async(order) => {

                // Shoud be used mongoose query but face some problem....i will be update command when i solve this probelm
                const orderDetails = await Order.findById(order.id).populate('menus').exec()
                for (let i = 0; i < orderDetails.menus.length; i++) {
                    total = total + orderDetails.menus[i].price
                }

                res.status(201).json({
                    "totalCost": total,
                    "userDetails": {
                        "userName": req.user.name,
                        "address": req.user.address,
                        "phone": req.user.phone
                    },
                    orderDetails,
                })

            })
            .catch(err => {
                res.status(500).json({
                    message: err.message || "Some error occurred while creating"
                })
            })

    },

    orderGet: (req, res) => {
        Order.find().populate('menus').exec()
            .then(orders => {
                if (Orders) {
                    res.status(201).json({
                        orders
                    })
                } else {
                    res.status(201).json({
                        message: "No order!"
                    })
                }
            }).catch(err => {
                res.status(500).json({
                    message: err.message || "Some error occurred while creating"
                })
            })
    }

}