const category = require('../models/categories')
const Product = require('../models/product')
const ProductImage = require('../models/productImages')
exports.addCategory = async (req, res) => {
    try {
        const { category_name } = req.body
        if (!category_name) throw new Error("Please provide a Category Name")

        const categorylist = category.build({
            category_name
        })

        console.log(categorylist)

        await categorylist.save()

        res.status(201).json({ status: 201, data: { category_name: categorylist.category_name, categoryID: categorylist.categoryID }, message: 'category add success!' })

    } catch (error) {
        res.status.json({
            status: 400,
            message: error.message
        })
    }
}

exports.allCategory = async (req, res) => {
    try {
        const categoryID = req.query.categoryID
        let categoryData
        if (!categoryID) {
            categoryData = await category.findAll({
                include: [{
                    model: Product,
                    as: 'product_detail',
                    // attributes: { exclude: ['id', 'categoryID'] },
                    include: [{
                        model: ProductImage,
                        as: 'product_images',
                        // attributes: { exclude: ['id', 'productID'] }
                    }]
                }]
            })
        } else {
            categoryData = await category.findOne({
                where: { categoryID },
                include: [{
                    model: Product,
                    as: 'product_detail',
                    // attributes: { exclude: ['id'] },
                    include: [{
                        model: ProductImage,
                        as: 'product_images',
                        // attributes: { exclude: ['id'] }
                    }]
                }]
            })
        }


        if (!categoryData) throw new Error("there is no category")

        res.status(200).json({
            status: 200,
            data: categoryData,
            message: 'category fetch success!'
        })

    } catch (error) {
        res.status(400).json({
            status: 400,
            message: error.message
        })
    }
}
