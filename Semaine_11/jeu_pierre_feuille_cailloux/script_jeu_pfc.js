// JavaScript Document

var user = document.getElementById('choixUser'),
	valider = document.getElementById('go'),
	computerArray =['pierre','feuille','ciseaux'];

var	userChoix = '',
	computerChoix = '',
	random = '';

var afficheUser = document.getElementById('userPicto'),
	afficheComputer = document.getElementById('computerPicto');

var victoire = document.getElementById ('victoire'),
	score = 0,
	pourCent = document.getElementById('pourCent'),
	compteurPartie = 0;

var commentaire = document.getElementById('alert');





// Fonction pour générer un nombre aléatoir entre 0 et 2 compris
function indiceComputer() {
    var min = Math.ceil(0);
    var max = Math.floor(2);
    var random = Math.floor(Math.random() * (max - min +1)) + min;
	computerChoix = computerArray[random];

}


//Fonction affichage Picto User
function checkChoix (){
	// On reccupère le contenu de l'élément <option> ciblé par la propriété selectedIndex
     userChoix = user.options[user.selectedIndex].value;
	
	
	// affichage Pictos Utilisateur
	if (userChoix === 'pierre') {
		afficheUser.style.backgroundImage = "url(images/Picto_cailloux.png)";		
	}
	
	if (userChoix === 'feuille') {
		afficheUser.style.backgroundImage = "url(images/Picto_feuille.png)";
	}
	
	if (userChoix === 'ciseaux') {
		afficheUser.style.backgroundImage = "url(images/Picto_ciseaux.png)";
	}
	
	
	//mise à zéor affichage computer et commentaire
	commentaire.innerHTML = '';
	afficheComputer.style.backgroundImage = "url(images/Picto_Vide.png)";
}


/*//Fonction affichage Picto computer
	function afficheComputer (){
		// on réccupère le choix de Computer dans le tableau computerArray
		//	computerChoix2 = computerArray[0];

		// affichage Pictos Utilisateur
		if (computerChoix === 'pierre') {
			afficheComputer.style.backgroundImage = "url(images/Picto_cailloux.png)";
		}

		if (computerChoix === 'feuille') {
			afficheComputer.style.backgroundImage = "url(images/Picto_feuille.png)";
		}

		if (computerChoix === 'ciseaux') {
			afficheComputer.style.backgroundImage = "url(images/Picto_ciseaux.png)";
		}	
	}*/






//Fonction de comparaison entre User et Computer
function compare () {
	switch(computerChoix) {
		case 'pierre':
			if (userChoix === 'pierre') {
				commentaire.innerHTML = 'Match nul...';
				
			}
			
			if (userChoix==='feuille') {
				commentaire.innerHTML = 'Bravo !!!';
				score ++;
			}
			
			if (userChoix==='ciseaux') {
				commentaire.innerHTML = 'Perdu';				
			}
			
			afficheComputer.style.backgroundImage = "url(images/Picto_cailloux.png)";
		break;
			
			
		case 'feuille':
			if (userChoix === 'pierre') {
				commentaire.innerHTML = 'Perdu';
			}
			
			if (userChoix==='feuille') {
				commentaire.innerHTML = 'Match nul...';
			}
			
			if (userChoix==='ciseaux') {
				commentaire.innerHTML = 'Bravo !!!';
				score ++;
			}
			afficheComputer.style.backgroundImage = "url(images/Picto_feuille.png)";
		break;
			
			
			case 'ciseaux':
			if (userChoix === 'pierre') {
				commentaire.innerHTML = 'Bravo !!!';
				score ++;

			}
			
			if (userChoix==='feuille') {
				commentaire.innerHTML = 'Perdu';
			}
			
			if (userChoix==='ciseaux') {
				commentaire.innerHTML = 'Match nul...';
			}
			afficheComputer.style.backgroundImage = "url(images/Picto_ciseaux.png)";
		break;		
	}
}



function afficheScore (){
	victoire.innerHTML= score;
	pourCent.innerHTML= Math.round((score*100)/compteurPartie);
	
}


user.addEventListener('change', checkChoix);



	

//actions déclanchées par GO
valider.addEventListener('click', function(){
	
	indiceComputer();
	
	compteurPartie++;
	compare ();
	
	afficheScore ();


});




