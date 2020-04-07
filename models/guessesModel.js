const db = require('./conn');

class GuessModel {
    constructor(name, birthdate, weight, sex){
        this.name = name;
        this.birthdate = birthdate;
        this.weight = weight;
        this.sex = sex;
    }

    static async getGuesses() {
        try {
            const response = await db.any(`SELECT * FROM guesses;`);
            return response;
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    static async postGuess(name, birthdate, weight, sex){
        try {
            const response = await db.one(
                `INSERT INTO guesses (name, birthdate, weight, sex)
                VALUES ($1, $2, $3, $4) RETURNING id`,[name, birthdate, weight, sex]
            );
            return response;
        } catch (error) {
            console.error(error);
            return error;
        }
    }

    static async deleteGuess(id){
        try {
            const response = await db.result(
                `DELETE FROM guesses WHERE id = $1`,[id]
            );
            return response;
        } catch (error) {
            console.error(error);
            return error;
        }
    }
}

module.exports = GuessModel;