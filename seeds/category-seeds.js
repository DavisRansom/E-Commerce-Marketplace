const { Category } = require('../models');

const categoryData = [
  {
    category_name: 'Phone',
  },
  {
    category_name: 'Ipad',
  },
  {
    category_name: 'Labtop',
  },
];

const seedCategories = () => Category.bulkCreate(categoryData);

module.exports = seedCategories;
