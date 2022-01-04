const router = require('express').Router();
const { Product, Category, User, Order } = require('../models');
var ls = require('local-storage');

router.get('/', async (req, res) => {
  try {

    let data = await Product.findAll()
    // console.log('*******************')

    let serializedData = data.map(product => product.get({ plain: true }));

    // console.log(serializedData);

    res.render("homepage", {
      serializedData,
      logged_in: req.session.logged_in
    });

  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

// Render checkout page


router.get('/cartitems', (req, res) => {

  const logged_in = req.session.logged_in


  res.render('checkout', { logged_in })


});

// Render success page upon successfull checkout
router.get('/success', async (req, res) => {
  try {
    const logged_in = req.session.logged_in

    const userData = await User.findByPk(req.session.user_id);

    const serializedData = userData.get({ plain: true });

    console.log(serializedData)

    res.render('success', { serializedData, logged_in });

  } catch (error) {

  }
});


module.exports = router;

