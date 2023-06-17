const express = require('express')
const { register, login, getUserdata, getAllUser, deleteUser } = require('../controller/authController')
const {verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization} = require('../middleware/authMiddleware')
const router=express.Router()

router.post('/register',register)
router.post('/login',login)
router.get('/getuserdata/:id',verifyTokenAndAuthorization,getUserdata)
router.get('/getalluser',getAllUser)
router.post('/deleteuser',deleteUser)

module.exports=router