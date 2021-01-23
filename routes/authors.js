const router = require('express').Router()
const {
    authorCreate,
    authorUpdate,
    authorsGet,
    authorDelete
} = require('../controllers/authors')

router.post('/author', authorCreate)
router.patch('/author/:id', authorUpdate)
router.get('/author', authorsGet)
router.delete('/author/:id', authorDelete)

module.exports = router