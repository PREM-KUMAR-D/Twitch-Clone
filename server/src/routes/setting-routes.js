const express = require('express')
const ExpressValidation = require('express-joi-validation');
const Joi = require('joi');
const { verifyToken } = require('../middlewares/auth');
const {getChanelSettings , putChanelSettings} = require('../controllers/settings-controller');

const validator  = ExpressValidation.createValidator({});

const router = express.Router();

const chanelSettingSchema = Joi.object({
    username: Joi.string().min(3).max(12),
    description: Joi.string().min(10).max(200),
    title: Joi.string().min(3).max(30),
    avatarUrl : Joi.string().uri(),
})


router.get('/chanel', verifyToken,getChanelSettings);

router.put('/chanel',verifyToken, validator.body(chanelSettingSchema), putChanelSettings );


module.exports = router;