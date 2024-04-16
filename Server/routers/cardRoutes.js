const express = require('express')
const router = express.Router()
const multer = require('multer')
const authController = require('../Controllers/authController')

const cardController = require('../Controllers/cardController')

//routes for image storage
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads') //destination folder
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname) //specify the filename
  },
})

// Initialize Multer with storage options
const upload = multer({ storage: storage })

router
  .route('/')
  .get(cardController.getAllCards)
  // .post( cardController.createCard)
  .post(upload.single('imagelink'), cardController.createCard)

router
  .route('/:id')
  .get(cardController.getCard)
  .patch(upload.single('imagelink'), cardController.updateCard)
  .delete(cardController.deleteCard)

module.exports = router
