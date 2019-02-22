var Letter = require('./Letter');

function Word(word) {
    this.lettersObj = [];
    this.songOfFireIce = function () {
        for (i = 0; i < word.length; i++) {
            this.lettersObj.push((new Letter(word.charAt(i))));
        }
    };
    this.createString = function () {
        var string = "";
        for (var i in this.lettersObj) {
            string = string.concat(this.lettersObj[i].guessedLetter());
        }
        return string;
    };
    this.checkLetter = function (char) {
        for (var i in this.lettersObj) {
            (this.lettersObj[i].letterGuessed(char));
        }
    };
}

module.exports = Word;