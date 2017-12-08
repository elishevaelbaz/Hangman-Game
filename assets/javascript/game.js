
var game = false;
var wins = 0;
var numGuesses = 8; 
var letters = ["a", "b", "c", "d", "e", "f", "g",
			"h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s",
			"t", "u", "v", "w", "x", "y", "z"];

var list = ["azalea", "buttercup", "carnation", "chrysanthemum",
			"cornflower", "crocus", "daffodil", "dahlia", "daisy", "dandelion",
			"iris", "lavender", "lilac", "lily", "marigold", "orchid",
			"rose", "sunflower", "tulip", "violet", "zinnia"];

var guessed = [];
var word = list[Math.floor(Math.random() * list.length)];
var wordArray = [];
var wordDisplay = [];

//array with the letters of the answer
wordArray = word.split("");

// array of correct # of dashes
for (var i = 0; i < word.length; i++){
	wordDisplay.push("_");
}

// to display the dashes and correctly guessed letters 
//(without having the commas)
var wordStr = wordDisplay.join(" ");


//when key is pressed
document.onkeyup = function(event){

	var input = event.key;

	//index of the first appearance of the input letter in the word
	var index = word.indexOf(input);

	//To start a new game
	if (input == "Enter"){
		game = true;
		console.log("Pressed enter");
		updateWordDisplay();
		resetGame();
	}

	// set a flag, only execute the rest of the game if they press enter
	if (game == true){

		// check if the user input is a letter (if not, nothing will happen)
		// Im sure there is a better way to do this

		if (letters.indexOf(input.toLowerCase()) != -1){

			// if the guessed letter is in the word
			if (index != -1){  

				//check if the letter appears more than once
				//start with the element after the first instance
				//loop through and check if it's there again

				//if it does, display all instances

				for (var i = index; i < word.length; i++) {
					if (word[i] == input){
						wordDisplay[i] = input;
					}	
				}

				//display where the letter occurs 
				//(change the wordDisplay array)
				wordDisplay[index] = input;
				wordStr = wordDisplay.join(" ");
				updateWordDisplay();

				//if got the whole word (there are no dashes left in wordDisplay)
				if (wordDisplay.indexOf("_") == -1){
				
					wins+=1;
					updateWins();
					//stop their input from being recorded until they press enter
					game = false; 					

				}
			}
			
			//if the letter is not in the word
			else{
				numGuesses--;
				updateGuessesLeft();
				//add the guessed letter to the guessed array and display
				guessed.push(input);
				updateGuesses();

				// if there are no more guesses left
				if (numGuesses==0){
					//display losing message and stop the game until they press enter
					updateLosses();
					game = false;
				}
			}
			
		}
	}

	} //close onkeyevent


	//functions
	function updateWordDisplay(){
		var wordDisplayHeader = document.getElementById("currentWord");
		wordDisplayHeader.textContent = (wordStr);
	}

	function updateGuesses(){
		var lettersGuessedHeader = document.getElementById("lettersGuessed");
		lettersGuessedHeader.textContent = guessed;
	}

	function updateGuessesLeft(){
		var guessHeader = document.getElementById("guessesLeft");
		guessHeader.textContent = numGuesses;
	}

	function updateWins(){
		var winHeader = document.getElementById("numWins");
		winHeader.textContent = wins;
		updateMessage("won");
	}

	function updateLosses(){
		updateMessage("lost");
	}

	function updateMessage(str){
		var messageHeader = document.getElementById("message");
		messageHeader.textContent = ("You " + str + "! The answer was " +
			word.toUpperCase());
	}

	function resetGame(){

		//reset guessesLeft
		numGuesses = 8;
		updateGuessesLeft();

		//clear already guessed letters
		guessed=[];
		updateGuesses();

		//choose a new word
		word = list[Math.floor(Math.random() * list.length)];
		console.log(wins);
		console.log("New word: " + word);
		
		//clear word Display and put correct number of dashes
		// and put new word in word array
		wordArray = word.split("");
		wordDisplay=[];

		for (var i = 0; i < word.length; i++){
			wordDisplay.push("_");
		}
		wordStr = wordDisplay.join(" ");
		updateWordDisplay();

}