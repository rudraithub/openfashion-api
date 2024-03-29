const Follow = require('../models/follow')
const { isEmpty } = require('../utils/checkEmptyValue')

exports.addFollow = async (req, res, next) => {
    try {
        const name = req.body.name

        if (!req.file) {
            throw new Error('please upload an image')
        }

        isEmpty(name, 'name')

        if(!isNaN(name) || name.match(/\d/)){
            throw new Error ('name should be a character')
        }

        // console.log(req.file)
        const imageURL = req.file.path

        const follow = Follow.build({
            image: imageURL,
            name
        })

        await follow.save()
        res.status(200).json({
            status: 200,
            data: follow,
            message: "success!"
        })
    } catch (error) {
        next(error)
    }
}