const categoryRouter = require('./categoryRoutes');
const userRouter = require('./userRoutes');
const authRouter = require('./authRoutes');
const subCategoryRouter = require('./subCategoryRoutes');
const brandRouter = require('./brandRoutes');
const productRouter = require('./productRoutes');
const reviewRouter = require('./reviewRoutes');
const wishlistRouter = require('./wishlistRoutes');
const addressesRouter = require('./addressRoutes');

const mountRoutes = (app) => {
  // 3) ROUTES
  app.use('/api/v1/categories', categoryRouter);
  // app.use('/api/v1/tours', tourRouter);
  app.use('/api/v1/users', userRouter);
  app.use('/api/v1/auth', authRouter);

  app.use('/api/v1/subcategories', subCategoryRouter);

  app.use('/api/v1/brands', brandRouter);
  app.use('/api/v1/products', productRouter);
  app.use('/api/v1/reviews', reviewRouter);
  app.use('/api/v1/wishlist', wishlistRouter);
  app.use('/api/v1/addresses', addressesRouter);
};

module.exports = mountRoutes;
