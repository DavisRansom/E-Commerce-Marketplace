const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const userRoutes = require('./user-routes');
const orderRoutes = require('./order-routes');
const categoryProductRoutes = require('./categoryproduct-routes');

//Import all routes user/ order
router.use('/categoryproducts', categoryProductRoutes)
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/users', userRoutes);
router.use('/orders', orderRoutes);

module.exports = router;
