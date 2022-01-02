const router = require('express').Router();
const { Product, Category, User, Order } = require('../models');

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



router.get('/profile', async (req,res) => {
  try {
    const loggedIn = req.session.logged_in;
    const isAdmin = req.session.isAdmin;
    const adminLogin = false;
    if(loggedIn && isAdmin){
      adminLogin = true;
    }
    if(adminLogin) {
      const userData = await User.findByPk(req.session.user_id);
      const serializedUserData = userData.get({plain:true});
      // console.log(userData);
      const categoryData = await Category.findAll();
      const serializedCategoryData = categoryData.map(category => category.get({plain:true}));
      // console.log(categoryData);
      const productData = await Product.findAll();
      const serializedProductData = productData.map(product => product.get({plain:true}));
      // console.log(productData);
      console.log(serializedCategoryData, serializedProductData, serializedUserData)
      res.render('adminProfile', {serializedUserData, adminLogin, serializedCategoryData, serializedProductData});
    }
    
  } catch (error) {
    res.status(500).json(error)
  }
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