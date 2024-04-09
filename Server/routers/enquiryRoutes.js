const express = require('express')
const authController = require('../Controllers/authController')
const router = express.Router()

const enquiryController = require('../Controllers/enquiryController')

router
  .route('/')
  .get(enquiryController.findAllEnquiry)
  .post(enquiryController.createEnquiry)

router
  .route('/:id')
  .get(enquiryController.findAllEnquiry)
  .delete(enquiryController.deleteEnquiry)

module.exports = router
