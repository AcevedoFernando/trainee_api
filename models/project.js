const { Model, DataTypes } = require('sequelize');
const sequelize = require('./../database/db');

class Project extends Model {}
Project.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    name:  DataTypes.STRING(100),
    price:  DataTypes.DOUBLE,
    cost: DataTypes.DOUBLE,
    machine:  DataTypes.STRING(100),
    status:  DataTypes.INTEGER,
    delivery_at: DataTypes.DATE,
    type: DataTypes.STRING(100),
    description: DataTypes.STRING(100),
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
}, {
    sequelize,
    modelName: "project"
})

module.exports = Project
