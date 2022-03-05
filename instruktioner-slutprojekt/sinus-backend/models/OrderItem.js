const db = require('../database/connection')
const {DataTypes} = require('sequelize')

const OrderItem = db.define('items', {
  price: {
    type: DataTypes.INTEGER,
  },
  ProductId: {
    type: DataTypes.INTEGER,
  },
  amount: {
    type: DataTypes.INTEGER
  }
}, {timestamps: false})

module.exports = OrderItem