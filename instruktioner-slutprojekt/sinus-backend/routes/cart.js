const {Router} = require('express')
const CartController = require('../controllers/CartController')
const Validations = require('../validations')
const Authorization = require('../middleware/auth')
const asyncHandler = require('../utils/asyncHandler')
const router = new Router()

router.get('/', Authorization.user, asyncHandler(CartController.get))
router.post('/:id', Authorization.user, asyncHandler(CartController.add))
router.patch('/:id',
  Validations.updateCartItem, 
  Authorization.user, 
  asyncHandler(CartController.update)
)
router.delete('/:id', Authorization.user, asyncHandler(CartController.delete))

module.exports = router