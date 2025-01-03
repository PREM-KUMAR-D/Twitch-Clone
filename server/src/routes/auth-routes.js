const express = require('express');

const authControlller = require('../controllers/auth-controller');

const router = express.Router();

router.post('/register',authControlller.postRegister);
router.post('/login', authControlller.postLogin);


module.exports = router;
