// const AddShippingAddress = require("../models/addShippingAddress");
// const PlaceOrder = require("../models/placeOrder");
// const Product = require("../models/product");

// exports.placeOrder = async (req, res) => {
//     try {
//         let orders = req.body;
//         const orderID = req.user.orderID;
//         const user = await AddShippingAddress.findOne({ where: { orderID } });

//         if (!user) {
//             return res.status(400).json({
//                 status: 400,
//                 message: 'No Order Found for User!'
//             });
//         }

//         // Convert single object to array if necessary
//         if (!Array.isArray(orders)) {
//             orders = [orders];
//         }

//         const bookOrders = [];

//         for (const order of orders) {
//             const { productID, quantity, shipping_method, payment_method } = order;
//             const isProduct = await Product.findOne({ where: { id: productID } });

//             if (!isProduct) {
//                 return res.status(400).json({
//                     status: 400,
//                     message: `Product with ID ${productID} does not exist!`
//                 });
//             }

//             const newOrder = PlaceOrder.build({
//                 orderID: user.orderID,
//                 productID,
//                 quantity,
//                 shipping_address: user.address,
//                 shipping_method,
//                 payment_method
//             });

//             bookOrders.push(newOrder);
//         }

//         console.log(bookOrders[0].toJSON());

//         res.status(200).json({
//             status: 200,
//             data: bookOrders,
//             message: 'Your orders are complete, deliver as soon as possible!'
//         });
//     } catch (error) {
//         res.status(400).json({
//             status: 400,
//             message: error.message
//         });
//     }
// };
const AddShippingAddress = require("../models/addShippingAddress");
const PlaceOrder = require("../models/placeOrder");
const Product = require("../models/product");

exports.placeOrder = async (req, res) => {
    try {
        const { total_price, shipping_address, shipping_method, payment_method,products } = req.body;
        const userID = req.user.userID;
        const user = await AddShippingAddress.findOne({ where: { userID } });

        if (!user) {
            return res.status(400).json({
                status: 400,
                message: 'No Order Found for User!'
            });
        }

        console.log(user.toJSON())

        const bookOrders = [];
        let newOrder

        for (const product of products) {
            const { productID, quantity, total_product_price } = product;
            const isProduct = await Product.findOne({ where: { id: productID } });

            if (!isProduct) {
                return res.status(400).json({
                    status: 400,
                    message: `Product with ID ${productID} does not exist!`
                });
            }

            newOrder = await PlaceOrder.create({
                userID: user.userID,
                productID,
                quantity,
                total_product_price,
                total_price,
                shipping_address: shipping_address || user.address,
                shipping_method,
                payment_method
            });

            console.log(newOrder.toJSON())

            bookOrders.push({
                productID: newOrder.productID,
                quantity: newOrder.quantity,
                total_product_price: newOrder.total_product_price
            });
        }

        console.log(bookOrders);

        const responseData = {
            userID: newOrder.userID,
            products: bookOrders,
            shipping_address: newOrder.shipping_address,
            shipping_method: newOrder.shipping_method,
            payment_method: newOrder.payment_method,
            total_price: newOrder.total_price
        }
        console.log(responseData)

        res.status(200).json({
            status: 200,
            data: responseData,
            message: 'Your orders are complete, deliver as soon as possible!'
        });
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: error.message
        });
    }
};