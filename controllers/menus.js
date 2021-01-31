const Menu = require('../models/menus')
const { validationResult } = require('express-validator')

module.exports = {

    createMenu: (req, res) => {

        let { menu_name, price, menu_status, description } = req.body
        let menu = new Menu({ menu_name, price, menu_status, description })

        // error show
        let errors = validationResult(req)
        const formatter = (error) => error.msg
        if (!errors.isEmpty()) {
            return res.status(404).send({
                message: errors.formatWith(formatter).mapped(),
            });
        }

        menu.save()
            .then(menu => {
                res.status(201).json({
                    menu
                })
            })
            .catch(err => {
                res.status(500).json({
                    "message": err.message || "Some error occurred while post a book",
                })
            })

    },
    getMenu: async(req, res) => {
        let currentPage = parseInt(req.query.page) || 1
        let itemPerPage = 2
        let totalMenus = await Menu.countDocuments()
        let totalPage = Math.ceil(totalMenus / itemPerPage)

        Menu.find()
            .skip((itemPerPage * currentPage) - itemPerPage)
            .limit(itemPerPage)
            .then(menus => {
                res.status(202).json({
                    "pagination": {
                        totalMenus,
                        currentPage,
                        totalPage
                    },
                    menus
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: err.message || "Some error occurred while updating books info"
                })
            })
    },

    updateMenu: (req, res) => {

        let { menu_name, price, menu_status, description } = req.body
        let id = req.params.id

        // error show
        let errors = validationResult(req)
        const formatter = (error) => error.msg
        if (!errors.isEmpty()) {
            return res.status(404).send({
                message: errors.formatWith(formatter).mapped(),
            });
        }

        Menu.findOneAndUpdate({ _id: id }, {
                $set: {
                    menu_name,
                    price,
                    menu_status,
                    description
                }
            }, { new: true })
            .then(menu => {
                res.status(202).json({
                    menu
                })
            })
            .catch(err => {
                res.status(500).json({
                    message: err.message || "Some error occurred while updating books info"
                })
            })

    },


    deleteMenu: (req, res) => {

        let id = req.params

        Menu.findOneAndDelete({ _id: id })
            .then(menus => {
                if (!menus) {
                    return res.status(404).send({
                        message: "Menu not found ",
                    });
                } else {
                    res.status(200).json({ message: 'Menu deleted successfully' })
                }
            })
            .catch(err => {
                res.status(500).json({
                    message: err.message || "Some error occurred"
                })
            })

    },
}