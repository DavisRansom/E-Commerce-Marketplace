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
  

  res.render('checkout',{logged_in})

  
});

// Render success page upon successfull checkout
router.get('/success', (req, res) => {
  res.render('success');
});


module.exports = router;



// router.get('/', async (req, res) => {
//     try {
//         req.session.save(() => {
//             if (req.session.countVisit) {
//                 req.session.countVisit++;
//             } else {
//                 req.session.countVisit = 1;
//             }
//         })
//     }
//     });