//Install npm for project:     npm install inquirer

//require modules or npm packages
var inquirer = require('inquirer');
var Word = require('./Word.js');

var turns; // variable to keep track of turns
var words; // array of game words to choose from
var userGuess; // user's guess (letter)
var gameWord; // word being guessed
var newWord;

start();


//Start a New Game
function start(){
    //Set turns to 10 to start
    turns = 10;
    //Pick random word
        //Array of game words :  assemble here
        words = ["the birdcage", "the godfather", "lord of the rings", "twilight", "young frankenstein"];
        //note:  lowercase values entered so dont need to change case
        var randomNum = Math.floor(Math.random()* words.length);

    //Set game word:  
    gameWord = words[randomNum];
    console.log(gameWord);

    // create new instance of Word for gameWord
    newWord = new Word(gameWord);

    //Display word blanks for user to see on command line
    console.log(newWord.charString());

    promptUser(newWord);

};



function promptUser(){

    //Prompt user to guess using Inquirer NPM
    inquirer.prompt([
        {
        type: "input",
        message: "Guess a letter : ",
        name: "guess"
        //validate: function validateGuess(name){
        //    return name !== '';
        }
    ])
    .then(function(response) {
       
        userGuess = response.guess;
   
        console.log("user guess= " + userGuess);
        
    
     //check to see if guess is a character in gameWord
        
      
        // if it returns guessedChar send "Correct!" message to user
        if (newWord.charCheck(userGuess)==="guessedChar") {
            console.log("Correct!"); 
            promptUser();       
         }
         // if it returns guessedAll send "Congrats!" message to user, game over, start again
        else if (newWord.charCheck(userGuess)==="guessedAll"){
            console.log("You guessed the word! Congrats! You Won!");
            start();
        }
        //if it returns guessedWrong, turns -1, send "Wrong" message
        else { 
            console.log("Wrong");
            turns --;
            //if user has turns left, continue guessing 
            if (turns>0) {
                console.log("You have " + turns + " turns left.");
                promptUser();
            }
            //if user is out of turns, game over, start again
            else {
                console.log("Sorry.  You are out of guesses.  You lost.");
                start();
            }
        }

       
    //check to see if more letters/turns left

        
        // need to look at string of letters to see if there are any blanks left
        //*****do this in Word.js

        console.log("code got this far");//************************** 
        //if blanks remain and user has turns left, prompt to guess again
        //if (newWord.includes("_")===true && turns>0) {  
        //promptUser();
        //}
        // if turns = 0, -- lose -- send message "You Lost: Game Over"
        //restart game with new word
        //else if (turns === 0){
        //console.log("Sorry.  You are out of guesses.  You lost.");
        //start();
        //}
        // if no blanks left -- win -- send message "You Won"
        // restart game with new word
        //else {  
        //console.log("You guessed the word! Congrats! You Won!");
        //start();
        //}
    });
};


