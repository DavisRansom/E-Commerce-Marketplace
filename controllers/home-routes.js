const router = require('express').Router();
const { Product, Category, User, Order } = require('../models');

router.get('/', async (req, res) => {
  try {
    // let logged_in = req.session.logged_in

    let data = await Product.findAll()
    console.log('*******************')

    let serializedData = data.map(product => product.get({ plain: true }));

    console.log(serializedData);

    res.render("homepage", { serializedData});

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
 

  res.render('signup');
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