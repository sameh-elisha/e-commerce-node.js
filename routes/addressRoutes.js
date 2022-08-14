const express = require('express');

const authController = require('../controllers/authController');

const {
  addAddress,
  removeAddress,
  getLoggedUserAddresses,
} = require('../controllers/addressesController');

const router = express.Router();

router.use(authController.protect, authController.restrictTo('user'));

router.route('/').post(addAddress).get(getLoggedUserAddresses);

router.delete('/:addressId', removeAddress);

module.exports = router;
