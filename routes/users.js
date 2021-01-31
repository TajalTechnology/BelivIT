const router = require('express').Router()
const { authVerify } = require('../middleware/authVerify')
const { userValidator } = require('../validation/users')

const {
    createUser,
    updateUser,
    userDelete,
    logIn,
    logout

} = require('../controllers/users')

router.post('/user', userValidator, createUser)
router.post('/log-in', userValidator, logIn)
    // router.post('/log-out', authVerify, logout)
router.put('/user/:id', authVerify, updateUser)
router.delete('/user/:id', authVerify, userDelete)


module.exports = router