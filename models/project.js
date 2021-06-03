const Sequelize = require('sequelize')
const db = require('./index')

const Project = db.define('project', {
    id: Sequelize.INTEGER,
    name: Sequelize.STRING(100),
    price: Sequelize.DOUBLE,
    cost: Sequelize.DOUBLE,
    machine: Sequelize.STRING(100),
    status: Sequelize.INTEGER,
    delivery_at: Sequelize.DATE,
    type: Sequelize.STRING(100),
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
})

module.exports = Project