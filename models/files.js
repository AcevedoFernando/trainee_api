const { Model, DataTypes } = require('sequelize');
const sequelize = require('./../database/db');

class File extends Model { }

File.init({
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    project_id: DataTypes.NUMBER,
    name: DataTypes.STRING(100),
    path: DataTypes.STRING(300),
    createdAt: DataTypes.DATE,
    updatedAt: DataTypes.DATE
}, {
    sequelize,
    modelName: "file"
})

module.exports = File