const express = require('express');
const router = express.Router();
const {registerUSer, loginUSer, userInfo} = require('../controllers/userController');
const validateToken = require('../middleware/validateTokenHandler');

router.post('/register', registerUSer)
router.post('/login', loginUSer);
router.get('/user', validateToken, userInfo);

module.exports = router;