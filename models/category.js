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
        type: DataTypes.DATE
    },
    updatedAt: {
        type: DataTypes.DATE
    },
    deletedAt: {
        type: DataTypes.DATE
    }
}, {
    tableName: 'category',
    paranoid: true,
    deletedAt: 'deletedAt',
});
module.exports = Category;


// const {
//     Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//     class Category extends Model {
//         /**
//          * Helper method for defining associations.
//          * This method is not a part of Sequelize lifecycle.
//          * The `models/index` file will call this method automatically.
//          */
//         static associate(models) {
//             // define association here
//         }
//     }
//     Category.init({
//         id: DataTypes.INTEGER,
//         vFirstName: DataTypes.STRING,
//         createdAt: DataTypes.DATE,
//         updatedAt: DataTypes.DATE,
//         deletedAt: DataTypes.DATE
//     }, {
//         sequelize,
//         paranoid: true,
//         deletedAt: 'deletedAt',
//         modelName: 'category',
//         freezeTableName: true
//     });
//     return Category;
// };