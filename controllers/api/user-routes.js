const router = require('express').Router();
const { User } = require('../../models');

router.get('/', async (req, res) => {

  try {
    const userData = await User.findAll()
    
    res.status(200).json(userData)
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {

  try {
    const userData = await User.findByPk(req.params.id, {
    });
    if (!userData) {
      res.status(404).json({ message: 'User with the provided id does not exist!'})
    }
    res.status(200).json(userData)

  } catch (err) {
    res.status(500).json(err)
  }  

});



router.post('/', async (req, res) => {
  try {
    const userLogIn = await User.create({
      name: req.body.name,
      address: req.body.address,
      phone_number: req.body.phone_number,
      email: req.body.email,
      password: req.body.password,
      isAdmin: req.body.isAdmin,
      //creating new users, follows the user model for signing up new person
    });

    req.session.save(() => { //when user logs in, the session is saved
      req.session.loggedIn = true //loggedIn condition then becomes true. This would allow the handlebars with the {{if logged_in}} to be accessed
      res.status(200).json(userLogIn);
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login
router.post('/login', async (req, res) => {
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
      req.session.logged_in = true 
      req.session.user_id = userLogIn.id
      req.session.isAdmin = userLogIn.isAdmin
      //loggedIn condition then becomes true. This would allow the handlebar with the {{if loggedIn}} to be accessed
      res
        .status(200)
        .json({ user: userLogIn, message: `You are now logged in. Welcome, ${this.name}` });
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_In) {
    req.session.destroy(() => {//logging out destroys the session
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
