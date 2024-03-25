
import Sequelize from 'sequelize';
const dotenv = require("dotenv");
dotenv.config();
// const env = process.env.NODE_ENV || 'development';
// const config = require("@/config/config.js")[env];

// // const sequelize = new Sequelize(process.env.DB_DATABASE, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
// //     host: process.env.DB_HOST,
// //     dialect: 'mysql',/* one of 'mysql' | 'postgres' | 'sqlite' | 'mariadb' | 'mssql' | 'db2' | 'snowflake' | 'oracle' */
// //     port: process.env.DB_PORT
// // });

// // const sequelize = new Sequelize({
// //     host: config.host,
// //     username: config.username,
// //     password: config.password,
// //     database: config.database,
// //     dialect: config.dialect,
// //     dialectMode: require("mysql2"),
// //     benchmark: true
// // });

const sequelize = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: "mysql",
        dialectModule: require("mysql2"),
        pool: {
            max: 5,
            min: 0,
            acquire: 30000,
            idle: 10000,
        },
    }
);

module.exports = sequelize;