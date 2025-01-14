const user = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.postLogin = async (req, res) => {
    return res.send('this is the login route');
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
        const salt = await bcrypt.genSalt(10);
        const encPass  = await bcrypt.hash(password,salt);

        
        
        const createdUser = await user.create({
            username: username,
            password: encPass,
            email: email.toLowerCase(),
        })
        const token = jwt.sign({
            userId: user._id,
            email,
        },process.env.TOKEN_KEY,{
            expiresIn: '8h',
        });

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