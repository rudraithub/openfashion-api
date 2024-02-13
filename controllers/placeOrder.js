const AddShippingAddress = require("../models/addShippingAddress");
const PlaceOrder = require("../models/placeOrder");
const Product = require("../models/product");

exports.placeOrder = async (req, res) => {
    try {
        const orders = req.body;
        const orderID = req.user.orderID;
        const user = await AddShippingAddress.findOne({ where: { orderID } });

        if (!user) {
            return res.status(400).json({
                status: 400,
                message: 'No Order Found for User!'
            });
        }

        const bookOrders = [];

        for (const order of orders) {
            const { productID, quantity, shipping_method, payment_method } = order;
            const isProduct = await Product.findOne({ where: { id: productID } });

            if (!isProduct) {
                return res.status(400).json({
                    status: 400,
                    message: `Product with ID ${productID} does not exist!`
                });
            }

            const newOrder = PlaceOrder.build({
                orderID: user.orderID,
                productID,
                quantity,
                shipping_address: user.address,
                shipping_method,
                payment_method
            });

            bookOrders.push(newOrder);
        }

        console.log(bookOrders);

        res.status(200).json({
            status: 200,
            data: bookOrders,
            message: 'Your orders are complete, deliver as soon as possible!'
        });
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: error.message
        });
    }
};
