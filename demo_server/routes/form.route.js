const Router = require('express').Router()
const {formHanlderPost} = require('../controllers/form')

Router.post('form',formHanlderPost)

module.exports = Router