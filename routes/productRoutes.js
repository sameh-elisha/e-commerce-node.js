const express = require('express');
const {
  getProductValidator,
  createProductValidator,
  updateProductValidator,
  deleteProductValidator,
} = require('../utils/validators/productValidator');
const authController = require('../controllers/authController');
const { resizeProductImages } = require('../middlewares/resizeImages');
const {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  uploadProductImages,
} = require('../controllers/productController');

const router = express.Router();

router
  .route('/')
  .get(getProducts)
  .post(
    authController.protect,
    authController.restrictTo('admin', 'manager'),
    uploadProductImages,
    resizeProductImages,
    createProductValidator,
    createProduct
  );
router
  .route('/:id')
  .get(getProductValidator, getProduct)
  .put(
    authController.protect,
    authController.restrictTo('admin', 'manager'),
    uploadProductImages,
    resizeProductImages,
    updateProductValidator,
    updateProduct
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    deleteProductValidator,
    deleteProduct
  );

module.exports = router;
