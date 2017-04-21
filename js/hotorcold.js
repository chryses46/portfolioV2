'use strict';

$(document).ready(function() {


	/*--- Display information modal box ---*/
  	$('.h-what').click(function(){
    	$('.overlay').fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$('a.close').click(function(){
  		$('.overlay').fadeOut(1000);
  	});

	secretNumber();
	$('#guessButton').on('click', game );
	$('.new').on('click', newGame)

//Generate a secret number
function secretNumber(){
	secretNumber = Math.floor(Math.random()*100)+1;
}

function game(e){
	e.preventDefault();
	var userGuess = $('#userGuess').val();
	$('#userGuess').val('');

	//check to see if userGuess is between 0 and 100
	if (userGuess < 0 || userGuess > 101) {
		alert('Please enter a number between 0 and 100.');
	}


	//check to see if the userGuess is a whole number
	if (userGuess % 1 != 0) {
		alert('Please enter a real number.');
	}

	var determine = Math.abs(secretNumber - userGuess);

	//Determine how far away the guess is from the secretNumber
	if  (determine == 0){
		$('#feedback').html("Winner winner, chicken dinner!");
	} else if (determine <=5 ) {
		$('#feedback').html("HOT HOT HOT!");
	} else if (determine <=10) {
		$('#feedback').html("Very warm");
	} else if (determine <=20) {
		$('#feedback').html("Warm");
	} else {
		(determine > 20);
		$('#feedback').html("Ice cold");
	}

	//increase the count of "Guess" by one for each wrong answer
	if (determine != 0) {
		var guessCount = $('#count').html();
		guessCount++;
		console.log("Count is at " + guessCount + "!");
		$('#count').html(guessCount);
		$('<li></li>').appendTo("#guessList").html("<li>" +userGuess+ "</li>");
	}
}

//resets html for new game
function newGame (e){
	e.preventDefault();
	$('#feedback').html("Make your Guess!");
	$('#userGuess').val('');
	$('#count').html(0);
	$('#guessList').html('');
	secretNumber = Math.floor(Math.random()*100)+1;
}

});
