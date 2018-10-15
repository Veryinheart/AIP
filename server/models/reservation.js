var mongoose = require('mongoose');

// connect database
//mongoose.connect('mongodb://localhost/test', { useMongoClient: true })

var Schema = mongoose.Schema
// set reservation schema
var reservSchema = new Schema({

  resname: String,
  r_id: String,
  u_id: String,
  time: String,
  date: String,
  cusno: String,
  email: String,
})

module.exports = mongoose.model('Reservation', reservSchema,"reserv_tab") 