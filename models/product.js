const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("./db");

const Product = sequelize.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    vName: {
        type: DataTypes.STRING
    },
    image: {
        type: DataTypes.STRING,
    },
    iCategoryId: {
        type: DataTypes.INTEGER,
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
    deletedAt: {
        type: DataTypes.DATE
    }
}, {
    tableName: 'product',
    paranoid: true,
    deletedAt: 'deletedAt',
});
module.exports = Product;