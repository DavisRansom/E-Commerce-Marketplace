const router = require('express').Router();
const { OrderProduct } = require('../../models');

router.get('/', async (req, res) => {

  try {
    const orderProductData = await OrderProduct.findAll();

    res.status(200).json(orderProductData);

  } catch (err) {

    res.status(500).json(err);

  }
})

router.post('/', async (req, res) => {

  try {
    const orderProductData = await OrderProduct.create(req.body);
    res.status(200).json(orderProductData);
  } catch (err) {
    res.status(400).json(err);
  }

});
module.exports = router;