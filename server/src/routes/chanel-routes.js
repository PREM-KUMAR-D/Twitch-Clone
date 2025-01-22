const express = require('express');
const ExpressValidation = require('express-joi-validation');
const Joi = require('joi');
const {getChanelDetails} = require('../controllers/chanel-controller');
const {getAllChanels, postFollowChanel, getFollowedChanels} = require('../controllers/chanel-controller');
const {verifyToken}  = require('../middlewares/auth');

const router = express.Router();



const channelDetailSchema = Joi.object({
    chanelId: Joi.string().required()
})
const validator = ExpressValidation.createValidator();


router.post('/follow',verifyToken,validator.body(channelDetailSchema), postFollowChanel)

router.get('/follow',verifyToken, getFollowedChanels)

router.get('/:chanelId',validator.params(channelDetailSchema),getChanelDetails)
router.get('/',getAllChanels)


module.exports = router;