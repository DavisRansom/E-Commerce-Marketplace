const router = require('express').Router();
const { Product, Category, Cart, Order } = require ('../models');

router.get('/', async (req, res) => {
    try {
      let logged_in = req.session.logged_in
  
      let data = await Product.findAll({
        include:[
          {model: User, as :"user"}
        ]
      })
  
      let serializedData = data.map(blog=> blog.get({plain:true}))
  
     res.render("homepage", {data:serializedData, logged_in})
    } catch (err) {
      res.status(500).json(err);
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

module.exports = router;