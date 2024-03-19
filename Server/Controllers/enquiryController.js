const express = require('express')
const Enquiry = require('../models/enquiryModels')
const catchAsync = require('../utils/catchAsync')

exports.createEnquiry = catchAsync(async (req, res, next) => {
  const newEnquiry = await Enquiry.create(req.body)
  res.status(201).json({
    message: 'success',
    data: {
      newEnquiry,
    },
  })
})

exports.findAllEnquiry = catchAsync(async (req, res, next) => {
  const enquiry = await Enquiry.find()
  res.status(200).json({
    message: 'success',
    noOfEnquiry: enquiry.length,
    data: {
      enquiry,
    },
  })
})
exports.findEnquiry = catchAsync(async (req, res, next) => {
  const enquiry = await Enquiry.find(req.body)
  res.status(200).json({
    message: 'success',
    data: {
      enquiry,
    },
  })
})

exports.deleteEnquiry = catchAsync(async (req, res, next) => {
  const enquiry = await Card.findByIdAndDelete(req.params.id, req.body)
  res.json(200).json({
    status: 'success',
    data: null,
  })
})
