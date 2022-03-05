const {SinusError} = require('../errors')
const {BaseError} = require('sequelize')

module.exports = {
  errorHandler(error, req, res, next){
    if( error instanceof SinusError){
      res
        .status(error.errorCode)
        .json({error: error.message})
    }else if(error instanceof BaseError){
      res
        .status(400)
        .json({error: error.message})
    }else if(error instanceof SyntaxError){
      res
        .status(400)
        .json({error: "Invalid JSON"})
    }else{
      console.error(error)
      res
        .status(500)
        .json({error: 'Something went wrong, please contact your system admin'})
    }
  }
}