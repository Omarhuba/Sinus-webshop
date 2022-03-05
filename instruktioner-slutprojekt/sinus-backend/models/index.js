const Order = require('./Order')
require('./Product')
const User = require('./User')
const OrderItem = require('./OrderItem')

module.exports = function setupModels(){
  Order.hasMany(OrderItem)
  OrderItem.belongsTo(Order)

  Order.belongsTo( User )
  User.hasMany(Order)
}