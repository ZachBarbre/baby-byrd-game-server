const GuessesModel = require('./models/guessesModel');

const addGuess = async (name, date, weight, sex) => {
    const addedGuess = await GuessesModel.postGuess(name, date, weight, sex);
    console.log(addedGuess);
}

const getGueses = async () => {
    const guessData = await GuessesModel.getGuesses();
    console.log(guessData);
}


const deleteGuess = async (id) => {
    const deleteResponse = await GuessesModel.deleteGuess(id);
    console.log(deleteResponse);
}

// addGuess('Jim', '6-25-2020', 145, 'girl');

// getGueses();

// deleteGuess(5);