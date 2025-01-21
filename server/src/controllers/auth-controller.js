const user = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


function genToken(val){
    

    return jwt.sign({
        userId: val._id,
        email: val.email,
    },process.env.TOKEN_KEY,{
        expiresIn: '8h',
    });
}


exports.postLogin = async (req, res) => {
    try {
        const {email, password} = req.body;
    
        const userFound = await user.findOne({
            email: email.toLowerCase(),
        });

        
        
    
        if(userFound && (bcrypt.compareSync(password,userFound.password))){
            const token = genToken(userFound);
            console.log(token);
            

            return res.status(201).json({
                userDetails:{
                    email,
                    username:userFound.username,
                    token,
                },
                message: 'user logged in succesfully'
            })
        }
        return res.status(400).send("Invalid credentials ! please try again");
        
    } catch (error) {
        console.log('Error: ',error);
        return res.status(500).send('Error occured please try again!');
    }



}



exports.postRegister = async (req, res) => {

    try {

        const {username, password, email} = req.body;

        const userExists = await user.exists({
            email:email
        });
        if(userExists){
            return res.status(400).send("Email already Exists!");
        }

        const salt = bcrypt.genSaltSync(10);

        const encPass = bcrypt.hashSync(password,salt);
        
        const createdUser = await user.create({
            username: username,
            password: encPass,
            email: email.toLowerCase(),
        })
        const token = genToken(createdUser)

        return res.status(201).json({
            userDetails:{
                email,
                username,
                token,
            }
        })
    } catch (error) {
        console.log('Error occurred',error);
    }



}