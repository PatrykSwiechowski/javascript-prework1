/* Losowanie liczb

let randomFraction = Math.random();

printMessage('Wylosowany ułamek to: ' + randomFraction);

let calculation = randomFraction * 9 + 1;

printMessage('Ułamek pomnożony przez 9 i powiększony o 1: ' + calculation);

let roundNumber = Math.floor(calculation);

printMessage('Liczba po zaokrągleniu w dół to: ' + roundNumber);*/
//-------------------------------------------------------------------------------------------------------------------------------------------------------------//


//Wywołanie funkcji print

function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}
//--------------------------------------------------------------------------------------------------------------


//Dokańczanie logiki gry papier, kamień, nożyce





//Ruch komputera

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





//Ruch gracza

let playerInput = prompt('Wybierz swój ruch! 1: kamień, 2: papier, 3: nożyce.');

console.log('Gracz wpisał: ' + playerInput);

let playerMove = 'nieznany ruch';

if(playerInput == '1'){
  playerMove = 'kamień';
} else if(playerInput == '2'){
	playerMove = 'papier';
} else if(playerInput == '3'){
	playerMove = 'nożyce';
}else if(playerInput == '<1' && '>3'){
	playerMove = 'Nieznany ruch';
}





printMessage('Twój ruch to: ' + playerMove);


 


//Odczytanie wyniku

if(computerMove == 'nożyce' && playerMove == 'kamień'){
	printMessage('Wygrywasz!');
}else if(computerMove == 'kamień' && playerMove == 'papier'){
	printMessage('Wygrywasz!');
}else if(computerMove == 'papier' && playerMove == 'nożyce'){
	printMessage('Wygrywasz!');
}
 if(computerMove == 'nożyce' && playerMove == 'nożyce'){
	printMessage('Remis!');
}else if(computerMove == 'kamień' && playerMove == 'kamień'){
	printMessage('Remis!');
}else if(computerMove == 'papier' && playerMove == 'papier'){
	printMessage('Remis!');
}
if(computerMove == 'kamień' && playerMove == 'nożyce'){
	printMessage('Przegrywasz!');
}else if(computerMove == 'papier' && playerMove == 'kamień'){
	printMessage('Przegrywasz!');
}else if(computerMove == 'nożyce' && playerMove == 'papier'){
	printMessage('Przegrywasz!');
}





/*if((playerMove == 'nożyce' && computerMove == 'kamień') && (playerMove == 'kamień' && computerMove == 'papier') && (playerMove == 'papier' && computerMove == 'nożyce')){
	printMessage('Przegrywasz!');
}else if((playerMove =='nożyce' && computerMove == 'nożyce') && (playerMove == 'kamień' && computerMove == 'kamień') && (playerMove == 'papier' && computerMove == 'papier')){
	printMessage('Remis!');
}

/*if(playerMove == 'kamień' && computerMove == 'nożyce'){
	printMessage('Ty Wygrywasz!')
}if(playerMove == 'papier' && computerMove == 'kamień'){
	printMessage('Ty Wygrywasz!')
}if(playerMove == 'nożyce' && computerMove == 'papier'){
	printMessage('Ty Wygrywasz!')
}*/