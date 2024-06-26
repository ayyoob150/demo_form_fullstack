const mongoose = require('mongoose')

const FormSchema = mongoose.Schema({
    firstName : { type: String, required: true, trim: true }
})

const FormModel = mongoose.model('Form',FormSchema)

module.exports = FormModel