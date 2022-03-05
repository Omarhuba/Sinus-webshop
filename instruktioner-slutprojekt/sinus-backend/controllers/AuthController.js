const User = require.main.require('./models/User')

module.exports = {
  async register(req,res){
    const {email, name, password} = req.body
    const {zip,street,city} = req.body.address      
    
    const user = await User.create({email,name,password,zip,street,city})
    const token = await User.authenticate(email,password)
    
    res.json({
      message: 'User registered!',
      token,
      user: {id:user.id,email,name,address:{city,street,zip}}
    })
  },
  
  async authenticate(req, res){
    const token = await User.authenticate(req.body.email, req.body.password)
    res.json({token})
  },
  
}