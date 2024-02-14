const express = require('express')
const auth = require('../middlewere/auth')
const { placeOrder } = require('../controllers/placeOrder')

const orderRouter = express.Router()

orderRouter.post('/order',auth, placeOrder)

module.exports = orderRouter