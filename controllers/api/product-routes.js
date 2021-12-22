const router = require('express').Router();
const { Product, Category} = require('../../models');


router.get('/', async (req, res) => {

  try {
    const productData = await Product.findAll({
      where: {isActive: true},
      include: [{model: Category}]
    })
    
    res.status(200).json(productData)
  } catch (err) {
    res.status(400).json(err)
  }
});

router.get('/:id', async (req, res) => {
 
  try {
    const productData = await Product.findByPk(req.params.id, {
      include: [{model: Category}]

    });
    if (!productData) {
      res.status(404).json({ message: 'Product with the provided id does not exist!'})
      return
    }
    res.status(200).json(productData)

  } catch (err) {
    res.status(400).json(err)
  }
});

router.post('/', (req, res) => {

  
  
});

router.put('/:id', (req, res) => {


});

// router.delete('/:id', async (req, res) => {

//   try {
//     const productData = await Product.destroy({
//       where: {
//         id: req.params.id
//       }
//     });

//     if (!productData) {
//       res.status(404).json({ message: 'Product with the provided id does not exist!'})
//       return   
//     }
//     res.status(200).json(productData) 

//   } catch (err) {
//     res.status(400).json(err)
//   }
// });

module.exports = router;
