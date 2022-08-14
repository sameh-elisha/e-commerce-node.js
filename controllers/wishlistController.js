const User = require('../models/userModel');
const catchAsync = require('../utils/catchAsync');

// @desc    Add product to user wish list
// @route   POST /api/v1/wishlist
// @access  Protected/User
exports.addToWishList = catchAsync(async (req, res, next) => {
  // $addToSet => add product id to user wishlist  array if product not exist
  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      $addToSet: { wishlist: req.body.productId },
    },
    { new: true }
  ).populate('wishlist');

  res.status(200).json({
    status: 'success',
    message: 'Product added successfully.',
    data: user.wishlist,
  });
});

// @desc    Remove product from user wishlist
// @route   DELETE /api/v1/wishlist/:productId
// @access  Protected/User
exports.removeFromWishlist = catchAsync(async (req, res, next) => {
  // $pull => remove address object from user addresses array if addressId exist
  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      $pull: { wishlist: req.params.productId },
    },
    { new: true }
  ).populate('wishlist');

  res.status(200).json({
    status: 'success',
    message: 'Product removed successfully.',
    data: user.wishlist,
  });
});

// @desc    Get logged user wishlist
// @route   GET /api/v1/wishlist
// @access  Protected/User
exports.getLoggedUserWishlist = catchAsync(async (req, res, next) => {
  const user = await User.findById(req.user._id).populate('wishlist');

  res.status(200).json({
    status: 'success',
    results: user.wishlist.length,
    data: user.wishlist,
  });
});
