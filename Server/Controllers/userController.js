const express = require('express')
const User = require('../models/userModels')
const catchAsync = require('../utils/catchAsync')

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.find()
  res.status(200).json({
    status: 'success',
    result: users.length,
    data: {
      users,
    },
  })
})

exports.getUser = (req, res) => {
  // internal servar error
  res.status(500).json({
    status: 'error',
    message: 'this route is not yet defined#',
  })
}

exports.createUser = catchAsync(async (req, res, next) => {
  const user = await User.create(req.body)
  res.status(201).json({
    status: 'success',
    data: {
      user,
    },
  })
})

exports.updateUser = (req, res) => {
  // internal servar error
  res.status(500).json({
    status: 'error',
    message: 'this route is not yet defined....',
  })
}
exports.deleteUser = (req, res) => {
  // internal servar error
  res.status(500).json({
    status: 'error',
    message: 'this route is not yet defined!',
  })
}
