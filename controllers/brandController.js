const Brand = require('../models/brandModel');
const factory = require('./handlerFactory');

// @desc    Get list of Brands
// @route   GET /api/v1/Brands
// @access  Public
exports.getBrands = factory.getAll(Brand);

// @desc    Get specific Brand by id
// @route   GET /api/v1/Brands/:id
// @access  Public
exports.getBrand = factory.getOne(Brand);

// @desc    Create Brand
// @route   POST  /api/v1/Brands
// @access  Private/Admin
exports.createBrand = factory.createOne(Brand);

// @desc    Update specific Brand
// @route   PUT /api/v1/Brands/:id
// @access  Private/Admin
exports.updateBrand = factory.updateOne(Brand);
exports.deleteBrand = factory.deleteOne(Brand);
