const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const { uploadSingleImage } = require('../middlewares/uploadImageMiddleware');
const { resizeUserPhoto } = require('../middlewares/resizeImages');
const {
  getUserValidator,
  createUserValidator,
  updateUserValidator,
  deleteUserValidator,
  changeUserPasswordValidator,
  updateLoggedUserValidator,
} = require('../utils/validators/userValidator');
const {
  addAddress,
  removeAddress,
  getLoggedUserAddresses,
} = require('../controllers/addressesController');

const router = express.Router();

// Protect all routes after this middleware
router.use(authController.protect);

// @desc Addresses Routes
router
  .route('/addresses')
  .post(authController.restrictTo('user'), addAddress)
  .get(authController.restrictTo('user'), getLoggedUserAddresses);

router.delete(
  '/addresses/:addressId',
  authController.restrictTo('user'),
  removeAddress
);

// @desc User Routes
router.patch(
  '/updateMyPassword',
  changeUserPasswordValidator,
  authController.updatePassword
);
router.get('/me', userController.getMe, userController.getUser);
router.patch(
  '/updateMe',
  uploadSingleImage,
  resizeUserPhoto,
  updateLoggedUserValidator,
  userController.updateMe
);
router.delete('/deleteMe', deleteUserValidator, userController.deleteMe);

// @desc Admin manage users Routes
router.use(authController.restrictTo('admin', 'manager'));

router
  .route('/')
  .get(userController.getAllUsers)
  .post(
    uploadSingleImage,
    resizeUserPhoto,
    createUserValidator,
    userController.createUser
  );

router
  .route('/:id')
  .get(getUserValidator, userController.getUser)
  .patch(updateUserValidator, userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
