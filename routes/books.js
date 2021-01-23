const router = require('express').Router()
const {
    createBook,
    getBook,
    updateBook,
    deleteBook
} = require('../controllers/books')


router.post('/books', createBook)
router.patch('/books/:id', updateBook)
router.get('/books', getBook)
router.delete('/books/:id', deleteBook)


module.exports = router