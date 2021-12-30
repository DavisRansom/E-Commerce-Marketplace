const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Order = require ('./Order');
const Product = require ('./Product');

class OrderProduct extends Model { }

OrderProduct.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "product",
        key: "id"
      }
    },
    order_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "order",
        key: "id"
      }
    },
    unit_price: {
      type: DataTypes.DECIMAL
    },
    quantity: {
      type: DataTypes.INTEGER
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'orderProduct',
  }
);

module.exports = OrderProduct;