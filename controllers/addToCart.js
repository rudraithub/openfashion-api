const AddToCart = require("../models/addToCart")
const Product = require("../models/product")
const sequelize = require('../config/dbconnect')

exports.addToCart = async (req, res, next) => {
    try {
        let cartItem
        const { productID, quantity } = req.body

        const isProduct = await Product.findOne({ where: { id: productID } })
        if (!isProduct) {
            return res.status(400).json({
                status: 400,
                message: 'product not found!'
            })
        }
        console.log(isProduct.toJSON())

        const isAddToCart = await AddToCart.findOne({ where: { productID } })
        //if product is already in add to cart just update quntity and price
        if (isAddToCart) {
            // let updateQuantity = isAddToCart.quantity += quantity
            let updateQuantity;

            if (quantity >= 0) {
                // Increment current quantity by one
                updateQuantity = isAddToCart.quantity + 1;
            } else if (quantity <= 0) {
                // Decrease current quantity by one, ensuring it doesn't go below 0
                updateQuantity = Math.max(isAddToCart.quantity - 1, 0);
            }
            const isPrice = isProduct.product_price.replace('$', '');
            updatedPrice = parseInt(isPrice) * updateQuantity;

            isAddToCart.quantity = updateQuantity
            isAddToCart.product_price = `$${updatedPrice}`.toString()
            await isAddToCart.save()

            cartItem = await AddToCart.findOne({ where: { productID } })
            console.log(cartItem)
        } else {
            cartItem = AddToCart.build({
                productID,
                quantity,
                product_price: isProduct.product_price
            })

            await cartItem.save()

            console.log(cartItem.toJSON())
        }

        const cartItemData = {
            productID: cartItem.productID,
            product_image: isProduct.display_image,
            product_name: isProduct.product_name,
            product_detail: isProduct.product_detail,
            product_price: cartItem.product_price,
            quantity: cartItem.quantity
        }

        res.status(200).json({
            status: 200,
            data: cartItemData,
            message: 'cart item added successfully!'
        })
    } catch (error) {
       next(error)
    }
}


exports.removeFromAddToCart = async (req, res, next) => {
    try {
        const {productID} = req.body 

        const cartItem = await AddToCart.destroy({where: {productID}})
        
        res.status(200).json({
            status: 200,
            data: cartItem,
            message: 'cartItem remove successfully!'
        })
    } catch (error) {
       next(error)
    }
}