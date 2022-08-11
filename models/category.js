const mongoose = require('mongoose');
// const slugify = require('slugify');
// const User = require('./userModel');
// const validator = require('validator');

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'A Category must have a name'],
      unique: [true, 'A Category must be unique'],
      trim: true,
      minlength: [3, 'A Category must have a name of at least 3 characters'],
      maxlength: [32, 'A Category must have a name of less than 32 characters'],
    },
    slug: {
      type: String,
      lowercase: true,
    },
    description: {
      type: String,
      trim: true,
    },
    imageCover: {
      type: String,
      required: [true, 'A category must have a cover image'],
    },
  },
  {
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

const CategoryModel = mongoose.model('Category', categorySchema);

module.exports = CategoryModel;
