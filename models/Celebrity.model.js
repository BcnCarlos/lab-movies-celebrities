//  Add your code here
const mongoose = require('mongoose')
const { Schema, model} = mongoose

const celebritiesSchema = new Schema({
name: { type: String},
occupation: {type: String},
catchPhrase: {type: String}

})

module.exports = model('Celebrity', celebritiesSchema) 