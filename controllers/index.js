const router = require('express').Router();
const apiRoutes = require('./api')
const homeRoute= require('./home-routes')

router.use('/api', apiRoutes)
router.use('/', homeRoute)

module.exports = router;
