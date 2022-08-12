const express = require('express');
const categoryController = require('../controllers/categoryController');
const authController = require('../controllers/authController');
const { uploadSingleImage } = require('../middlewares/uploadImageMiddleware');
const { resizeCategoryPhoto } = require('../middlewares/resizeImages');

const router = express.Router();

router
  .route('/')
  .get(categoryController.getAllCategories)
  .post(
    authController.protect,
    authController.restrictTo('admin'),
    uploadSingleImage,
    resizeCategoryPhoto,
    categoryController.createCategory
  );

router
  .route('/:id')
  .get(categoryController.getCategory)
  .patch(
    authController.protect,
    authController.restrictTo('admin'),
    uploadSingleImage,
    resizeCategoryPhoto,
    categoryController.updateCategory
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    categoryController.deleteCategory
  );

module.exports = router;
