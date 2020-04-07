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
            console.log(error);
            return error;
        }
    }
}