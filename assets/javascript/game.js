
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

var wordStr = "";
var wordDisplay = [];

wordArray = word.split("");

for (var i = 0; i < word.length; i++){
	wordDisplay.push("_");
}


// console.log(word);
// console.log("word Array: " + wordArray);
// console.log("word Display: " + wordDisplay);

document.onkeyup = function(event){

	var input = event.key;
	console.log("letter guessed: " + input);
	console.log("index of the letter: " + word.indexOf(input))

	//index of the first appearance of the input letterin the word
	var index = word.indexOf(input);

	// only execute if the key pressed is a letter 
	//(lowercase or uppercase)


		// check if the user input is a letter (if not, nothing will happen)
		// Im sure there is a better way to do this
		if (letters.indexOf(input.toLowerCase()) != -1){

			console.log("you have determined input is a letter");

		// if the guessed letter is in the word
			if (index != -1){  

			//display where the letter occurs 
			//(change the wordDisplay array)

				wordDisplay[index] = input;
				wordStr = wordDisplay.join(" ");
				updateWordDisplay();
				console.log(wordDisplay);

			//check if the letter appears more than once
			//start with the element after the first instance
			//loop through and check if it's there again

			//if it does, display all instances

				for (var i = index + 1; i < word.length; i++) {
					if (word[i] == input){
						console.log("guess: " + input + " index: " + i + " letter in array " + word[i])
						wordDisplay[i] = input;
						console.log(wordDisplay);
					}	
				}

			//if got the whole word (there are no dashes left in wordDisplay)
				if (wordDisplay.indexOf("_") == -1){
				//display you won message
				
					console.log("You Won");
					wins+=1;
					updateWins();

				//show a picture?

				//restart the game
					resetGame();
				}
			}

			//if the letter is not in the word
			else{
				numGuesses--;
				console.log("guesses left: " + numGuesses);
				//add the guessed letter to the guessed array
				guessed.push(input);
				//display guessed letters
				updateGuesses();
				updateGuessesLeft();
				console.log(guessed);

				// if there are no more guesses left
				if (numGuesses==0){
					//display losing message and reset the game
					updateLosses();
					resetGame();
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
		messageHeader.textContent = ("You " + str + "! The answer was " + word.toUpperCase());
	}

	function resetGame(){
		numGuesses = 8;
		word = list[Math.floor(Math.random() * list.length)];
		console.log(wins);
		console.log("New word: " + word);
		

		//clear word Display and put correct number of dashes
		// and put new word in word array
		wordArray = word.split("");

		wordDisplay=[];
		console.log("word Display: " + wordDisplay);
		for (var i = 0; i < word.length; i++){
			wordDisplay.push("_");
		}
		wordStr = wordDisplay.join(" ");
		updateWordDisplay();

		console.log("word Array: " + wordArray);
		console.log("word Display: " + wordDisplay);

//clear already guessed letters
guessed=[];


}