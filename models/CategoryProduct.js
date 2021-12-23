const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const Category = require ('./Category');
const Product = require ('./Product');

class CategoryProduct extends Model { }

CategoryProduct.init(
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
    category_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "category",
        key: "id"
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'categoryProduct',
  }
);

module.exports = CategoryProduct;