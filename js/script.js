/* Losowanie liczb

let randomFraction = Math.random();

printMessage('Wylosowany ułamek to: ' + randomFraction);

let calculation = randomFraction * 3 + 1;

printMessage('Ułamek pomnożony przez 3 i powiększony o 1: ' + calculation);

let roundNumber = Math.floor(calculation);

printMessage('Liczba po zaokrągleniu w dół to: ' + roundNumber);*/
//-------------------------------------------------------------------------------------------------------------------------------------------------------------//
/*function getMoveName(argMoveId) {
	if (argMoveId == 1) {
		return 'kamień';
	} else if (argMoveId == 2) {

		return 'papier';
	} else if(argMoveId == 3){
		return "nożyce";
	}
	
	printMessage('Nie znam ruchu o id ' + argMoveId + '.');
	return 'nieznany ruch';
}
*/

{


	const playGame = function (playerInput) {
		//function playGame(playerInput)
		clearMessages()

		const randomNumber = Math.floor(Math.random() * 3 + 1),
			computerMove = getMoveName(randomNumber);

		console.log('Wylosowana liczba to: ' + randomNumber);

		//var computerMove = getMoveName(randomNumber);

		/*if (randomNumber == 1) {
			computerMove = 'kamień';
		} else if (randomNumber == 2) {
			computerMove = 'papier';
		} else if (randomNumber == 3)
			computerMove = 'nożyce';
		*/

		printMessage('Mój ruch to: ' + computerMove);



		//let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

		console.log('Gracz wpisał: ' + playerInput);

		const playerMove = getMoveName(playerInput);

		/*if (playerInput == '1') {
			playerMove = 'kamień';
		} else if (playerInput == '2') {
			playerMove = 'papier';
		} else if (playerInput == '3')
			playerMove = 'nożyce';
		else {
			playerMove = 'nieznany ruch'
		}*/


		printMessage('Twój ruch to: ' + playerMove);

		displayResult(computerMove, playerMove,);
	}
	//playGame(3);
	document.getElementById('play-rock').addEventListener('click', function () {
		playGame(1);
	});
	document.getElementById('play-paper').addEventListener('click', function () {
		playGame(2);
	});
	document.getElementById('play-scissors').addEventListener('click', function () {
		playGame(3);
	});

}

/*if (
	(computerMove == 'nożyce' && playerMove == 'kamień') ||
	(computerMove == 'kamień' && playerMove == 'papier') ||
	(computerMove == 'papier' && playerMove == 'nożyce')
) {
	printMessage('Wygrywasz!')
} else if (computerMove == playerMove) {
	printMessage('Remis!')
} else {
	printMessage('Przegrywasz!')
}*/













