const category = require('../models/categories')
const Product = require('../models/product')
const ProductImage = require('../models/productImages')
exports.addCategory = async (req, res, next) => {
    try {
        const { category_name } = req.body
        if (!category_name) throw new Error("Please provide a Category Name")

        if (!isNaN(category_name)) throw new Error('category name should be character')

        const categorylist = category.build({
            category_name
        })

        // console.log(categorylist)

        await categorylist.save()

        res.status(200).json({ status: 200, data: { category_name: categorylist.category_name, categoryID: categorylist.categoryID }, message: 'category add success!' })

    } catch (error) {
        next(error)
    }
}

exports.allCategory = async (req, res, next) => {
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

            categoryData = categoryData.filter(category => {
                return category.product_detail.length > 0;
            }); 

            // Filter products with images for each category
            categoryData = categoryData.map(category => ({
                ...category.toJSON(),
                product_detail: category.product_detail.filter(prod => prod.product_images.length > 0)
            }))

            if(!categoryData.length) throw new Error('there is no category')

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

            categoryData = {
                ...categoryData.toJSON(),
                product_detail : categoryData.product_detail.filter(prod => prod.product_images.length > 0)
            }
            if (!categoryData) throw new Error("there is no category")
        }

        res.status(200).json({
            status: 200,
            data: categoryData,
            message: 'category fetch success!'
        })

    } catch (error) {
        next(error)
    }
}
