const express = require('express')
const { addToCart } = require('../controllers/addToCart')

const addToCartRouter = express.Router()

addToCartRouter.post('/addToCart', addToCart)

module.exports = addToCartRouter