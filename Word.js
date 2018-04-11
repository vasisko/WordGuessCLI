// **Word.js**: Contains a constructor, Word that depends on the Letter constructor. This is used to create an object representing the current word the user is attempting to guess. That means the constructor should define:

// * An array of `new` Letter objects representing the letters of the underlying word

//  * A function that returns a string representing the word. This should call the function on each letter object (the first function defined in `Letter.js`) that displays the character or an underscore and concatenate those together.

//  * A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in `Letter.js`)
//----------------------------------------------
var Letter = require('./Letter.js');
//Constructor creates object representing current word being guessed

var letterArray=[];//array containing each letter of game word
var wordDisplay = "";//string of concatenated array values to be displayed at CLI

var Word = function(gameWord){

    //word to be played (index.js sends this)
    this.gameWord = gameWord;

    // Create array of letters-- these are underlying letters of word being guessed
    this.gameLetters = function(){
            //each letter becomes an array element
            for (var i = 0; i < this.gameWord.length; i++) {
                letterArray[i] = this.gameWord.charAt(i);
    };

    // Concatenate array of letters into string for user display
    this.toString = function(letterArray){

        //for each letter of gameWord, call Letter.whatToDisplay ---assigns either character or placeholder for each letter
        //concatenate into one string to display
        

        for (var i = 0; i < letterArray.length; i++) {
            var newCharacter = new Letter.whatToDisplay(letterArray[i]);
            wordDisplay = wordDisplay.push(newCharacter);
        }
        return wordDisplay;
    };

    this.gamePlay = function(guess){

        var results = new Letter.guessCheck(guess);
        return results;
    };


};

var newWord = Word('bird');
conole.log(newWord.gamePlay)