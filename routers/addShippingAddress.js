const express = require('express')
const { addShippingAddress } = require('../controllers/addShippingAdsress')

const shippingRouter = express.Router()

shippingRouter.post('/add/shiiping/address', addShippingAddress)

module.exports = shippingRouter