const router = require('express').Router()
const {
    authorCreate,
    authorUpdate,
    authorsGet,
    authorDelete
} = require('../controllers/authors')

router.post('/authors', authorCreate)
router.patch('/authors/:id', authorUpdate)
router.get('/authors', authorsGet)
router.delete('/authors/:id', authorDelete)

module.exports = router