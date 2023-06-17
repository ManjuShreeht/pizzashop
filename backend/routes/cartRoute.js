const express = require('express')

const {verifyToken, verifyTokenAndAdmin, verifyTokenAndAuthorization} = require('../middleware/authMiddleware')
const { addcart, getcart, deletecart, updatecart, deleteusercart } = require('../controller/cartController')
const router=express.Router()

router.post('/addcart',addcart)
router.post('/usercart',getcart)
router.post('/deletecart',deletecart)
router.put('/updatecart',updatecart)
router.post('/deleteusercart',deleteusercart)

module.exports=router