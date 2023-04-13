function printMessage(msg) {
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}


function getMoveName(argMoveId) {
	if (argMoveId == 1) {
		return 'kamień';
	} else if (argMoveId == 2) {

		return 'papier';
	} else if (argMoveId == 3) {
		return "nożyce";
	}

	printMessage('Nie znam ruchu o id ' + argMoveId + '.');
	return 'nieznany ruch';
}


function displayResult(argComputerMove, argPlayerMove) {
	console.log('display displayResult')
	if (
		(argComputerMove == 'nożyce' && argPlayerMove == 'kamień') ||
		(argComputerMove == 'kamień' && argPlayerMove == 'papier') ||
		(argComputerMove == 'papier' && argPlayerMove == 'nożyce')
	){ return 'Wygrywasz!';
	} else if (argComputerMove == argPlayerMove) {
		return 'Remis!';
	} else {
		return'Przegrywasz!';
	}


}

