const Homescreen = require('../models/homescreen')
const { isEmpty } = require('../utils/checkEmptyValue')

exports.createDashboard = async (req, res, next) => {
    try {
        const { image_title } = req.body

        if (!req.file) {
            throw new Error('please upload an image')
        }

        // console.log(req.file)
        const imageURL = req.file.path

        //check image_title is not empty
        isEmpty(image_title, 'image_title')

        // if(image_title === '' || null || undefined){
        //     throw new Error('image title is required!')
        // }

        const dashboard = Homescreen.build({
            image : imageURL,
            image_title
        })

        // console.log(dashboard)

        await dashboard.save()

        res.status(200).json({
            status: 200,
            data: dashboard,
            message: 'Dashboard created successfully!'
        })

    } catch (error) {
       next(error)
    }
}

exports.getHomeImage = async (req, res, next) => {
    try {
        const dashboard = await Homescreen.findAll()

        if(dashboard.length === 0){
            throw new Error('There is no Data Available!')
        }

        // console.log(dashboard)
        res.status(200).json({
            status: 200,
            data: dashboard,
            message: "get all banner image successfully!"
        })
    } catch (error) {
       next(error)
    }
}