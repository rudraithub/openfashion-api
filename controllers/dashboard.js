const Dashboard = require('../models/dashbord')

exports.createDashboard = async (req, res) => {
    try {
        const { image_title } = req.body

        if (!req.file) {
            throw new Error('please upload an image')
        }

        // console.log(req.file)
        const imageURL = req.file.path

        const dashboard = new Dashboard({
            image : imageURL,
            image_title
        })

        // console.log(dashboard)

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
        const dashboard = await Dashboard.find()

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