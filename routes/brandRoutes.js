const express = require('express');
const {
  getBrandValidator,
  createBrandValidator,
  updateBrandValidator,
  deleteBrandValidator,
} = require('../utils/validators/brandValidator');

const authController = require('../controllers/authController');

const {
  getBrands,
  getBrand,
  createBrand,
  updateBrand,
  deleteBrand,
} = require('../controllers/brandController');
const { resizeBrandPhoto } = require('../middlewares/resizeImages');
const { uploadSingleImage } = require('../middlewares/uploadImageMiddleware');

const router = express.Router();

router
  .route('/')
  .get(getBrands)
  .post(
    authController.protect,
    authController.restrictTo('admin', 'manager'),
    uploadSingleImage,
    resizeBrandPhoto,
    createBrandValidator,
    createBrand
  );
router
  .route('/:id')
  .get(getBrandValidator, getBrand)
  .put(
    authController.protect,
    authController.restrictTo('admin', 'manager'),
    uploadSingleImage,
    resizeBrandPhoto,
    updateBrandValidator,
    updateBrand
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    deleteBrandValidator,
    deleteBrand
  );

module.exports = router;
