const User = require('../models/User')

module.exports = {
  
  all: async (req,res) => {
    const users = await User.findAll({attributes:{exclude:['password']}})
    res.json({users})
  },
  
  updateProfile: async (req,res) => {
    const {address} = req.body
    
    const user = await User.findByPk(req.user.id)
    await user.update({...req.body, ...address})
    
    res.json({message: 'Profile updated'})
  },
  
  me(req, res){
    const {name,email,role,address} = req.user
    
    res.json({name,email,role,address})
  },

  getOne: async (req,res) => {
    const user = await User.findByPk(req.params.id, {attributes:{exclude:['password']}})
    if(!user){ throw new UserNotFound(req.params.id)}

    res.json(user)
  }
}