// **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

// * An array of `new` Letter objects representing the letters of the underlying word

//  * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

//  * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
//----------------------------------------------
var Letter = require('./Letter.js');

var letterArray=[];//array containing each letter of game word
var wordDisplay = "";//string of concatenated array values to be displayed at CLI

//Constructor creates object representing current word being guessed-------------------------------
var Word = function(gameWord){

    //word to be played (index.js sends this)
    this.wordPlayed = gameWord;

    // Create array of letters-- these are underlying letters of word being guessed
    this.gameLetters = this.wordPlayed.split('');
            
    // Concatenate array of letters into string for user display
    this.charString = function(){

        //for each letter of gameWord, call Letter.whatToDisplay ---assigns either character or placeholder for each letter
        //concatenate into one string to display
    
        for (var i = 0; i < this.gameLetters.length; i++) {
            var newLetter = new Letter(this.gameLetters[i]);
            letterArray[i] = (newLetter.whatToDisplay());
           // console.log('New Letter' + newLetter.character);
        }
        
        return  letterArray.join(" ");
    };
    // Check to see if guess is letter in word
    this.charCheck = function(guess){
        var goodguess = 0;
        for (var i = 0; i < this.gameLetters.length; i++) {
            var newLetter = new Letter(this.gameLetters[i]);
            var match = newLetter.guessCheck(guess);
            if (match) { goodguess ++;};

            letterArray[i] = newLetter.whatToDisplay();
        }
         
        //show gameWord with guessed characters showing
        console.log(letterArray.join(" "));
        //results: T=guess is in game word=good guess
        if(goodguess>0) {
            //*************add this in somehow--- if "_" play again */
            if(letterArray.indexOf("_")>0){
                console.log("blanks still left");
                return "guessedChar";
            }
            else {
                console.log("no blanks left");
                return "guessedAll";
            }
        }    
        else {
            console.log("bad guess");
            return "guessedWrong";
        }
    };


};

// Export the Letter constructor for use in Word.js
module.exports = Word;

//for troubleshooting 
//var newWord = new Word('bird');
//console.log(newWord.gameLetters);
//console.log(newWord.charString());
//console.log(newWord.charCheck("s"));
//console.log(newWord.charCheck("b"));


