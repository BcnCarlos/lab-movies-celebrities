const mongoose = require('mongoose')
const { Schema, model} = mongoose

const movieSchema = new Schema({
title: { type: String},
genre: {type: String},
plot: {type: String},
cast: [{ type: mongoose.Schema.Types.ObjectId, ref: "Celebrity"}],
})

module.exports = model('Movie', movieSchema) 