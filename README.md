# E-commerce API

> Backend API for E-commerce application.
## Usage

Rename "config/config.env.env" to "config/config.env" and update the values/settings to your own

## Install Dependencies

```
npm install
```

## Run App

```
# Run in dev mode
npm run dev
# Run in prod mode
npm start
```

## Database Seeder

To seed the database with users, bootcamps, courses and reviews with data from the "\_data" folder, run

```
# Destroy all data
node seeder -d
# Import all data
node seeder -i
```

# Documenetation & Demo

Extensive documentation with examples [here](https://documenter.getpostman.com/view/16890975/VUjTjhnx#intro)


# API Specifications

### Users & Authentication
- Authentication will be using JWT/cookies
  * JWT and cookie should expire in 30 days
- User registration
  * Register as a "user" or "publisher"
  * Once registered, a token will be sent along with a cookie (token = xxx)
  * Passwords must be hashed
- User login
  * User can login with email and password
  * Plain text password will compare with stored hashed password
  * Once logged in, a token will be sent along with a cookie (token = xxx)
- User logout
  * Cookie will be sent to set token = none
- Get user
  * Route to get the currently logged in user (via token)
- Password reset (lost password)
  * User can request to reset password
  * A hashed token will be emailed to the users registered email address
  * A put request can be made to the generated url to reset password
  * The token will expire after 10 minutes
- Update user info
  * Authenticated user only
  * Separate route to update password
- User CRUD
  * Admin only
- Users can only be made admin by updating the database field manually

## Security
- Encrypt passwords and reset tokens
- Prevent NoSQL injections
- Add headers for security (helmet)
- Prevent cross site scripting - XSS
- Add a rate limit for requests of 100 requests per 10 minutes
- Protect against http param polution
- Use cors to make API public


### E-commerce
- List all products in the database
   * Pagination
   * Select specific fields in result
   * Limit number of results
   * Filter by fields
   * Search by keywords
  * Use a geocoder to get exact location and coords from a single address field
  * Authenticated users only

## Categories
* POST
  * Create category
* GET
  * Get list of categories
* GET
  * Get specific category
* PATCH
  * Update specific category
* DEL
  * Delete specific category
 
## Sub Categories
* POST
  * Create SubCategory
* GET
  * Get lsit of subcategories
* GET
  * Get specific subcategory
* PATCH
  * Update subcategory
* DEL
  * Delete subcategory

## Categories/subs
* GET
  * Get list of subcategories for specific category
* POST
  * Create subcategory on category
  
## Brands
* POST
  * Create Brand
* GET
  * Get list of Brands
* GET
  * Get specific Brand
* PATCH
  * Update specific Brand
* DEL
  * Delete specific Brand

## Products
* POST
  * Create Product
* GET
  * Get list of Products
* GET
  * Get specific Product
* PATCH
  * Update specific Product
* DEL
  * Delete specific Product

## Users (Admin)
* POST
  * Create User
* GET
  * Get list of Users
* GET
  * Get specific User
* PATCH
  * Update specific User
* PATCH
  * Change User Password
* DEL
  * Delete specific User
 
## Reviews
* POST
  * Create Review
* GET
  * Get all reviews
* GET
  * Get specific review
* PATCH
  * Update specific review
* DEL
  * Delete specific review

## Products/Reviews
* GET
  * Get all reviews on specific product
* POST
  * Create review on specific product
* GET
  * Get sepecific review on specific product

Wishlist
* POST
  * Add product to wishlist
* DEL
  * Remove product from wishlist
* GET
  * Get logged user wishlist

User Addresses
* POST
  * Add User Address
* DEL
  * Remove User Address
* GET
  * Get User Addresses

Coupons
* POST
  * Create Coupon
* GET
  * Get all Coupons
* GET
  * Get Specific Coupon
* PATCH
  * Update Specific Coupon
* DEL
  * Delete Specific Coupon

Cart
* POST
  * Add Product to cart
* GET
  * Get logged user cart
* DEL
  * Remove Specific cart item
* DEL
  * Clear user cart
* PATCH
  * Update cart item quantity
* PATCH
  * Apply coupon to cart

Orders
* POST
  * Create Cash order
* GET
  * Get Specific order
* GET
  * Get all orders
* PUT
  * Update order status to paid
* PUT
  * Update order status to delivered
* GET
  * Get Checkout session

## Documentation
- Use Postman to create documentation
- Use docgen to create HTML files from Postman
- Add html files as the / route for the api

## Deployment
- Push to Github
- Push to heroku (for now, in the future I will deploy to my own domain and host)

## Code Related Suggestions
- NPM scripts for dev and production env
- Config file for important constants
- Use controller methods with documented descriptions/routes
- Error handling middleware
- Authentication middleware for protecting routes and setting user roles
- Validation using Mongoose and validator library
- Use async/await (create middleware to clean up controller methods)
- Create a database seeder to import and destroy data
