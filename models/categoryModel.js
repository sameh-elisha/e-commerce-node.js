const mongoose = require('mongoose');
const slugify = require('slugify');
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
    },

    photo: {
      type: String,
      default: 'default.jpg',
    },
  },
  {
    _id: false,
    timestamps: true,
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);
// DOCUMENT MIDDLEWARE: runs before .save() and .create()
categorySchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true });
  next();
});
const CategoryModel = mongoose.model('Category', categorySchema);

module.exports = CategoryModel;
