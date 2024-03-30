const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("./db");

const Category = sequelize.define('Category', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    vName: {
        type: DataTypes.STRING
    },
    createdAt: {
        type: DataTypes.DATE,
    },
    updatedAt: {
        type: DataTypes.DATE,
    },
    deletedAt: {
        type: DataTypes.DATE,
    }
}, {
    tableName: 'category',
    paranoid: true,
    deletedAt: 'deletedAt',
});
module.exports = Category;