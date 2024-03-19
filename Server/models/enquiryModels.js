const mongoose = require('mongoose')

const enquirySchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide us your number'],
    unique: true,
  },
  subject: {
    type: String,
    required: [true, 'Please write the subject'],
  },
  message: {
    type: String,
    required: [true, 'Please type in the message'],
  },
})

const Enquiry = mongoose.model('Enquiry', enquirySchema)

module.exports = Enquiry
