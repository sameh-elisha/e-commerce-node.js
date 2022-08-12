const Category = require('../models/categoryModel');
const factory = require('./handlerFactory');
// const catchAsync = require('./../utils/catchAsync');

// @desc    Get list of categories
// @route   GET /api/v1/categories
// @access  Public
exports.getAllCategories = factory.getAll(Category);

// @desc    Get specific category by id
// @route   GET /api/v1/categories/:id
// @access  Public
exports.getCategory = factory.getOne(Category);

// @desc    Create category
// @route   POST  /api/v1/categories
// @access  Private/Admin
exports.createCategory = factory.createOne(Category);

// @desc    Update specific category
// @route   PUT /api/v1/categories/:id
// @access  Private/Admin
exports.updateCategory = factory.updateOne(Category);
exports.deleteCategory = factory.deleteOne(Category);
