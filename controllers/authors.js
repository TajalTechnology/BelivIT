const Author = require('../models/author')
const { validationResult } = require('express-validator')

module.exports = {

    authorCreate: (req, res) => {

        let { name } = req.body

        //error show
        let errors = validationResult(req)
        const formatter = (error) => error.msg
        if (!errors.isEmpty()) {
            return res.status(404).send({
                message: errors.formatWith(formatter).mapped(),
            });
        }

        let author = new Author({ name })

        author.save()
            .then(author => {
                res.status(201).json({ author })
            })
            .catch(err => {
                res.status(500).json({
                    message: err.message || "Some error occurred while creating"
                })
            })

    },

    authorUpdate: (req, res) => {

        let { name } = req.body
        let { id } = req.params

        //error show
        let errors = validationResult(req)
        const formatter = (error) => error.msg
        if (!errors.isEmpty()) {
            return res.status(404).send({
                message: errors.formatWith(formatter).mapped(),
            });
        }

        Author.findOneAndUpdate(
            { _id: id },
            { $set: { name } },
            { new: true }
        )
            .then(author => {
                if (author) {
                    res.status(201).json({ author })
                }
                else {
                    return res.status(404).send({
                        message: "Author not found!!!",
                    });
                }

            })
            .catch(err => {
                res.status(500).json({
                    message: err.message || "Some error occurred while updating author"
                })
            })

    },

    authorsGet: async (req, res) => {

        let currentPage = parseInt(req.query.page) || 1
        let itemPerPage = 2
        let totalAuthors = await Author.countDocuments()
        let totalPage = Math.ceil(totalAuthors / itemPerPage)

        Author.find()
            .skip((itemPerPage * currentPage) - itemPerPage)
            .limit(itemPerPage)
            .then(authors => {
                if (authors) {
                    res.status(201).json({
                        "pagination": {
                            currentPage,
                            totalPage,
                            totalAuthors
                        },
                        authors
                    })
                }
                else {
                    return res.status(404).send({
                        message: "Authors are empty!!!",
                    });
                }
            })
            .catch(err => {
                res.status(500).json({
                    message: err.message || "Some error occurred"
                })
            })

    },

    authorDelete: (req, res) => {

        let { id } = req.params

        Author.findOneAndDelete({ _id: id })
            .then(author => {
                if (author) {
                    res.status(201).json({ message: 'Author deleted successfully' })
                }
                else {
                    return res.status(404).send({
                        message: "Author not found!!!",
                    });
                }
            })
            .catch(err => {
                res.status(500).json({
                    message: err.message || "Some error occurred while deleting author"
                })
            })

    },
}