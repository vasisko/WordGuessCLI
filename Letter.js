
//Constructor for setting character or blank for letter of game word 
var Letter = function(value){
    // underlying character 
    this.character = value;  
   
    // boolean for guessed state: T=guessed, F=not
    this.showChar = false;
    
    //function to assign Character or Placeholder
    this.whatToDisplay = function(){
         if(this.showChar) {
            return this.character;
         }
        return "_ ";
    };

    // function to check the user's guess: takes a character as an argument and checks it against the underlying character
    this.guessCheck = function(guess){
        if (guess===this.character){
            console.log(guess===this.character);
            return this.showChar = true;
        }
        return this.showChar = false;
    };

};

//For checking
//var newLetter = new Letter('p');
//newLetter.guessCheck('p');
//console.log(newLetter.showChar);
//console.log(newLetter.whatToDisplay());


// Export the Letter constructor for use in Word.js
module.exports = Letter;