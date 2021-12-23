const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedUsers = require('./user-seeds')


const sequelize = require('../config/connection');

const seedAll = async () => {
    
  await sequelize.sync({ force: true });

  await seedCategories();

  await seedProducts();

  await seedUsers();

  process.exit(0);
};

seedAll();
