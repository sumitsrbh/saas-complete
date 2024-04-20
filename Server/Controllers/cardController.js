const express = require('express')
const fs = require('fs')
const Card = require('../models/cardModels')
const catchAsync = require('../utils/catchAsync')

const baseURL = 'http://127.0.0.1:8000/'
const startsWithHTTP = 'http:'

// Method to manipulate imagelink
// const manipulateImagelink = (data) => {
//   if (Array.isArray(data)) {
//     return data.map((item) => {
//       return {
//         ...item,
//         imagelink: baseURL + item.imagelink.replace(/\\/g, '/'),
//       }
//     })
//   } else {
//     return {
//       ...data,
//       imagelink: baseURL + data.imagelink.replace(/\\/g, '/'),
//     }
//   }
// }

exports.getAllCards = catchAsync(async (req, res, next) => {
  const resultCard = await Card.find()
  // const cards = manipulateImagelink(resultCard)
  const cards = resultCard.map((card) => {
    const imagelink = card.imagelink.startsWith(startsWithHTTP)
      ? card.imagelink
      : baseURL + card.imagelink.replace(/\\/g, '/')

    return {
      ...card.toObject(),
      imagelink,
    }
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
  const resutlCards = await Card.findById(req.params.id)
  const imagelink = resutlCards.imagelink.startsWith(startsWithHTTP)
    ? resutlCards.imagelink
    : baseURL + resutlCards.imagelink.replace(/\\/g, '/')

  const cards = {
    ...resutlCards.toObject(),
    imagelink,
  }

  // console.log('get card response ', cards)
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

  console.log('create card  req.body', req.body)
  console.log('create card  image link', imagelink)
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

  // fetch the update list of cards
  const resultCard = await Card.find()
  // const cards = manipulateImagelink(resultCard)
  const cards = resultCard.map((card) => {
    const imagelink = card.imagelink.startsWith(startsWithHTTP)
      ? card.imagelink
      : baseURL + card.imagelink.replace(/\\/g, '/')

    return {
      ...card.toObject(),
      imagelink,
    }
  })

  res.status(201).json({
    message: 'Card created',
    data: {
      cards,
    },
  })
})

exports.updateCard = catchAsync(async (req, res, next) => {
  console.log('In the update Card')
  let { badge, title, headertext, body, author, date } = req.body
  console.log('update card  req.body', req.body)
  const imagelink = req.file ? req.file.path : imagelink

  console.log('update card  image link', imagelink)
  // exclude the blank fields
  const updateFields = {
    ...(badge && { badge }),
    ...(title && { title }),
    ...(headertext && { headertext }),
    ...(body && { body }),
    ...(author && { author }),
    ...(date && { date: req.customDate }),
    ...(imagelink && { imagelink }),
  }

  const result = await Card.findByIdAndUpdate(req.params.id, updateFields, {
    new: true,
    runValidators: true,
  })
  // console.log('update  resultCard ', result)

  if (!result) {
    return res.status(404).json({ message: 'Card not found' })
  }

  const resultCard = await Card.find()
  // const cards = manipulateImagelink(resultCard)
  console.log('baseURL', baseURL)
  console.log('req.body', req.body)
  console.log('updatefields', updateFields)
  const cards = resultCard.map((card) => {
    const imagelink = card.imagelink.startsWith(startsWithHTTP)
      ? card.imagelink
      : baseURL + card.imagelink.replace(/\\/g, '/')

    return {
      ...card.toObject(),
      imagelink,
    }
  })
  // console.log('update  resultCard ', cards)
  res.status(200).json({
    message: 'Card updated ',
    result: cards.length,
    data: {
      cards,
    },
  })
})

const deleteImage = (imagelink) => {
  fs.unlink(imagelink, (err) => {
    if (err) {
      console.log('Erro deleting image:', err)
    }
    console.log('Image deleted succefully')
  })
}

exports.deleteCard = catchAsync(async (req, res, next) => {
  const card = await Card.findByIdAndDelete(req.params.id, req.body)

  if (!card) {
    return res.status(404).json({
      message: 'Card not found',
      data: null,
    })
  }

  //delete the image file
  deleteImage(card.imagelink)
  // fetch the update list of cards
  const resultCard = await Card.find()
  // const cards = manipulateImagelink(resultCard)
  const cards = resultCard.map((card) => {
    const imagelink = card.imagelink.startsWith(startsWithHTTP)
      ? card.imagelink
      : baseURL + card.imagelink.replace(/\\/g, '/')

    return {
      ...card.toObject(),
      imagelink,
    }
  })

  res.status(200).json({
    message: 'Card deleted',
    result: cards.length,
    data: cards,
  })
})
