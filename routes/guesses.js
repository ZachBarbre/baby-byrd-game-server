const express = require('express');
const router = express.Router();

const GuessesModel = require('../models/GuessesModel');

// GET guesses 
router.get('/', async (req, res) => {
  const guesses = await GuessesModel.find();
  res.json(guesses);
});

module.exports = router;
