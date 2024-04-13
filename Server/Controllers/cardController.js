const express = require('express')
const Card = require('../models/cardModels')
const catchAsync = require('../utils/catchAsync')

const baseURL = 'http://127.0.0.1:8000/'

exports.getAllCards = catchAsync(async (req, res, next) => {
  const resultCard = await Card.find()
  const cards = resultCard.map((card) => {
    return {
      ...card.toObject(),
      // imagelink: baseURL + card.imagelink,
      imagelink: baseURL + card.imagelink.replace(/\\/g, '/'),
    }
  })

  cards.forEach((card, index) => {
    console.log(`Card ${index + 1} imagelink:`, card.imagelink)
  })

  res.status(200).json({
    message: 'All listed card',
    result: cards.length,
    data: {
      cards,
    },
  })
})

exports.getCard = catchAsync(async (req, res, next) => {
  const resultCard = await Card.findById(req.params.id)
  const cards = {
    ...resultCard.toObject(),
    imagelink: baseURL + resultCard.imagelink.replace(/\\/g, '/'),
  }
  console.log('get card response ', cards)
  res.status(200).json({
    message: 'Card found',
    data: {
      cards,
    },
  })
})

// exports.createCard = catchAsync(async (req, res, next) => {
//   const card = await Card.create(req.body)
//   res.status(201).json({
//     message: 'Card created',
//     data: {
//       card,
//     },
//   })
// })

exports.createCard = catchAsync(async (req, res, next) => {
  // Extract the imagelink from the request body
  const { badge, title, headertext, body, author, date } = req.body
  const imagelink = req.file.path // Multer adds a 'file' property to the request object containing file information

  console.log('cardController image link', imagelink)
  // Create a new card with the provided data
  const card = await Card.create({
    badge,
    title,
    headertext,
    imagelink,
    body,
    author,
    date: req.customDate,
  })

  res.status(201).json({
    message: 'Card created',
    data: {
      card,
    },
  })
})

exports.updateCard = catchAsync(async (req, res, next) => {
  const card = await Card.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  })
  const cards = await Card.find()
  res.status(200).json({
    message: 'Card updated',
    result: cards.length,
    data: cards,
  })
})

exports.deleteCard = catchAsync(async (req, res, next) => {
  const card = await Card.findByIdAndDelete(req.params.id, req.body)

  if (!card) {
    return res.status(404).json({
      message: 'Card not found',
      data: null,
    })
  }
  // fetch the update list of cards
  const cards = await Card.find()
  res.status(200).json({
    message: 'Card deleted',
    result: cards.length,
    data: cards,
  })
})
