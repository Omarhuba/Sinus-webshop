const {Router} = require('express')
const Auth = require('../middleware/auth')
const ProductController = require('../controllers/ProductController')
const asyncHandler = require('../utils/asyncHandler')
const Validations = require('../validations')
const router = new Router()

router.get('/',
  Auth.anonymous,
  Validations.getProducts,
  asyncHandler(ProductController.getAll)
)
router.get('/:id',      Auth.anonymous, asyncHandler(ProductController.getOne))
router.post('/', 
  Auth.admin,
  Validations.createProduct,
  asyncHandler(ProductController.create)
  )
  router.patch('/:id', 
  Auth.admin,
  Validations.updateProduct,  
  asyncHandler(ProductController.update)
)
router.delete('/:id',   Auth.admin,     asyncHandler(ProductController.delete))

module.exports = router