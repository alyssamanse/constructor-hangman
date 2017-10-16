var Word = require("./word.js");
var Letter = require("./letter.js");
var inquirer = require("inquirer");

// Word bank with index to choose random word from list
var wordChoices = ["CHARDONNAY", "RIESLING", "MERLOT", "CABERNET", "ZINFANDEL", "MALBEC", "SHIRAZ", "MOSCATO", "ROSE", "PROSECCO", "CHAMPAGNE", "TEMPRANILLO"];
var wordIndex = Math.floor(Math.random() * wordChoices.length);

var newWord = new Word(wordChoices[wordIndex]);
var maxGuesses = 10;

function takeAGuess(){

	// Displays word to guess as a string of blanks and letters
	console.log(newWord.toDisplay() + "\n");

	// Game ends (loss) if no more guesses remain
	if (newWord.guessedLetters.length >= maxGuesses){
		console.log("Sorry, no more guesses left!");
		return; 
	}

	// Prompt to guess letter
	inquirer.prompt([
		{
		name: "letter",
		type: "text",
		message: "Guess a letter! ",
		}
	]).then(function(letterInput){ 

		// Changes input to capital letter
		var letter = letterInput.letter.toUpperCase(); 

		// Check for input letter in word and change display
		newWord.searchLetter(letter);
		newWord.toDisplay();

		// If the entire word is completed and guesses remain, game ends  (win)
		if(newWord.isWordComplete()){ 
			console.log("You got it! The word was '" + newWord.toDisplay() + "'");
			return;
		}

		// If the word is not completed and guesses remain, prompt to guess again
		console.log("-----------------\n");
		console.log("You have " + (maxGuesses - newWord.guessedLetters.length) + " guesses remaining\n");
		takeAGuess();

		}
  );
}

takeAGuess();