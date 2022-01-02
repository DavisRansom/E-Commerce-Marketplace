const router = require('express').Router();
const { Router } = require('express');
const { Product, Category, CategoryProduct} = require('../../models');


router.get('/:id', async (req, res) => {
 
  try {
    const productData = await Product.findByPk(req.params.id);
    // console.log(productData);
    if (!productData) {
      res.status(404).json({ message: 'Product with the provided id does not exist!'})
      return
    }
    const product = productData.get({plain:true})
    // console.log(product);

    res.render("product", product); 

  } catch (err) {
    res.status(400).json(err)
  }
});
//Get route for when adding to cart. Needed to just return data instead of rendering a handlebars page
router.get('/atc/:id', async (req, res) => {
  try {
    const productData = await Product.findByPk(req.params.id);
    res.json(productData)
    
  } catch (err) {
    res.status(400).json(err);
  }
})


router.post('/', async (req, res) => {
  try {
    const productData = await Product.create(req.body);
    res.status(200).json(productData);
  } catch (err) {
    res.status(400).json(err);
  }  
  
});
  

router.put('/:id', async (req, res) => {
  try {
    const productData = await Product.update(req.body, {
    where: {
      id: req.params.id,
    }
  });
  if (!productData) {
    res.status(404).json({ message: 'Product with the provided id does not exist!'})
    return
  }
    res.status(200).json(productData)
  } catch (err) {
    res.status(400).json(err);
  }  

});

router.delete('/:id', async (req, res) => {

  try {
    const productData = await Product.destroy({
      where: {
        id: req.params.id
      }
    });

    if (!productData) {
      res.status(404).json({ message: 'Product with the provided id does not exist!'})
      return  
    }
    res.status(200).json(productData) 

  } catch (err) {
    res.status(400).json(err)
  }
});

module.exports = router;
