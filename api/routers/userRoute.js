var express = require('express');
const User = require('./../models/User');
const userController = require('../controllers/userController');

var router = express.Router();

// get user by id || username: api/users
router.get('/', userController.getUser);

// get list user [PUT*] api/users/list
router.put('/list', userController.putListUser);

// get friend: [GET] api/users/friends
router.get('/:userId/friends', userController.getIDFriends);

module.exports = router;
