//Install npm for project:     npm install inquirer

//require modules or npm packages
var inquirer = require('inquirer');
var Word = require('./Word.js');

var turns; // variable to keep track of turns
var words; // array of game words to choose from

//Start a New Game
function start(){
    //Set turns to 10 to start
    turns = 10;
    //Pick random word
        //Array of game words :  assemble here
        words = ["the birdcage", "the godfather", "lord of the rings", "twilight", "young frankenstein"];
        //note:  lowercase values entered so dont need to chabge case
        var randomNum = Math.floor(Math.random()* words.length);

        //Set game word:  
        gameWord = words[randomNum];
};

start();

// create new instance of Word using gameWord
var newWord = new Word(gameWord);

//Display word blanks for user to see on command line
console.log(newWord.toString);

//Prompt user to guess using Inquirer NPM
inquirer.prompt([
        {
        type: "input",
        message: "What is your name?",
        name: "guess"
    },
    ])
    .then(function(inquirerResponse) {
        // If the inquirerResponse confirms, we displays the inquirerResponse's username and pokemon from the answers.
        if (inquirerResponse.confirm) {
          return inquirerResponse.guess;
        }
        
    });
 
//Process guess
 processGuess = function(){
     //check to see if guess is a character in gameWord
    newWord.charCheck(inquirerResponse.guess);

    // if it returns true, send "Correct!" message to user

    //if it returns false, turns -1, send "Not Correct" message

    // if no blanks left -- win -- send message "You Won"
    // restart game with new word

    // if turns = 0, -- lose -- send message "You Lost: Game Over"
    //restart game with new word



 };    