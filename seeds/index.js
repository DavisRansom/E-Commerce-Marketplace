const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedUsers = require('./user-seeds')
const seedOrderProduct = require('./order-product-seeds')
const seedOrder = require('./order-seeds')
const seedCategoryProduct = require('./category-product-seeds')


const sequelize = require('../config/connection');

const seedAll = async () => {
    
  await sequelize.sync({ force: true });

  await seedCategories();

  await seedProducts();

  await seedUsers();

  await seedOrderProduct();

  await seedOrder();

  await seedCategoryProduct();

  process.exit(0);
};

seedAll();
