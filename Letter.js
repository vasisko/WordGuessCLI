//Contains a constructor, Letter. This constructor should be able to either display an underlying character or a blank placeholder (such as an underscore), depending on whether or not the user has guessed the letter. That means the constructor should define:

//  * A string value to store the underlying character for the letter

//  * A boolean value that stores whether that letter has been guessed yet

//  * A function that returns the underlying character if the letter has been guessed, or a placeholder (like an underscore) if the letter has not been guessed...whatToDisplay

//  * A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly.....guessCheck

var Letter = function(value,boolean){
    // underlying character 
    this.character = value;  
   
    // boolean for guessed state: T=guessed, F=not
    this.showChar = boolean;

    // stats is just for troubleshooting...
    this.stats = function(){
        console.log(this.character + this.userGuess + this.showChar);
    };
    
    //function to assign Character or Placeholder
    this.whatToDisplay = function(){
         if(this.showChar) {
            return this.userGuess;
         }
        return "_ ";
    };

    // function to check the user's guess: takes a character as an argument and checks it against the underlying character
    this.guessCheck = function(guess){
        if (guess===this.character){
            return this.showChar = true;
        }
        return this.showChar=false;
    };

};

var newLetter = new Letter('p', false);
newLetter.guessCheck('p');
console.log(newLetter.showChar);

//console.log(newLetter.whatToDisplay());
//console.log(newLetter.guessCheck());
   // console.log(Letter.whatToDisplay());
   // console.log(Letter.guessedYet);
// Exporting the Movie constructor which we will use in main.js
module.exports = Letter;