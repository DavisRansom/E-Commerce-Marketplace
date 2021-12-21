const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Phone',
  },
  {
    category_name: 'Tablet',
  },
  {
    category_name: 'Labtop',
  },
  {
    category_name: 'Shade',
  },
  {
    category_name: 'PC',
  }
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
