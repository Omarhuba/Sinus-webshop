const AuthController = require('../controllers/AuthController')
const UserController = require('../controllers/UserController')
const Auth = require('../middleware/auth')
const {Router} = require('express')
const asyncHandler = require('../utils/asyncHandler')
const Validations = require('../validations')

const router = new Router()

router.post( '/auth',
  Validations.login,
  asyncHandler(AuthController.authenticate)
)
router.post( '/register', 
  Validations.register,
  asyncHandler(AuthController.register) 
)

router.get( '/me',
  Auth.user, 
  asyncHandler(UserController.me)
)
router.patch( '/me',
  Auth.user, 
  Validations.updateProfile,
  asyncHandler(UserController.updateProfile)
)

router.get('/users/:id',
  Auth.admin,
  asyncHandler(UserController.getOne)
)

module.exports = router