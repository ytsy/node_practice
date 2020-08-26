const Sequelize = require('sequelize');
module.exports.initModel = async sequelize => {
    const User = sequelize.define('user',{
        name:{
            type: Sequelize.STRING,
            allowNull: false
        }
    })   
    const Product = sequelize.define('product',{
        title:{
            type: Sequelize.STRING,
            allowNull: false
        }
    })  
    User.hasMany(Product);
    await sequelize.sync({force:true});
    return { User, Product }
} 
//暗号：哈希算法