var inquirer = require('inquirer');
var prompt = require('prompt');
var Word = require('./word.js');

var songOfFireIce = ['A Game of Thrones', 'A Clash of Kings', 'A Storm of Swords',
    'A Feast for Crows', 'A Dance with Dragons', 'The Winds of Winter', 'A Dream of Spring',
];

var randomIndex = Math.floor(Math.random * songOfFireIce.length);
var randomBook = songOfFireIce[randomIndex];

randomBook = new Word(randomBook);

var requireNewWord = false;
var incorrectLetters = [];
var correctLetters = [];
var guessesLeft = 6;

function librarian()    {
    if (requireNewWord) {
        var randomIndex = Math.floor(Math.random * songOfFireIce.length);
        var randomBook = songOfFireIce[randomIndex];

        computerBook = new Word(randomBook);
        requireNewWord = false;
    }
    var wordComplete = [];
    computerBook.objArray.forEach(completeCheck);

    if (wordComplete.includes(false))   {
        inquirer.prompt([{
            type: "input",
            message: "Guess a letter of the alphabet!",
            name: "userinput"
        }]).then(function (input) {
            if (!letterArray.includes(input.userInput) || input.userinput.length > 1) {
                console.log(`\n Please try again!\n`);
                librarian();
            } else {
                if (incorrectLetters.includes(input.userinput) || correctLetters.includes(input.userinput) || input.userinput === '') {
                    console.log(`\n You already guessed that letter or blank\n`);
                    librarian();
                } else {
                    var wordCheckArray = [];

                    computerBook.userGuess(input.userinput);

                    computerBook.objArray.forEach(workCheck);
                    if (wordCheckArray.join(' ') === wordComplete.join('')) {
                        console.log(`\nIncorrect\n`);
                        guessesLeft--;
                    } else {
                        console.log(`\nCorrect\n`);
                        correctLetters.push(input.userinput);
                    }
                    computerBook.log();

                    console.log(`Guesses Left: ` + guessLeft + `\n`);

                    if (guessesLeft > 0) {
                        librarian();
                    } else {
                        console.log(`Sorry, you have lost!\n`);

                        restartGame();
                    }

                    function wordCheck(key) {
                        workCheckArray.push(key.guessed);
                    }
                }
            }
        })
    } else {
        console.log(`YOU WIN\n Congrats, the force is with you indeed!`);
        restartGame();
    }

    function completeCheck(key) {
        wordComplete.push(key.guessed);
    }
}

function restartGame() {
    inquirer.prompt([{
        type: 'list',
        message: 'Would you like to: ',
        choices: ['Play again', 'Exit'],
        name: 'Restart'
    }])
        .then(function (input) {
            if (input.restart === 'Play Again') {
                requireNewWord = true;
                incorrectLetters = [];
                correctLetters = [];
                guessesLeft = 7;
                librarian();
            } else {
                return
            }
        })
}
librarian();