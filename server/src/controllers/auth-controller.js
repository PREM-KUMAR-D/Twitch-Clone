export const postLogin = async (req,res)=>{
    return res.send('this is the login route');
}

export const postRegister = async(req,res)=>{  
    
    console.log(req.body);
    return res.send('This is the register route');
}