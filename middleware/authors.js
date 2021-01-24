const { check } = require('express-validator')

module.exports = {

    authorValidator: [
        check('name')
            .not()
            .isEmpty()
            .withMessage('Name must be required')
            .isString()
            .withMessage('Name Must be string')
            .isLength({ min: 3 })
            .withMessage('Must be more then 3 letters')
    ]

}