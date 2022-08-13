const Category = require('../models/categoryModel');
const catchAsync = require('../utils/catchAsync');
const factory = require('./handlerFactory');
const SubCategory = require('../models/subCategoryModel');

// const catchAsync = require('./../utils/catchAsync');

exports.getSubCategories = catchAsync(async (req, res, next) => {
  const listOfSubCategories = await SubCategory.find({
    category: req.params.categoryId,
  });

  if (!listOfSubCategories) {
    return next(new Error('Category not found'));
  }
  res.status(200).json({
    status: 'success',
    data: listOfSubCategories,
  });
});
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
