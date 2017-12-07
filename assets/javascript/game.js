
var wins = 0;
var numGuesses = 8;

var list = ["azalea", "buttercup", "carnation", "chrysanthemum",
 "cornflower", "crocus", "daffodil", "dahlia", "daisy", "dandelion",
  "iris", "lavender", "lilac", "lily", "marigold", "orchid",
   "rose", "sunflower", "tulip", "violet", "zinnia"];

var guessed = [];

var word = list[Math.floor(Math.random() * list.length)];
// display dashes on screen
console.log("_" * word.length);

console.log(word);

document.onkeyup = function(event){

	var input = event.key;
	console.log(input);

	// assign the unicode value of the pressed key to x
	var x = event.charCode;

	// only execute if the key pressed is a letter 
	//(lowercase or uppercase)
	if ((x >= 65 && x <= 90) || (x >= 97 && x <= 122)){
		// var input = event.key;

		// if the guessed letter is in the word
		if (word.indexOf(input)!= -1){
			//display where the letter occurs

			//if got the whole word
				//won
		}
		else{
			numGuesses--;
			//add the guessed letter to the guessed array
			guessed.push(input);
			//display guessed letters
			updateGuesses();
			console.log(input);

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
