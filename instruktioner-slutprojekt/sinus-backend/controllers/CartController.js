const { ProductNotFound } = require('../errors')
const CartItem = require('../models/CartItem')
const Product = require('../models/Product')

module.exports = {
  get: async (req, res) => {
    const products = await CartItem.findAll({
      where: {UserId: req.user.id},
      attributes: {exclude: ['id', 'UserId', 'ProductId']} ,
      include: Product
    })
    res.json({cart: products})
  },

  add: async (req, res) => {
    const [item] = await CartItem.findOrCreate({where:{UserId: req.user.id, ProductId: req.params.id}})
    if(!item._options.isNewRecord){
      await item.update({amount: item.amount + 1})
      res.json({message: `Product ${req.params.id } increased by 1`})
    }else{
      res.json({message: `Product ${req.params.id } added to cart`})
    }
  },

  update: async (req, res) => {
    const item = await CartItem.findOne({where:{UserId: req.user.id, ProductId: req.params.id}})

    if(!item){ throw new ProductNotFound(req.params.id)}

    await item.update({amount: req.body.amount})

    res.json({message: `Item ${req.params.id} updated to ${item.amount}`})
  },
  
  delete: async (req, res) => {
    const item = await CartItem.findOne({where:{UserId: req.user.id, ProductId: req.params.id}})
    
    if(!item){ throw new ProductNotFound(req.params.id)}
    
    await item.destroy()
    
    res.json({message: `Item ${req.params.id} removed from cart`})
  },

}