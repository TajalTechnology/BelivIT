const Author = require('../models/author')

module.exports = {

    authorCreate: (req, res) => {

        let { name } = req.body
        let author = new Author({
            name
        })

        author.save()
            .then(author => {
                res.status(201).json({ author })
            })
            .catch(err => {
                res.status(400).json({ err })
            })

    },

    authorUpdate: (req, res) => {

        let { name } = req.body
        let { id } = req.params

        Author.findOneAndUpdate(
            { _id: id },
            { $set: { name } },
            { new: true }
        )
            .then(author => {
                res.status(201).json({ author })
            })
            .catch(err => {
                res.status(400).json({ err })
            })

    },

    authorsGet: (req, res) => {
        Author.find()
            .then(authors => {
                res.status(201).json({ authors })
            })
            .catch(err => {
                res.status(400).json({ err })
            })

    },
    
    authorDelete: (req, res) => {

        let { id } = req.params

        Author.findOneAndDelete({ _id: id })
            .then(() => {
                res.status(201).json({ message: 'Author deleted successfully' })
            })
            .catch(err => {
                res.status(400).json({ err })
            })

    },
}