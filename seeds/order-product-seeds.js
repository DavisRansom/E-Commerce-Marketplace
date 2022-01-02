const { OrderProduct } = require('../models');

const orderProductData = [
  {
    product_id: 1,
    order_id: 2,
    quantity: 10,
    unit_price: 15.00
  },
  {
    product_id: 2,
    order_id: 2,
  },
  {
    product_id: 3,
    order_id: 1,
  },
  {
    product_id: 3,
    order_id: 3,
  },
  {
    product_id: 4,
    order_id: 1,
  },
  {
    product_id: 4,
    order_id: 4,
  },
  {
    product_id: 5,
    order_id: 4,
  },
  {
    product_id: 1,
    order_id: 4,
  },
  {
    product_id: 2,
    order_id: 4,
  },
  {
    product_id: 4,
    order_id: 2,
  },
  {
    product_id: 5,
    order_id: 5,
  },
  {
    product_id: 6,
    order_id: 5,
  },
];

const seedOrderProduct = () => OrderProduct.bulkCreate(orderProductData);

module.exports = seedOrderProduct;
