const jwt = require('jsonwebtoken')
// const User = require('../models/User')
require('dotenv').config()

module.exports = {
  
  async anonymous(req,res,next){
    try {
      const token = req.header('Authorization').replace('Bearer ', '')
      const user = jwt.verify(token, process.env.JWT_SECRET)
      
      req.user = user
      
      next()
    } catch (error) {
      
      if(error.name == "TokenExpiredError"){
        throw error        
      }else{
        req.user = {role:'anonymous'}
        next()
      }
    }
  },
  
  async admin(req, res, next){
    try {
      const token = req.header('Authorization').replace('Bearer ', '')
      const user = jwt.verify(token, process.env.JWT_SECRET)

      // const user = await User.findOne({where:{id: data.id}})
      // if (!user) { throw new Error("User not found") }
      if(user.role != "admin"){ throw new Forbidden() }
      
      req.user = user
      
      next()
    } catch (error) {
      res.status(401)
      .send({ error: 'Unauthorized' })
    }
    
  },
  
  async user(req, res, next){
    try {
      const token = req.header('Authorization').replace('Bearer ', '')
      const user = jwt.verify(token, process.env.JWT_SECRET)
      
      // const user = await User.findByPk(data.id)
      // if (!user) { throw new Error() }
      req.user = user
      next()
    } catch (error) {
      res.status(401)
      .send({ error: 'Unauthorized' })
    }
    
  }
}