const multer = require('multer');
const AppError = require('../utils/appError');

const multerOptions = () => {
  const multerStorage = multer.memoryStorage();

  const multerFilter = function (req, file, cb) {
    if (file.mimetype.startsWith('image')) {
      cb(null, true);
    } else {
      cb(new AppError('Only Images allowed', 400));
    }
  };

  const upload = multer({ storage: multerStorage, fileFilter: multerFilter });
  return upload;
};

exports.uploadSingleImage = multerOptions().single('photo');

/*
    @arrayOfFields like this:
[
  { name: 'imageCover', maxCount: 1 },
  { name: 'images', maxCount: 3 }
]
*/
exports.uploadMixOfImages = (arrayOfFields) =>
  multerOptions().fields(arrayOfFields);
