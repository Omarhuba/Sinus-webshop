const { ProductNotFound, OrderNotFound } = require('../errors');
const Order = require('../models/Order')
const Product = require('../models/Product')
const OrderItem = require('../models/OrderItem')

module.exports = {
  getOrders: async (req,res) => {    
    if(req.user.role == 'admin'){
      orders = await Order.findAll({include: 'items'})
    }else{
      orders = await Order.findAll({where:{UserId: req.user.id}, include: 'items'})
    }
    res.json(orders)
  },
  
  createOrder: async (req,res) => {
    const products = await Product.findAll({where:{id:req.body.items}})
    
    const missingID = req.body.items.find(id => 
      !products.some(product => product.id == id)
      )
      if(missingID){ throw new ProductNotFound(missingID) }
      
      const address = req.body.shippingAddress ? 
      req.body.shippingAddress :
      req.user.address
      
      const order = await Order.create({
        shippingCity: address.city,
        shippingStreet: address.street,
        shippingZip: address.zip,
        UserId: req.user.id,
        items: products.map(product => ({
          ProductId:product.id, 
          price: product.price, 
          amount: req.body.items.filter(prodID => prodID == product.id).length
        }))
        ,
      }, {include: [OrderItem]})
      
      res.json(order)
    },
    
    updateOrderStatus: async (req, res) => {
      const order = await Order.findByPk(req.params.id)
      
      if(!order){ throw new OrderNotFound(req.params.id)}
      
      await order.update({status: req.body.status})
      
      res.json({message: 'Order updated!'})
    }
  }