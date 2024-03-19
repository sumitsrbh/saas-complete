const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please tell us your name'],
  },
  email: {
    type: String,
    required: [true, 'please provide your email'],
    unique: true,
    lowercase: true,
    //email converted to all lowercase.
    validate: [validator.isEmail, 'Please provide a valid email!'],
  },
  password: {
    type: String,
    required: [true, 'An email must have password'],
    minlength: 8,
    // now password not visible to client otherwise,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please confirm your password!'],
    validate: {
      // this only works on Create and save!!
      validator: function(el) {
        return el === this.password
      },
      message: 'password not same',
    },
  },
  photo: {
    type: String,
  },
})

userSchema.pre('save', async function(next) {
  if (!this.isModified('password')) return next()
  this.password = await bcrypt.hash(this.password, 12)

  this.passwordConfirm = undefined
  next()
})

userSchema.methods.correctPassword = async function(
  candidatepassword,
  userpassword
) {
  return await bcrypt.compare(candidatepassword, userpassword)
}

const User = mongoose.model('User', userSchema)

module.exports = User
