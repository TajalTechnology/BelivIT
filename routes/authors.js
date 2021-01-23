const router = require('express').Router()
const { authorCreate } = require('../controllers/authors')

router.post('/author', authorCreate)

module.exports = router