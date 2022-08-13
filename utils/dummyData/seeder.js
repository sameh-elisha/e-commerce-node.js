const fs = require('fs');
const mongoose = require('mongoose');
const path = require('path');
require('colors');

require('dotenv').config({
  path: path.resolve(__dirname, './../../config.env'),
});
const Product = require('../../models/productModel');

console.log(process.env.DATABASE);
const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
  })
  .then(() => console.log('DB connection successful!'));

// Read data
const products = JSON.parse(
  fs.readFileSync(path.resolve(__dirname, './products.json'), 'utf-8')
);

// Insert data into DB
const insertData = async () => {
  try {
    await Product.create(products, { validateBeforeSave: false });

    console.log('Data Inserted'.green.inverse);
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

// Delete data from DB
const destroyData = async () => {
  try {
    await Product.deleteMany();
    console.log('Data Destroyed'.red.inverse);
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

// node seeder.js -d
if (process.argv[2] === '-i') {
  insertData();
} else if (process.argv[2] === '-d') {
  destroyData();
}
