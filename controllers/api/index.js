const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');
const userRoutes = require('./user-routes');
const orderRoutes = require('./order-routes');
const categoryProductRoutes = require('./categoryproduct-routes');
const orderProductRoutes = require('./orderproduct-routes')
const stripeRoutes = require('./stripe');

//Import all routes user/ order
router.use('/orderproducts', orderProductRoutes)
router.use('/categoryproducts', categoryProductRoutes)
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/users', userRoutes);
router.use('/orders', orderRoutes);
router.use('/checkouts', stripeRoutes);

module.exports = router;
