const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DetailsSchema = new Schema({
  text: String, 
  email: String, 
  number: Number,
  filePath: String
})

module.exports = mongoose.model('Details', DetailsSchema);