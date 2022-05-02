const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ParsedDataSchema = new Schema({
  Name: String, 
  Title: String, 
  Email: String,
  LinkedIn: String, 
  Company: String,
  Industry: String,
  Website: String,
  Headquarters: String,
  Revenue: String,
  CompanySize: String
})

module.exports = mongoose.model('ParsedData', ParsedDataSchema);