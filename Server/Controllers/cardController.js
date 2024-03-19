const express = require('express')
const Card = require('../models/cardModels')
const catchAsync = require('../utils/catchAsync')

exports.getAllCards = catchAsync(async (req, res, next) => {
  const cards = await Card.find()
  res.status(200).json({
    message: 'All listed card',
    result: cards.length,
    data: {
      cards,
    },
  })
})
exports.getCard = catchAsync(async (req, res, next) => {
  const cards = await Card.findById(req.params.id)
  res.status(200).json({
    message: 'Card found',
    data: {
      cards,
    },
  })
})

exports.createCard = catchAsync(async (req, res, next) => {
  const card = await Card.create(req.body)
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
  res.status(200).json({
    message: 'Card updated',
    data: {
      card,
    },
  })
})

exports.deleteCard = catchAsync(async (req, res, next) => {
  const card = await Card.findByIdAndDelete(req.params.id, req.body)
  res.json(204).json({
    message: 'Card deleted',
    data: null,
  })
})
