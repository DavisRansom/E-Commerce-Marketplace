const router = require('express').Router();
const { Product, Category, Cart, Order } = require("../models");


router.get('/', async (req, res) => {
  try {
    // // Get all products?
    // const productData = await Product.findAll({
    //   include: [
    //     {
    //       model: User,
    //       attributes: ['name'],
    //     },
    //   ],
    // });

    // // Serialize data so the template can read it
    // const products = productData.map((product) => product.get({ plain: true }));

    // //renders the homepage from handlebar
    res.render('homepage', { 
      // products, 
      // logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
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