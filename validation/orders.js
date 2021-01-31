const { check } = require('express-validator')

module.exports = {

    menusValidator: [
        check('order_name')
        .not()
        .isEmpty()
        .withMessage('Order name must be required')
        .isString()
        .withMessage('Order name Must be string')
        .isLength({ min: 3 })
        .withMessage('Order be more then 3 letters'),

        check('menus')
        .not()
        .isEmpty()
        .withMessage('Please provide one element minimum')
        .isArray()
        .withMessage('Please provide an array')

    ]

}