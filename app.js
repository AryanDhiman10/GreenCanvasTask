const express = require("express");
const path = require('path');
const mongoose = require('mongoose');
const Details = require('./models/details');
const ParsedData = require('./models/parsedData')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })
var csv = require("csvtojson");


//Connecting to GreenCanvas Database
mongoose.connect('mongodb://localhost:27017/GreenCanvas');

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"))
db.once("open", () => {
  console.log("Database connected")
})

const app = express();

app.use(express.static(path.join(__dirname, "/public")));


//Handling get requests
app.get('/', (req, res) => {
  res.render('index');
})


//Handling post requests
app.post('/', upload.single('csvFile'), async (req, res) => {

  //Saving the form data and file path in details model
  const details = new Details(req.body);
  details.filePath = req.file.path;
  await details.save();

  //Converting csv to json
  csv()
    .fromFile(req.file.path)
    .then( (jsonObj) => {
      console.log(jsonObj)
    })
  const jsonArray = await csv().fromFile(req.file.path)

  //Saving the form data and file path in details model
  ParsedData.create(jsonArray, (err, temps) => {
    if(err) {
      return res.send(err)
    }
  });

  //Just for output purposes, sending the parsed data
  res.send(jsonArray);

})

app.listen(3000, () => {
  console.log('Serving on port 3000')
})