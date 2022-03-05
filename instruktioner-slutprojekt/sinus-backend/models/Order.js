const db = require('../database/connection')
const {DataTypes} = require('sequelize')
const {ORDER_STATUSES} = require('../constants')
const Order = db.define('Order', {  
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    enum: ORDER_STATUSES,
    defaultValue: 'inProcess'
  },
  shippingCity: {
    type: DataTypes.STRING,
    allowNull: false
  },
  shippingStreet: {
    type: DataTypes.STRING,
    allowNull: false
  },
  shippingZip: {
    type: DataTypes.STRING,
    allowNull: false
  }
})

module.exports = Order