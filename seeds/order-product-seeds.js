const { OrderProduct } = require('../models');

const orderProductData = [
  {
    product_id: 1,
    order_id: 2,
    quantity: 2
  },
  {
    product_id: 2,
    order_id: 2,
    quantity: 1
  },
  {
    product_id: 3,
    order_id: 1,
    quantity: 2
  },
  {
    product_id: 3,
    order_id: 3,
    quantity: 1
  },
  {
    product_id: 4,
    order_id: 1,
    quantity: 2
  },
  {
    product_id: 4,
    order_id: 4,
    quantity: 2
  },
  {
    product_id: 5,
    order_id: 4,
    quantity: 3
  },
  {
    product_id: 1,
    order_id: 4,
    quantity: 2
  },
  {
    product_id: 2,
    order_id: 4,
    quantity: 2
  },
  {
    product_id: 4,
    order_id: 2,
    quantity: 2
  },
  {
    product_id: 5,
    order_id: 5,
    quantity: 1
  },
  {
    product_id: 6,
    order_id: 5,
    quantity: 1
  },
];

const seedOrderProduct = () => OrderProduct.bulkCreate(orderProductData);

module.exports = seedOrderProduct;
