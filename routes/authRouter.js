const router = require('express').Router();
const authController = require('../controllers/authController');
const auth = require('../middleware/auth');

router.post('/register', authController.register);

router.post('/login', authController.login);

router.post('/forgot', authController.forgotPassword);

router.post('/reset', auth, authController.resetPassword);

router.post('/change_password', authController.changePassword);

router.post('/logout', authController.logout);

router.post('/refresh_token', authController.generateAccessToken);

module.exports = router;
