const AddToCart = require("../models/addToCart")
const Product = require("../models/product")

exports.addToCart = async (req, res) => {
    try {
        const { productID, quantity } = req.body

        const isProduct = await Product.findOne({where: {id: productID}})
        if(!isProduct){
            return res.status(400).json({
                status: 400,
                message: 'product not found!'
            })
        }
        console.log(isProduct.toJSON())
        const cartItem = AddToCart.build({
            productID,
            quantity
        })

        console.log(cartItem.toJSON())
        
        const cartItemData  = {
            productID: cartItem.productID,
            product_image: isProduct.display_image,
            product_name: isProduct.product_name,
            product_detail: isProduct.product_detail,
            product_price: isProduct.product_price,
            quantity: cartItem.quantity
        }

        res.status(200).json({
            status: 200,
            data: cartItemData,
            message: 'cart item added successfully!'
        })
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: error.message
        })
    }
}