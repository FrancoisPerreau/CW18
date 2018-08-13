// JavaScript Document

var computerNumber = getRandomIntInclusive (),
	userNumber = document.getElementById('userNumber'),
	resultat = document.getElementById('resultat'),
	check =document.getElementById('check');




//Masquer le boutton reset

var reset = document.getElementById('reset');
reset.style.display = 'none';




//générer un nombre compris entre un et cent

function getRandomIntInclusive () {
 var min = Math.ceil(1),
	 max = Math.floor(100);
	return Math.floor(Math.random() * (max - min +1)) + min;
}



//Vérification de userNumber si OK appelle compareNumber

function checkUserNumber() {
	if (userNumber.value < 1 || userNumber.value >100) {
		resultat.innerHTML = 'Ce doit être un nombre compris entre 1 et 100';
	} else{
		compareNumber();
	}
}






//comparer UserNumber avec computerNumber

function compareNumber (){
	if (userNumber.value < computerNumber){
		resultat.innerHTML = 'Trop petit !';
	}
	
	
	if (userNumber.value > computerNumber){
		resultat.innerHTML = 'Trop grand !';
	}
	
	
	if (userNumber.value == computerNumber){
		resultat.innerHTML = 'BRAVO !!!';
		reset.style.display = 'inline-block'
	}
}


//Réinitialiser le jeu

function resetJeu () {
	reset.style.display = 'none';
	computerNumber = getRandomIntInclusive ();
	userNumber.value = '';
	resultat.innerHTML = '';	
}
	  


check.onclick = checkUserNumber;
reset.onclick = resetJeu;





