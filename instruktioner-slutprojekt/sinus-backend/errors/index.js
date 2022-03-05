class SinusError extends Error{}

class InvalidCredentials extends SinusError{
  constructor(){
    super()    
    this.message = `Invalid credentials`
    this.errorCode = 403
  }
}
class Unauthorized extends SinusError{
  constructor(){
    super()    
    this.message = `Unauthorized`
    this.errorCode = 401
  }
}
class Forbidden extends SinusError{
  constructor(){
    super()    
    this.message = `Forbidden`
    this.errorCode = 403
  }
}

class TokenExpired extends SinusError{
  constructor(){
    super()    
    this.message = `Token expired, please log in again`
    this.errorCode = 401
  }
}

class ProductNotFound extends SinusError{
  constructor(id){
    super()
    this.message = `Item with id ${id} not found`
    this.errorCode = 404
  }
}
class OrderNotFound extends SinusError{
  constructor(id){
    super()
    this.message = `Order with id ${id} not found`
    this.errorCode = 404
  }
}
class MissingHeader extends SinusError{
  constructor(){
    super()
    this.message = `Content-Type header is missing`
    this.errorCode = 400
  }
}
class InvalidFile extends SinusError{
  constructor(message){
    super()
    this.message = message
    this.errorCode = 400
  }
}
class FileExists extends SinusError{
  constructor(fileName){
    super()
    this.message = fileName + " already exists. Please change the name and upload again"
    this.errorCode = 500
  }
}

module.exports = {
  SinusError,
  InvalidCredentials,
  Unauthorized,
  TokenExpired,
  ProductNotFound,
  Forbidden,
  MissingHeader,
  OrderNotFound,
  InvalidFile,
  FileExists
}