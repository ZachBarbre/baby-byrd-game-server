const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GuessSchema = new Schema({
  name: {
    type: String,
    required: true,
  }, 
  babyWeight: {
    type: Number,
    required: true,
  }, 
  birthDate: {
    type: Date,
    required: true,
  },
  sex: {
    type: String, 
    enum: ['boy', 'girl'],
    required: true
  }
});

module.exports = 
  GuessesModel = mongoose.model('guesses', GuessSchema);