const router = require('express').Router()
const { bookValidator } = require('../middleware/books')

const {
    createBook,
    getBook,
    updateBook,
    deleteBook
} = require('../controllers/books')


router.post('/books', bookValidator, createBook)
router.patch('/books/:id', bookValidator, updateBook)
router.get('/books', getBook)
router.delete('/books/:id', deleteBook)


module.exports = router