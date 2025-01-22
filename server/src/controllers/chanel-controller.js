const user = require('../models/user');
const chanel = require('../models/channel');

exports.getChanelDetails = async (req, res, next) => {
    try {
        const { chanelId } = req.params;

        const chanelDet = await chanel.findById(chanelId);

        if (!chanelDet) {
            return res.status(404).send('Channel not found');
        }

        const userDet = await user.findOne({
            chanel: chanelId
        }, { username: 1 })

        const streamUrl = 'http';

        const isOnline = false;


        return res.status(200).json({
            id: chanelDet._id,
            title: chanelDet.title,
            description: chanelDet.description,
            isOnline,
            streamUrl,
            username: userDet.username,
        })

    } catch (error) {
        console.log(error)
        return res.status(500).send("Something went wrong")
    }

}

exports.getAllChanels = async (req, res, next) => {
    try {
        const users = await user.find({}, {
            chanel: 1,
            username: 1,
        }).populate('chanel');

        const chanels = users
            .map(u => {

                console.log(u.toObject());
                return {
                    id: u.chanel._id,
                    title: u.chanel.title,
                    avatarUrl: u.chanel.avatarUrl,
                    username: u.username,
                    isOnline: false,
                    description: u.chanel.description,
                }
            })
        // .filter((user) => user.chanel.isActive)

        return res.json({
            chanels
        })


    } catch (error) {
        console.log(error)
        return res.status(500).send("Something went wrong")
    }
}