const router = require('express').Router();
const categoryRoutes = require('./category-routes');
const productRoutes = require('./product-routes');

//Import all routes user/ order
router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);


module.exports = router;
