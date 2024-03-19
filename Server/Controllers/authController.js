const { promisify } = require('util')
const jwt = require('jsonwebtoken')
const User = require('../models/userModels')
const catchAsync = require('../utils/catchAsync')
const AppError = require('./../utils/appError')

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  })
}

exports.signup = catchAsync(async (req, res, next) => {
  const newUser = await User.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
  })

  const token = signToken(newUser._id)

  res.status(201).json({
    status: 'success',
    token,
    data: {
      user: newUser,
    },
  })
})

exports.login = catchAsync(async (req, res, next) => {
  console.log('Check login req:', req)
  const { email, password } = req.body

  if (!email || !password) {
    return next(new AppError('Please provide email and password'))
  }
  const user = await User.findOne({ email }).select('+password')

  const token = signToken(user._id)
  if (!user || !(await user.correctPassword(password, user.password))) {
    return next(new AppError('Incorrect email or password'), 401)
  }
  res.status(200).json({
    status: 'success',
    token,
  })
})

//a middleware to protect unathorised entry
exports.protect = catchAsync(async (req, res, next) => {
  //1.getting token and check if it there
  let token
  if (
    req.headers.authorisation &&
    req.headers.authorisation.startsWith('Bearer')
  ) {
    // we want the second element and store that in token.
    token = req.headers.authorisation.split(' ')[1]
  }

  if (!token) {
    return next(new AppError('You are not logged in!', 401))
  }

  // 2. validate token.
  // jwt.verify(token, process.env.JWT_SECRET)
  //call promisify on it.
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET)
  console.log('decoded data:', decoded)
  //3. check if use still exists

  //check if user changed passwrord.
  next()
})
