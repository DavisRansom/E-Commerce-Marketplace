const router = require('express').Router();
const apiRoutes = require('./api')

router.use('/api', apiRoutes)

router.get("", () => {
    console.log("does tghus work??  Shazeen and Will")
}) 
module.exports = router;
