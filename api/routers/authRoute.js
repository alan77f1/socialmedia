const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// register: [POST] api/auth/register
router.post('/register', authController.postRegister);

// login: [POST] api/auth/login
router.post('/login', authController.postLogin);

module.exports = router;
