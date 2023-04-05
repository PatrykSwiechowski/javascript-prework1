/*function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

let computerMove = `kamień`;

printMessage('Zagrałem ' + computerMove + '! Jeśli Twój ruch to papier, to wygrywasz!');

let playerMove = 'papier';

printMessage('Zagrałeś ' + computerMove + ' ! Wygrywasz!');

let randomFraction = Math.random();

printMessage('Wylosowany ułamek to: ' + randomFraction);

let calculation = randomFraction * 9 + 1;

printMessage('Ułamek pomnożony przez 9 i powiększony o 1: ' + calculation);

let roundNumber = Math.floor(calculation);

printMessage('Liczba po zaokrągleniu w dół to: ' + roundNumber);*/


//Dokańczanie logiki gry papier, kamień, nożyce

function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}


let randomNumber = Math.floor(Math.random() * 3 + 1);

console.log('Wylosowana liczba to: ' + randomNumber);

let computerMove = 'nieznany ruch';

if(randomNumber == 1){
	computerMove = 'kamień';
}	if(randomNumber == 2){
	computerMove = 'papier';
}	else if(randomNumber == 3){
	computerMove = 'nożyce';
}




printMessage('Mój ruch to: ' + computerMove);


let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
} else if(playerInput == '2'){
	playerMove = 'papier';
} else if(playerInput == '3'){
	playerMove = 'nożyce';
}




printMessage('Twój ruch to: ' + playerMove);