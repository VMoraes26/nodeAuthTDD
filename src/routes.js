const routes = require('express').Router()

const { User } = require('./app/models')

User.create({
  name: 'Moraes',
  email: 'moraes@gmail.com.br',
  password_hash: '123456789',
})

module.exports = routes
