const Sequelize = require('sequelize');
const env = process.env.APP_ENV
const config = require(__dirname + '/../config/config.json')[env];

const db = new Sequelize(
    config.database,
    config.username, 
    config.password, 
  { dialect: 'mysql' }
);

module.exports = db;