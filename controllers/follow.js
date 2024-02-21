const Follow = require('../models/follow')
const { isEmpty } = require('../utils/checkEmptyValue')

exports.addFollow = async (req, res, next) => {
    try {
        const name = req.body.name

        if (!req.file) {
            throw new Error('please upload an image')
        }

        isEmpty(name, 'name')

        console.log(req.file)
        const imageURL = req.file.path

        const follow = Follow.build({
            image: imageURL,
            name
        })

        await follow.save()
        res.status(201).json({
            status: 201,
            data: follow,
            message: "success!"
        })
    } catch (error) {
        next(error)
    }
}