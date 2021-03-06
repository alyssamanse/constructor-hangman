function Letter(letter) {
	this.letter = letter;
	this.showLetter = false;
}

// Determines whether letter has been guessed to display or to show blank
Letter.prototype.render = function() {
	if (this.showLetter) {
		return this.letter;
	} else {
		return "_ ";
	}
}

module.exports = Letter;