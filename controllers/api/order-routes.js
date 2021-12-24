const router = require('express').Router();
const { Order, Product} = require('../../models');


router.get('/', async (req, res) => {

    try {
      const orderData = await Order.findAll({
        include: [{model: Product}]
      })
      res.status(200).json(orderData)
    } catch (err) {
      res.status(500).json(err)
    }
  });


module.exports = router;