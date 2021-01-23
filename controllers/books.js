const Book = require('../models/book')

module.exports = {
    
    createBook:(req, res)=>{
        let { name, publisher, author} = req.body
        
        let book = new Book({
            name,
            publisher,
            author
        })

        book.save()
            .then(book => {
                res.status(201).json({ book })
            })
            .catch(err => {
                res.status(400).json({ err })
            })

    },
    updateBook:(req, res)=>{
        let { name, publisher, author} = req.body
        let { id } = req.params

        Book.findOneAndUpdate(
            { _id: id },
            { $set: { 
                name,
                publisher,
                author, 
             } },
            { new: true }
        )
            .then(book => {
                console.log('Hello')
                res.status(201).json({ book })
            })
            .catch(err => {
                res.status(400).json({ err })
            })

    },
    getBook:(req, res)=>{
        
        Book.find()
        .populate('author')
        .exec()
            .then(books => {
                res.status(201).json({ books })
            })
            .catch(err => {
                res.status(400).json({ err })
            })

    },
    deleteBook:(req, res)=>{
        let { id } = req.params

        Book.findOneAndDelete({ _id: id })
            .then(() => {
                res.status(201).json({ message: 'Book deleted successfully' })
            })
            .catch(err => {
                res.status(400).json({ err })
            })
    },
}