const express = require('express');
const authValidator = require('../utils/validators/authValidator');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/signup', authValidator.signupValidator, authController.signup);
router.post('/login', authValidator.loginValidator, authController.login);
router.get('/logout', authController.logout);
router.post(
  '/forgotPassword',
  authValidator.forgotPassword,
  authController.forgotPassword
);
router.patch('/resetPassword/:token', authController.resetPassword);

module.exports = router;
