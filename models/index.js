const User = require('./User');
const Product = require('./Product');
const Category = require('./Category');
const Order = require('./Order');
const CategoryProduct = require('.CategoryProduct');
const OrderProduct = require('OrderProduct');

Product.belongsToMany(Category, {
  through: CategoryProduct,
  foreignKey: 'product_id',
});

Category.belongsToMany(Product, {
  through: CategoryProduct,
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});

Product.belongsToMany(Order, {
  through: OrderProduct,
  foreignKey: 'product_id',
});

Order.belongsToMany(Product, {
  through: OrderProduct,
  foreignKey: 'order_id',
});

User.hasMany(Order, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

Order.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

module.exports = {
  User,
  Product,
  Category,
  CategoryProduct,
  Order,
  OrderProduct
 };
