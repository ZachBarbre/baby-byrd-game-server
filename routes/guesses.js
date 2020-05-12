const express = require('express');
const router = express.Router();

const GuessesModel = require('../models/GuessesModel');

// GET guesses 
router.get('/', async (req, res) => {
  const guesses = await GuessesModel.find();
  res.json(guesses);
});

router.post('/', async (req, res) => {
  const newGuess = new GuessesModel({
    name: req.body.name,
    babyWeight: req.body.babyWeight,
    birthDate: req.body.birthDate,
    sex: req.body.sex,
  });
  try {
    const guess = await newGuess.save();
    console.log(guess);
    res.json(guess);
  } catch (error) {
    console.log(error);
    res.sendStatus(400);
  }
});

router.delete('/:id', async (req, res) =>{
  try {
    const guess = await GuessesModel.findById(req.params.id);
    const deletedGuess = await guess.remove();
    res.json({sucess: true});
  } catch (error) {
    console.log(error);
    res.status(404).json({sucess: false});
  }
});

module.exports = router;