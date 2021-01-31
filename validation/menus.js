const { check } = require('express-validator')

module.exports = {

    menusValidator: [
        check('menu_name')
        .not()
        .isEmpty()
        .withMessage('Menu name must be required')
        .isString()
        .withMessage('Menu name Must be string')
        .isLength({ min: 3 })
        .withMessage('Must be more then 3 letters'),

        check('price')
        .not()
        .isEmpty()
        .withMessage('Price must be required')
        .isNumeric()
        .withMessage('Must be Numeric'),

        check('description')
        .not()
        .isEmpty()
        .withMessage('Description must be required')
        .isString()
        .withMessage('Description Must be string')
        .isLength({ min: 3 })
        .withMessage('Must be more then 3 letters'),

    ]

}