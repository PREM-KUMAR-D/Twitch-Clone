const express = require('express');
const Joi = require('joi');
const ExpressValidation = require('express-joi-validation');


const authControlller = require('../controllers/auth-controller');

const router = express.Router();

const validator = ExpressValidation.createValidator({});

const registerSchema = Joi.object({
    username: Joi.string().min(3).max(12).required(),
    password: Joi.string().min(6).max(12).required(),
    email: Joi.string().email().required(),
})

const loginSchema = Joi.object({
    password: Joi.string().min(6).max(12).required(),
    email: Joi.string().email().required(),
})


router.post('/register',validator.body(registerSchema),authControlller.postRegister);
router.post('/login', validator.body(loginSchema),authControlller.postLogin);


module.exports = router;
