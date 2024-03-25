const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require("./db");

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  vName: {
    type: DataTypes.STRING
  },
  vLastName: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
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
  tableName: 'user',
  paranoid: true,
  timestamps: true
});

module.exports = User;


// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class User extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//     }
//   }
//   User.init({
//     id: DataTypes.INTEGER,
//     vName: DataTypes.STRING,
//     vLastName: DataTypes.STRING,
//     email: DataTypes.STRING,
//     password: DataTypes.STRING,
//     createdAt: DataTypes.DATE,
//     updatedAt: DataTypes.DATE,
//     deletedAt: DataTypes.DATE
//   }, {
//     sequelize,
//     paranoid: true,
//     deletedAt: 'deletedAt',
//     modelName: 'User',
//     freezeTableName: true
//   });
//   return User;
// };