const express = require('express');
const ExpressValidation = require('express-joi-validation');
const Joi = require('joi');
const {getChanelDetails} = require('../controllers/chanel-controller');
const {getAllChanels} = require('../controllers/chanel-controller');

const router = express.Router();



const channelDetailSchema = Joi.object({
    chanelId: Joi.string().required()
})
const validator = ExpressValidation.createValidator();



router.get('/:chanelId',validator.params(channelDetailSchema),getChanelDetails)
router.get('/',getAllChanels)


module.exports = router;