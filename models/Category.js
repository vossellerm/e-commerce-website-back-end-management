const { Model, DataTypes } = require("sequelize");

const sequelize = require("../config/connection.js");

class Category extends Model {}

Category.init(
  {
    // define columns
    // id: integar, not null, primary key, auto increment
    id: {
      type: DataTypes.INTEGAR,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // category name: string, not null
    category_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "category",
  }
);

module.exports = Category;
