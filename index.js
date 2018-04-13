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
        
      
        // if it returns true, send "Correct!" message to user
        if (newWord.charCheck(userGuess)) {
            console.log("Correct!");        
         }
       
        //if it returns false, turns -1, send "Not Correct" message
        else { 
            console.log("Wrong");
            turns --;
            console.log("You have " + turns + " turns left.");
        }

       
    //check to see if more letters/turns left

        newWord.charString(); //ERROR*****pushing new word to array
        // need to look at string of letters to see if there are any blanks left

        console.log(newWord.charString());//show gameWord with guessed characters showing

        console.log("code got this far");//************************** 
        //if blanks remain and user has turns left, prompt to guess again
        if (newWord.indexOf("_")>0 && turns>0) {  
        promptUser();
        }
        // if turns = 0, -- lose -- send message "You Lost: Game Over"
        //restart game with new word
        else if (turns === 0){
        console.log("Sorry.  You are out of guesses.  You lost.");
        start();
        }
        // if no blanks left -- win -- send message "You Won"
        // restart game with new word
        else {  
        console.log("You guessed the word! Congrats! You Won!");
        start();
        }
    });
};


