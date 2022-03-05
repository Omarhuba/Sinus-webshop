const fs = require('fs')
const path = require('path')
const {InvalidFile, FileExists} = require('../errors')

module.exports = {
  getAll: (req, res) => {
    const images = fs.readdirSync(path.join('public', 'images'))
    res.json({images})
  },
  
  upload: (req, res) => {
    if(!req.files.imgFile.mimetype.startsWith('image/')){ 
      throw new InvalidFile('Invaild file, must be an image') 
    }
    
    if(fs.existsSync(path.join('public','images', req.files.imgFile.name))){
      throw new FileExists(req.files.imgFile.name)
    }
    
    fs.copyFileSync(req.files.imgFile.tempFilePath, path.join('public','images', req.files.imgFile.name))
    
    res.json({message: 'Image uploaded'})
  }
}