exports.getChanelDetails = (req,res,next)=>{
    console.log(req);

    return res.status(200).json({
        id : 1,
        title : 'Chanel',
        description: 'Dummy',
        isOnline: false,
        streamUrl: 'http',
    })
}