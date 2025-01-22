const express = require('express')
const ExpressValidation = require('express-joi-validation');
const Joi = require('joi');
const { verifyToken } = require('../middlewares/auth');
const {getChanelSettings} = require('../controllers/settings-controller');

const validator  = ExpressValidation.createValidator({});

const router = express.Router();

router.get('/chanel', verifyToken,getChanelSettings);


module.exports = router;