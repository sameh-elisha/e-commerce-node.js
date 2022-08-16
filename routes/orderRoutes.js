const express = require('express');
const {
  createCashOrder,
  findAllOrders,
  findSpecificOrder,
  filterOrderForLoggedUser,
  updateOrderToPaid,
  updateOrderToDelivered,
  checkoutSession,
} = require('../controllers/orderController');

const authController = require('../controllers/authController');

const router = express.Router();

router.use(authController.protect);

router.get(
  '/checkout-session/:cartId',
  authController.restrictTo('user'),
  checkoutSession
);

router
  .route('/:cartId')
  .post(authController.restrictTo('user'), createCashOrder);
router.get(
  '/',
  authController.restrictTo('user', 'admin', 'manager'),
  filterOrderForLoggedUser,
  findAllOrders
);
router.get('/:id', findSpecificOrder);

router.put(
  '/:id/pay',
  authController.restrictTo('admin', 'manager'),
  updateOrderToPaid
);
router.put(
  '/:id/deliver',
  authController.restrictTo('admin', 'manager'),
  updateOrderToDelivered
);

module.exports = router;
