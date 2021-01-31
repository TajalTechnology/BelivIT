const router = require('express').Router()
const { authVerify } = require('../middleware/authVerify')
const { menusValidator } = require('../validation/menus')

const {
    createMenu,
    getMenu,
    updateMenu,
    deleteMenu
} = require('../controllers/menus')


router.post('/menus', authVerify, menusValidator, createMenu)
router.patch('/menus/:id', authVerify, menusValidator, updateMenu)
router.get('/menus', authVerify, getMenu)
router.delete('/menus/:id', authVerify, deleteMenu)


module.exports = router