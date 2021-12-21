const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
    
  await sequelize.sync({ force: true });

  await seedCategories();

  await seedProducts();

  process.exit(0);
};

seedAll();
