const router = require('express').Router()
const {authorValidator} =require('../middleware/authors')

const {
    authorCreate,
    authorUpdate,
    authorsGet,
    authorDelete
} = require('../controllers/authors')


router.post('/authors', authorValidator,authorCreate)
router.patch('/authors/:id',authorValidator, authorUpdate)
router.get('/authors', authorsGet)
router.delete('/authors/:id', authorDelete)


module.exports = router