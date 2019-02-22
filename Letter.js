function Letter(letter) {
    this.letter = letter;
    this.guessed = false;
    this.guessedLetter = function () {
        if (this.guessed) {
            return this.letter;
        } else {
            return "_ ";
        }
    };
    this.letterGuessed = function (C) {
        if (C === this.letter) {
            this.guessed = true;
        }
    };
}

module.exports = Letter;
