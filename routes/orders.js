const router = require('express').Router()
const { authVerify } = require('../middleware/authVerify')
const { menusValidator } = require('../validation/orders')

const {
    authorCreate,
    orderGet
} = require('../controllers/orders')

router.post('/orders', authVerify, menusValidator, authorCreate)
router.get('/orders', orderGet)

module.exports = router