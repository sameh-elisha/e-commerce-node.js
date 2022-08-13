const express = require('express');
const categoryController = require('../controllers/categoryController');
const authController = require('../controllers/authController');
const { uploadSingleImage } = require('../middlewares/uploadImageMiddleware');
const { resizeCategoryPhoto } = require('../middlewares/resizeImages');
const {
  createCategoryValidator,
  updateCategoryValidator,
  deleteCategoryValidator,
  getSubCategoryFromCateValidator,
} = require('../utils/validators/categoryValidator');
const {
  createSubCategoryValidator,
} = require('../utils/validators/subCategoryValidator');

const {
  setCategoryIdToBody,
  createSubCategory,
} = require('../controllers/subCategoryController');

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

router
  .route('/:categoryId/subcategories')
  .get(
    authController.protect,
    authController.restrictTo('admin', 'manager'),
    setCategoryIdToBody,
    getSubCategoryFromCateValidator,
    categoryController.getSubCategories
  )
  .post(
    authController.protect,
    authController.restrictTo('admin', 'manager'),
    setCategoryIdToBody,
    createSubCategoryValidator,
    createSubCategory
  );

module.exports = router;
