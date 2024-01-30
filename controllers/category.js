const category = require('../models/categories')

exports.addCategory = async(req, res) => {
    try {
        const { category_name } = req.body
        if (!category_name) throw new Error("Please provide a Category Name")
        let categories = await category.findOne({}, {}, {sort:{ 'categoryID': -1}})

        const id = categories?.categoryID ? categories?.categoryID + 1 : 1

        const categorylist = new category({
            category_name,
            categoryID: id
        })

        console.log(categorylist)

        await categorylist.save()

        res.status(201).json({status: 201, data: {category_name: categorylist.category_name,categoryID: categorylist.categoryID }, message: 'category add success!'})

    } catch (error) {
        res.status.json({
            status: 400,
            message: error.message
        })
    }
}


exports.allCategory = async (req, res) => {
    try {
        const allCategory = await category.find().select('-_id -__v')

        if(!allCategory) throw new Error("there is no category")

        res.status(200).json({
            status: 200,
            data: allCategory,
            message: 'category fetch success!'
        })
    } catch (error) {
        res.status(400).json({
            status: 400,
            message: error.message
        })
    }
}