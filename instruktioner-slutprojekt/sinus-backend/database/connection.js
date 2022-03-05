const {Sequelize} = require('sequelize')
const path = require('path')
require('dotenv').config()

module.exports = new Sequelize({
  dialect: 'sqlite',
  storage: path.join('database', process.env.DB_FILE),
  logging: false
})