const Sequelize = require('sequelize')
const db = require('./index')

const File = db.define('file', {
    id: Sequelize.INTEGER,
    project_id: Sequelize.NUMBER,
    name: Sequelize.STRING(100),
    path: Sequelize.STRING(300),
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
})

module.exports = File