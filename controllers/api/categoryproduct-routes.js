const router = require('express').Router();
const { CategoryProduct } = require('../../models');

router.get('/', async (req, res) => {

    try {
      const categoryProductData = await CategoryProduct.findAll();

      res.status(200).json(categoryProductData);

    } catch (err) {

      res.status(500).json(err);
      
    }
    })
    
router.post('/', async (req, res) => {

        try {
          const categoryProductData = await CategoryProduct.create(req.body);
          res.status(200).json(categoryProductData);
        } catch (err) {
          res.status(400).json(err);
        }
      
      });
module.exports = router;
