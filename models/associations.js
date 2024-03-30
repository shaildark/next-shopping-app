const Category = require('./category');
const Product = require('./product');

Category.hasMany(Product, { foreignKey: 'iCategoryId' });
Product.belongsTo(Category, { foreignKey: 'iCategoryId' });
