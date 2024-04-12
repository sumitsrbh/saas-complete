const mongoose = require('mongoose')

const cardSchema = new mongoose.Schema({
  badge: {
    type: String,
    required: [false, 'Please write the badge'],
  },
  imagelink: {
    type: String,
    required: [true, 'please provide the link'],
    lowercase: true,
  },
  title: {
    type: String,
    lowercase: true,
  },
  headertext: {
    type: String,
    required: [true, 'Mention the header text'],
    unique: true,
  },
  author: {
    type: String,
    required: [false, 'Mention the author'],
  },
  body: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now(),
    // select: true,
  },

  ReadingTime: {
    type: Number,
  },
})

const Card = mongoose.model('Card', cardSchema)

module.exports = Card
