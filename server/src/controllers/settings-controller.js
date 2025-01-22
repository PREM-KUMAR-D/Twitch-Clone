exports.getChanelSettings = async(req,res,next)=>{
    try {
        const {userId} = req.user;

        console.log(userId);

        return res.status(200).send('this channel is secured')


    } catch (error) {
        return res.status(500).send('something went wrong')
    }
}