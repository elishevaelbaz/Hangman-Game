
var wins = 0;
var numGuesses = 8;

var list = ["azalea", "buttercup", "carnation", "chrysanthemum",
"cornflower", "crocus", "daffodil", "dahlia", "daisy", "dandelion",
"iris", "lavender", "lilac", "lily", "marigold", "orchid",
"rose", "sunflower", "tulip", "violet", "zinnia"];

var guessed = [];

var word = list[Math.floor(Math.random() * list.length)];

var wordArray = [];
var wordDisplay = [];

wordArray = word.split("");

for (var i = 0; i < word.length; i++){
	wordDisplay.push("_");
}


console.log(word);
console.log("word Array: " + wordArray);
console.log("word Display: " + wordDisplay);


document.onkeyup = function(event){

	var input = event.key;
	console.log("letter guessed: " + input);
	console.log("index of the letter: " + word.indexOf(input))
	var index = word.indexOf(input);
	// only execute if the key pressed is a letter 
	//(lowercase or uppercase)
	if ((input >="a" && input <= "z") || (input >= "A" && input <= "Z")){
		// var input = event.key;
		console.log("you have determined input is a letter");

		// if the guessed letter is in the word
		if (index != -1){

			//display where the letter occurs 
			//(change the wordDisplay array)

			wordDisplay[index] = input;
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

				//show a picture?

				//restart the game

				//won
			}
		}

		else{
			numGuesses--;
			console.log("guesses left: " + numGuesses);
			//add the guessed letter to the guessed array
			guessed.push(input);
			//display guessed letters
			updateGuesses();
			updateGuessesLeft();
			console.log(guessed);

			if (numGuesses==0){
				//lost
			}

			console.log(word.indexOf(input))
		}
	}

	} //close onkeyevent


	function updateGuesses(){
		var lettersGuessedHeader = document.getElementById("lettersGuessed");
		lettersGuessedHeader.textContent = guessed;
	}

	function updateGuessesLeft(){
		var guessHeader = document.getElementById("guessesLeft");
		guessHeader.textContent = numGuesses;
	}