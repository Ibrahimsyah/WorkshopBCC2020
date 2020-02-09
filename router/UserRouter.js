const router = require('express').Router()
const userController = require('../controller/UserController')

//info: menghandle semua request dari /user
//get semua user
router.get('/', userController.getAllUser)

//get salah satu user
router.get('/:id', userController.getUserById)

//daftar user
router.post('/register', userController.registerUser)

//login user
router.post('/login', userController.loginUser)

//update nama user
router.put('/:id', userController.updateUserName)

//delete user
router.delete('/:id', userController.deleteUser)

module.exports = router