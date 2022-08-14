const express = require('express');

const authController = require('../controllers/authController');

const {
  addToWishList,
  removeFromWishlist,
  getLoggedUserWishlist,
} = require('../controllers/wishlistController');

const router = express.Router();

router.use(authController.protect, authController.restrictTo('user'));

router.route('/').post(addToWishList).get(getLoggedUserWishlist);

router.delete('/:productId', removeFromWishlist);

module.exports = router;
