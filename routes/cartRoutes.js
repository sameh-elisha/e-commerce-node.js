const express = require('express');

const {
  addProductToCart,
  applyCoupon,
  clearCart,
  removeSpecificCartItem,
  getLoggedUserCart,
  updateCartItemQuantity,
} = require('../controllers/cartController');

const authController = require('../controllers/authController');

const router = express.Router();

router.use(authController.protect, authController.restrictTo('user'));

router
  .route('/')
  .get(getLoggedUserCart)
  .delete(clearCart)
  .post(addProductToCart);
router
  .route('/:itemId')
  .delete(removeSpecificCartItem)
  .patch(updateCartItemQuantity);
router.route('/applyCoupon').put(applyCoupon);

module.exports = router;
