const db = require('../database/connection')
const {DataTypes} = require('sequelize')
const {Op} = require('sequelize')
const {PRODUCT_CATEGORIES} = require('../constants')
// const Order = require('./Order')

const Product = db.define('Product', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  specialEdition: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
    allowNull: false
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  category: {
    type: DataTypes.STRING,
    enum: PRODUCT_CATEGORIES,
    allowNull: false
  },
  shortDesc: {
    type: DataTypes.STRING,
    allowNull: false
  },
  longDesc: {
    type: DataTypes.STRING,
    allowNull: false
  },
  imgFile: {
    type: DataTypes.STRING,
    allowNull: false
  }
  
})



Product.findPage = (page,pageSize) => {
  return Product.findAll({
    limit: pageSize,
    offset: (page-1)*pageSize
  })
}

Product.findPageByCategory = (page, pageSize, category) => {
  return Product.findAll({
    limit: pageSize,
    offset: (page-1)*pageSize,
    where: {category}
  })
}

Product.findPageByExcludedCategories = (page, pageSize, categories) => {
  
  return Product.findAll({
    limit: pageSize,
    offset: (page-1)*pageSize,
    where: {category: {[Op.notIn]: categories}}
  })
}

Product.search = (terms) => {
  return Product.findAll({
    where: {title: {[Op.like]: `%${terms}%`}}
  })
}
module.exports = Product