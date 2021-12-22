const router = require('express').Routers();
const {Product, Category, Cart, Order};

// Login route
router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/'); //gets directed to homepage once logged in
      return;
    }
    res.render('login'); //if not logged in, renders the login layout from views folder
  });
  
  module.exports = router;