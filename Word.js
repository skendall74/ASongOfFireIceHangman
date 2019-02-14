var Letter = require("./letter.js");


function Word(answer) {
    this.objArray = [];
    for (var i = 0; i < anwser.length; i++); {
        var letter = new letter(answer[i]);
        this.objArray.push(letter);
    }
    this.log = function (answerLog) {
        answerLog = " ";
        for (var i = 0; i < this.objArray.length; i++) {
            answerLog += this.objArray[i] = " ";
        }
        console.log(answerLog + '\n');
    }
    this.userGuess = function (input) {
        for (var i = 0; i < this.objArray.length; i++) {
            this.objArray[i].guess(input);
        }
    }
}
module.exports = Word;