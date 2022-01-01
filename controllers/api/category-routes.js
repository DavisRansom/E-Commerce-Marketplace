const router = require('express').Router();
const { Category, Product } = require('../../models');


router.get('/', async (req, res) => {

  try {
    const categoryData = await Category.findAll({
      include: [{model: Product}]
    })
    //Add render for Category handlebars page here and pass in serialized Category data
    res.status(200).json(categoryData)
    const serializedData = categoryData.map(category => category.get({plain: true}))

    console.log(serializedData);
    res.render('categories', {
      serializedData,
      logged_in: req.session.logged_in
    })
    
  } catch (err) {
    res.status(500).json(err)
  }
});

router.get('/:id', async (req, res) => {

  try {
    const categoryData = await Category.findByPk(req.params.id, {
      include: [{model: Product}]
    });
    if (!categoryData) {
      res.status(404).json({ message: 'Category with the provided id does not exist!'})
      return
    }
    
    const serializedData = categoryData.get({plain: true})
    console.log(serializedData)
    // res.status(200).json(serializedData)
    res.render('productByCategory', { 
      serializedData, 
      logged_in: req.session.logged_in})
  } catch (err) {
    res.status(500).json(err)
  }  

});

router.post('/', async (req, res) => {

  try {
    const categoryData = await Category.create(req.body);
    res.status(200).json(categoryData);
  } catch (err) {
    res.status(400).json(err);
  }

});

router.put('/:id', async (req, res) => {

  try {
    const categoryData = await Category.update(req.body, {
    where: {
      id: req.params.id,
    }
  });
  if (!categoryData) {
    res.status(404).json({ message: 'Category with the provided id does not exist!'})
    return
  }
    res.status(200).json(categoryData)
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {

  try {
    const categoryData = await Category.destroy({
    where: {
      id: req.params.id,
    }
  });
  if (!categoryData) {
    res.status(404).json({ message: 'Category with the provided id does not exist!'})
    return
  }
    res.status(200).json(categoryData)
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
