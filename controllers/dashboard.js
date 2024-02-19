const Homescreen = require('../models/homescreen')
const { isEmpty } = require('../utils/checkEmptyValue')

exports.createDashboard = async (req, res) => {
    try {
        const { image_title } = req.body

        if (!req.file) {
            throw new Error('please upload an image')
        }

        console.log(req.file)
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

        console.log(dashboard)

        await dashboard.save()

        res.status(201).json({
            status: 201,
            data: dashboard,
            message: 'Dashboard created successfully!'
        })

    } catch (error) {
        res.status(404).json({
            status: 404,
            message: error.message
        })
    }
}

exports.getHomeImage = async (req, res) => {
    try {
        const dashboard = await Homescreen.findAll()

        console.log(dashboard)
        res.status(200).json({
            status: 200,
            data: dashboard,
            message: "get all banner image successfully!"
        })
    } catch (error) {
        console.log(error.message)
        res.status(400).json({
            status: 400,
            message: error.message
        })
    }
}