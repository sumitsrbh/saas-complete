const express = require('express')
const router = express.Router()
const authController = require('../Controllers/authController')

const cardController = require('../Controllers/cardController')

router
  .route('/')
  .get(cardController.getAllCards)
  .post(cardController.createCard)

router
  .route('/:id')
  .get(cardController.getCard)
  .patch(cardController.updateCard)
  .delete(cardController.deleteCard)

module.exports = router
