const {Router} = require('express')
const Auth = require('../middleware/auth')
const OrderController = require('../controllers/OrderController')
const Validations = require('../validations')
const asyncHandler = require('../utils/asyncHandler')
const router = new Router()

router.get('/',
  Auth.user,
  asyncHandler(OrderController.getOrders)
)

router.post('/',
  Auth.anonymous, 
  Validations.createOrder,
  asyncHandler(OrderController.createOrder )
)

router.patch('/:id',
  Auth.admin,
  Validations.updateOrder,
  asyncHandler(OrderController.updateOrderStatus)
)

module.exports = router