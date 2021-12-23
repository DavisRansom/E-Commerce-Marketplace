const router = require('express').Router();
const { Product, Category, Cart, Order } = require("../models");


router.get('/', async (req, res) => {

  try {
    const productData = await Product.findAll({
      where: {isActive: true},
      include: [{model: Category}]
    })
    
  const products = productData.map((product) => product.get({ plain: true }));

    res.render('homepage');
    res.status(200).json(productData)
  } catch (err) {
    res.status(400).json(err)
  }
});


// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/'); //gets directed to homepage once logged in
    return;
  }
  res.render('login'); //if not logged in, renders the login layout from views folder
});

module.exports = router;