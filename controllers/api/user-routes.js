const router = require('express').Router();
const { render } = require('express/lib/response');
const { User, Category, Product, Order, OrderProduct } = require('../../models');
const fetch = require('node-fetch');
router.get('/', async (req, res) => {

  try {
    const userData = await User.findAll()

    res.status(200).json(userData)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/profile', async (req, res) => {
  try {
    const logged_in = req.session.logged_in;
    const isAdmin = req.session.isAdmin;
    console.log(isAdmin);

    if (isAdmin) {
      let userData = await User.findByPk(req.session.user_id);
      let serializedUserData = userData.get({ plain: true });
      // console.log(userData);
      let categoryData = await Category.findAll();
      let serializedCategoryData = categoryData.map(category => category.get({ plain: true }));
      // console.log(categoryData);
      let productData = await Product.findAll();
      let serializedProductData = productData.map(product => product.get({ plain: true }));
      // console.log(productData);
      // console.log(serializedCategoryData, serializedProductData, serializedUserData)
      res.render('adminProfile', { logged_in, serializedUserData, serializedCategoryData, serializedProductData });
      
    } else{
      let userData = await User.findByPk(req.session.user_id);
      let serializedUserData = userData.get({ plain: true });

      let orderData = await Order.findAll({
        where: {
          user_id: req.session.user_id,
        },
        include: [ User, { model: Product, through: OrderProduct}]});

      let serializedOrderData = orderData.map(orders => orders.get({plain: true}));
      
      console.log(serializedOrderData)

      // console.log(orderData);  

      res.render('userProfile', { serializedUserData, serializedOrderData, logged_in })
     
    }
    

  } catch (error) {
    res.status(500).json(error)
  }
});

router.get('/profile/edit', async (req, res) => {
  try {
    let userData = await User.findByPk(req.session.user_id);
    let serializedUserData = userData.get({ plain: true });

    const logged_in = req.session.logged_in;

    res.render('userForm', { serializedUserData, logged_in})
  } catch (err) {
    res.status(500).json(err)
  }
})

router.get('/:id', async (req, res) => {

  try {
    const userData = await User.findByPk(req.params.id, {
    });
    if (!userData) {
      res.status(404).json({ message: 'User with the provided id does not exist!' })
      return
    }
    res.status(200).json(userData)

  } catch (err) {
    res.status(500).json(err)
  }

});


router.post('/createuser', async (req, res) => {
  try {

    //Variable to hold new userData
    const newUserData = await User.create(req.body)

    //Req.sessions for cookies
    req.session.save(() => {
      req.session.user_id = newUserData.id;
      req.session.logged_in = true;
      req.session.isAdmin = newUserData.isAdmin;

      res.json({ user: newUserData, message: 'Welcome!' });
    });

    //Catch error
  } catch (err) {
    res.status(400).json(err);
  }
})

// Update user Info
router.put('/:id', async (req, res) => {

  try {
    const updatedUserData = await User.update(req.body, {
      where: {
        id: req.params.id,

      },
      individualHooks: true,
    });
    if (!updatedUserData) {
      res.status(404).json({ message: 'User with the provided id does not exist!' })
      return;
    }
    res.status(200).json({ message: 'User Info updated!' })
  } catch (err) {
    res.status(400).json(err);
  }
});

// Delete the selected User
router.delete('/:id', async (req, res) => {

  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id,
      }
    });
    if (!userData) {
      res.status(404).json({ message: `User number ${req.params.id} does not exist!` })
      return
    }
    res.status(200).json({ message: `User number ${req.params.id} is successfully deleted!` })
  } catch (err) {
    res.status(400).json(err);
  }
});


// Login
router.post('/login', async (req, res) => {
  console.table(req.body)
  try {
    const userLogIn = await User.findOne({
      where: {
        email: req.body.email,
      },
    });

    if (!userLogIn) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    const validPassword = await userLogIn.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password. Please try again!' });
      return;
    }

    req.session.save(() => {

      req.session.user_id = userLogIn.id
      req.session.isAdmin = userLogIn.isAdmin
      req.session.logged_in = true
      //loggedIn condition then becomes true. This would allow the handlebar with the {{if loggedIn}} to be accessed
      res
        .status(200)
        .json({ user: userLogIn, message: `You are now logged in. Welcome!` });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    req.session.destroy(() => {//logging out destroys the session
      // res.render('/login');
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});



module.exports = router;
