const User = require('./User');
const Product = require('./Product');
const Category = require('./Category');
const Cart = require('./Cart');
const Order = require('./Order');

Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE'
});

Product.belongsTo(Category, {
  foreignKey: 'category_id',
});

User.hasOne(Cart, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE',
});

Cart.belongsTo(User, {
  foreignKey: 'user_id',
});

module.exports = {
  User,
  Product,
  Category,
  Cart,
  Order
 };
