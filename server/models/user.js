const sequelize = require("../db");
const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
        firstName:{
            type: DataTypes.STRING,
            allowNull : false,

        },
        email:{
            type: DataTypes.STRING,
            allowNull : false,
            unique: true
        },
        password:{
            type: DataTypes.STRING,
            allowNull : false,
        },
            
    });
    return User;
}


/*
freezeTableName: true,
            instanceMethods:{
                generateHash(password){
                    return bcrypt.hash(password, bcrypt.genSaltSync(13));
                },
                validPassword(password){
                    return bcrypt.compare(password, this.password);
                }
            } 
*/