const express = require('express');
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const { uploadSingleImage } = require('../middlewares/uploadImageMiddleware');
const { resizeUserPhoto } = require('../middlewares/resizeImages');
const userValidator = require('../utils/validators/userValidator');

const router = express.Router();

// Protect all routes after this middleware
router.use(authController.protect);

router.patch(
  '/updateMyPassword',
  userValidator.changeUserPasswordValidator,
  authController.updatePassword
);
router.get('/me', userController.getMe, userController.getUser);
router.patch(
  '/updateMe',
  uploadSingleImage,
  resizeUserPhoto,
  userValidator.updateLoggedUserValidator,
  userController.updateMe
);
router.delete(
  '/deleteMe',
  userValidator.deleteUserValidator,
  userController.deleteMe
);

router.use(authController.restrictTo('admin'));

router
  .route('/')
  .get(userController.getAllUsers)
  .post(
    uploadSingleImage,
    resizeUserPhoto,
    userValidator.createUserValidator,
    userController.createUser
  );

router
  .route('/:id')
  .get(userController.getUser)
  .patch(userValidator.updateUserValidator, userController.updateUser)
  .delete(userController.deleteUser);

module.exports = router;
