
var inquirer = require('inquirer');
var Word = require('./Word');

var songOfFireIce = ['A Game of Thrones', 'A Clash of Kings', 'A Storm of Swords',
    'A Feast for Crows', 'A Dance with Dragons', 'The Winds of Winter', 'A Dream of Spring',
];
var activeWord;
var guesses = 10;
var lettersGuessed = [];


function restartGame() {
    var selection = songOfFireIce[Math.floor(Math.random() * songOfFireIce.length)];
    activeWord = new Word(selection);
    activeWord.songOfFireIce();
};

function librarian() {
    inquirer
        .prompt([
            {
                type: 'input',
                message: 'Name your favorite Song of Fire and Ice Book: Pick a letter!',
                name: 'letter'
            }

        ]).then(function (answer) {

            if (lettersGuessed.indexOf(answer.letter) === -1) {

                lettersGuessed.push(answer.letter);
                activeWord.checkLetter(answer.letter);
                var string = activeWord.createString();
                console.log(string);

                if (string.indexOf("_") === -1) {
                    console.log("That's Right! Guess a new letter!");
                    guesses = 10;
                    lettersGuessed = [];
                    restartGame();
                    librarian();
                } else {
                    guesses--;
                    console.log("You have " + guesses + " guesses remaining!");
                    if (guesses > 0) {
                        librarian();
                    } else {
                        console.log("You ran out of guesses, sorry, you lose.");
                    }
                }
            } else {
                console.log("");
                librarian();
            }

        });
};


restartGame();
console.log("Would you like to play Terminal Hangman?");
librarian();

