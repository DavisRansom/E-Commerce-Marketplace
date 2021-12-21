const { Product } = require('../models');

const productData = [
  {
    product_img: '../public/images/iphone13.jpeg',  
    product_name: 'iPhone 13',
    price: 1200,
    stock: 14,
    category_id: 1,
  },
  {
    product_img: '../public/images/iPadPro.jpeg',
    product_name: 'iPad Pro',
    price: 800,
    stock: 25,
    category_id: 2,
  },
  {
    product_img: '../public/images/HpSpectre.jpeg',
    product_name: 'HP SPECTRE X360',
    price: 700,
    stock: 12,
    category_id: 3,
  },

];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
