const {Router} = require('express')
const Auth = require('../middleware/auth')
const ImageController = require('../controllers/ImageController')
const router = new Router()
const fileUpload = require('express-fileupload')

router.get('/', Auth.admin, ImageController.getAll)
router.post('/', 
  Auth.admin, 
  fileUpload({useTempFiles:true}),
  ImageController.upload
)

module.exports = router