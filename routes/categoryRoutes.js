const express = require('express');
const categoryController = require('../controllers/categoryController');
const authController = require('../controllers/authController');
const { uploadSingleImage } = require('../middlewares/uploadImageMiddleware');
const { resizeCategoryPhoto } = require('../middlewares/resizeImages');
const {
  createCategoryValidator,
  updateCategoryValidator,
  deleteCategoryValidator,
} = require('../utils/validators/categoryValidator');

const router = express.Router();

router
  .route('/')
  .get(categoryController.getAllCategories)
  .post(
    authController.protect,
    authController.restrictTo('admin', 'manager'),
    uploadSingleImage,
    resizeCategoryPhoto,
    createCategoryValidator,
    categoryController.createCategory
  );

router
  .route('/:id')
  .get(categoryController.getCategory)
  .patch(
    authController.protect,
    authController.restrictTo('admin', 'manager'),
    uploadSingleImage,
    resizeCategoryPhoto,
    updateCategoryValidator,
    categoryController.updateCategory
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    deleteCategoryValidator,
    categoryController.deleteCategory
  );

module.exports = router;
