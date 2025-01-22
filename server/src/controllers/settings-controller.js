const user = require('../models/user');
const chanel = require('../models/channel');

exports.getChanelSettings = async(req,res,next)=>{
    try {
        const {userId} = req.user;

        

        const userData = await user.findById(userId,{
            chanel: 1,
            username: 1,
        }).populate('chanel');

        console.log(userData)

        return res.status(200).json({
            id: userData.chanel._id,
            username: userData.username,
            title: userData.chanel.title,
            description: userData.chanel.description,
            avatarUrl : userData.chanel.avatarUrl,
            streamKey: userData.chanel.streamKey,
        })


    } catch (error) {
        return res.status(500).send('something went wrong')
    }
}


exports.putChanelSettings = async(req,res,next)=>{
    try {
        const {userId}  = req.user;

        const { title, description, username , avatarUrl} = req.body;

        const userData = await user.findById(userId,{
            chanel: 1,
            username: 1
        })

        if(userData.username !== username){
            await user.updateOne({
                _id: userId
            },{
                username
            })
        }

        const chanelData  = await chanel.findByIdAndUpdate(userData.chanel, {
            title,
            description,
            avatarUrl,
            isActive: true,

        },{new: true})

        return res.status(200).json({
            username,
            title: chanelData.title,
            description: chanelData.description,
            avatarUrl: chanelData.avatarUrl,
            chanelId: chanelData._id,
        })

    } catch (error) {
        return res.status(500).send('something went wrong')
    }
}