const sequelize = require("../db");
const { DataTypes } = require("sequelize/types");

module.exports = (sequelize, DataTypes) =>{
    const Task = sequelize.define('task',{
        title:{
            type: DataTypes.STRING,
            allowNull : false,
        },
        notes:{
            type: DataTypes.STRING,
            allowNull : true,
        },
        isImportant:{
            type: DataTypes.BOOLEAN,
            allowNull:true
        },
        isComplete:{
            type: DataTypes.BOOLEAN,
            allowNull:true
        },
        date:{
            type: DateTypes.DATEONLY
        }
    })
    return Task;
}