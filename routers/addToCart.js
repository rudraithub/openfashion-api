const express = require('express')
const { addToCart, removeFromAddToCart } = require('../controllers/addToCart')

const addToCartRouter = express.Router()

addToCartRouter.post('/addToCart', addToCart)
addToCartRouter.delete('/removeItem', removeFromAddToCart)

module.exports = addToCartRouter