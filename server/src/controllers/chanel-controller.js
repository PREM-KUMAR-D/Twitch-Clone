const user = require('../models/user');
const chanel = require('../models/channel');

exports.getChanelDetails = async(req,res,next)=>{
    try {
        const { chanelId } = req.params;

        const chanelDet = await chanel.findById(chanelId);

        if(!chanelDet){
            return res.status(404).send('Channel not found');
        }

        const userDet = await user.findOne({
            chanel: chanelId
        }, {username: 1})

        const streamUrl = 'http';

        const isOnline = false;


        return res.status(200).json({
            id : chanelDet._id,
            title : chanelDet.title,
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