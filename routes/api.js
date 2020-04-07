const express = require('express');
const router = express.Router();
const GuessesModel = require('../models/guessesModel');

router.get('/', (req, res) => {
    res.send("Baby Byrd's API").status(200);
})

router.get('/guesses', async (req, res) => {
    const guessData = await GuessesModel.getGuesses();

    res.json(guessData).status(200);
});

module.exports = router;