// JavaScript Document


/* Notions importantes utilsées 

function myFunction(event) { 
    alert(event.target.nodeName);
}


classList
classList.contains
classList.remove
classList.add

*/




var nbClick = 0; // je compte le nombre de click pour savoir si c'est je joueur 1 ou 2 qui va jouer 
var jeu = document.getElementById('jeu');

//recupère toutes les div enfants de la div jeu dans un tableau
var arrayJeu = jeu.querySelectorAll('div');
var arrayJeuLength = arrayJeu.length; // .length pour avoir le nombre de variable stockée dans mon tableau
	

var victoireBox=document.getElementById('victoire');
victoireBox.style.display='none'; // Je masque la div victoire au chargement de la page

var scoreP1=0,
	scoreP2=0;
var afficheScore = document.getElementById('score');






// Si le nombre de click est pair return false (joueur 1)
// Si le nombre de click est impair return true (joueur 2)
function quelJoueur (){	
	if (nbClick % 2 == 0){
		return true;
	}else{
		return false;
	}
}




// ************ Gestion Affichage ************

// Au click changement de classe CSS
jeu.addEventListener('click', function(element){
	
	nbClick++; // Compte le nb de click (pour la fonction quelJoueur)

	quelJoueur(); //Lance la fonction quelJoueur après avoir commencé à compter les clicks
	
	// au click récupère l'id de l'élément cliqué
	var targetId = element.target.id;
	
	// et récupère la div correspondant à cette id
	var targetDiv = document.getElementById(targetId);
	
	
	// Changement de classe CSS
	function changeCSS (){
		/* Si le nombre de click est impair et que la div cliquée à toujour la Class CSS "nonJoue"
			alors supprime la class "nonJoue" et ajoute la class CSS "joueur1" */
		if(quelJoueur()==false && targetDiv.classList.contains("nonJoue")){
			targetDiv.classList.remove("nonJoue");
			targetDiv.classList.add("joueur1");

			
		/* Si le nombre de click est pair et que la div cliquée à toujour la Class CSS "nonJoue"
			alors supprime la class "nonJoue" et ajoute la class CSS "joueur2" */	
		} else if(quelJoueur()==true && targetDiv.classList.contains("nonJoue")){
			targetDiv.classList.remove("nonJoue");
			targetDiv.classList.add("joueur2");
			
		
		/* Si aucune des deux conditions n'est valide c'est que le click est sur div déjà jouée
		alors retire un click au compteur pour ne pas décaller le tour des joueurs */	
		}else{
			nbClick--; 
			}
	}

	changeCSS();// Au click lance la fonction changeCSS
});





// ************ Gestion du jeu ************

jeu.addEventListener('click', function(){
	
	checkCss(); // Au click lance checkCss
});


// check le tableau pour tester si vinqueur
function checkCss (){
		/* Je teste les différent cas de victoire en verifiant la Class css des div "stockées dans mon tableau arrayJeu" */
					
		//test Joueur 1 Ligne 1
		if(arrayJeu[0].classList.contains("joueur1") && arrayJeu[1].classList.contains("joueur1") && arrayJeu[2].classList.contains("joueur1")){
		victoireJoueur1(); // lance la fonction d'affichage Victoir joueur 1
	
		}

		//test Joueur 1 Ligne 2
		if(arrayJeu[3].classList.contains("joueur1") && arrayJeu[4].classList.contains("joueur1") && arrayJeu[5].classList.contains("joueur1")){
			victoireJoueur1();
		}


		//test Joueur 1 Ligne 3
		if(arrayJeu[6].classList.contains("joueur1") && arrayJeu[7].classList.contains("joueur1") && arrayJeu[8].classList.contains("joueur1")){
			victoireJoueur1();
		}

		//test Joueur 1 colonne 1
		if(arrayJeu[0].classList.contains("joueur1") && arrayJeu[3].classList.contains("joueur1") && arrayJeu[6].classList.contains("joueur1")){
			victoireJoueur1();
		}

		//test Joueur 1 colonne 2
		if(arrayJeu[1].classList.contains("joueur1") && arrayJeu[4].classList.contains("joueur1") && arrayJeu[7].classList.contains("joueur1")){
			victoireJoueur1();
		}

		//test Joueur 1 colonne 3
		if(arrayJeu[2].classList.contains("joueur1") && arrayJeu[5].classList.contains("joueur1") && arrayJeu[8].classList.contains("joueur1")){
			victoireJoueur1();
		}

		//test Joueur 1 diagonale 1
		if(arrayJeu[0].classList.contains("joueur1") && arrayJeu[4].classList.contains("joueur1") && arrayJeu[8].classList.contains("joueur1")){
			victoireJoueur1();
		}

		//test Joueur 1 diagonale 2
		if(arrayJeu[2].classList.contains("joueur1") && arrayJeu[4].classList.contains("joueur1") && arrayJeu[6].classList.contains("joueur1")){
			victoireJoueur1();
		}

		//**********************************		

		//test Joueur 2 Ligne 1
		if(arrayJeu[0].classList.contains("joueur2") && arrayJeu[1].classList.contains("joueur2") && arrayJeu[2].classList.contains("joueur2")){
			victoireJoueur2();// lance la fonction d'affichage Victoir joueur 1	}
		}

		//test Joueur 2 Ligne 2
		if(arrayJeu[3].classList.contains("joueur2") && arrayJeu[4].classList.contains("joueur2") && arrayJeu[5].classList.contains("joueur2")){
			victoireJoueur2();
		}


		//test Joueur 2 Ligne 3
		if(arrayJeu[6].classList.contains("joueur2") && arrayJeu[7].classList.contains("joueur2") && arrayJeu[8].classList.contains("joueur2")){
			victoireJoueur2();
		}

		//test Joueur 2 colonne 1
		if(arrayJeu[0].classList.contains("joueur2") && arrayJeu[3].classList.contains("joueur2") && arrayJeu[6].classList.contains("joueur2")){
			victoireJoueur2();
		}

		//test Joueur 2 colonne 2
		if(arrayJeu[1].classList.contains("joueur2") && arrayJeu[4].classList.contains("joueur2") && arrayJeu[7].classList.contains("joueur2")){
			victoireJoueur2();
		}

		//test Joueur 2 colonne 3
		if(arrayJeu[2].classList.contains("joueur2") && arrayJeu[5].classList.contains("joueur2") && arrayJeu[8].classList.contains("joueur2")){
			victoireJoueur2();
		}

		//test Joueur 2 diagonale 1
		if(arrayJeu[0].classList.contains("joueur2") && arrayJeu[4].classList.contains("joueur2") && arrayJeu[8].classList.contains("joueur2")){
			victoireJoueur2();
		}

		//test Joueur 2 diagonale 2
		if(arrayJeu[2].classList.contains("joueur2") && arrayJeu[4].classList.contains("joueur2") && arrayJeu[6].classList.contains("joueur2")){
			victoireJoueur2();
		}
}	


	
//Verifie que toutes les cases ne sont pas jouées (match nul)
jeu.addEventListener('mouseup', function (){
	var arrayJeu = jeu.querySelectorAll('div');
	var arrayJeuLength = arrayJeu.length;
	
	var comptNonJoue='';
	
	
	for(var i=0; i<arrayJeuLength; i++){
		if (arrayJeu[i].classList.contains("nonJoue")){
			comptNonJoue++;
		}
	}
	
	
	if(comptNonJoue==0){
	matchNul (); // lance la fonction d'affichage du match nul
	}
});




// Le joueur 1 à gagné
function victoireJoueur1 (){
	victoireBox.innerHTML='<p>Le joueur 1<br />vient de gagner !!!</p>';
	victoireBox.style.display='flex';
	scoreP1++;
}


// Le joueur 2 à gagné
function victoireJoueur2 (){
	victoireBox.innerHTML='<p>Le joueur 2<br />vient de gagner !!!</p>';
	victoireBox.style.display='flex';
	scoreP2++;
}

// Match nul
function matchNul (){
	victoireBox.innerHTML='<p>Match nul</p>';
	victoireBox.style.display='flex';
}



//Masque le bloque Victoire et relance je jeux
victoireBox.addEventListener('click', function(){
	nbClick = 1;
	
	victoireBox.style.display='none';

	//recupère toutes les div enfants de la div jeu
	var arrayJeu2 = jeu.querySelectorAll('div');
	var arrayJeuLength2 = arrayJeu2.length;
	
	
	// remplace toutes les class css (joueur1 et joueur2) par nonJoue
	for (var i=0;i < arrayJeuLength2; i++){	
		
		if(arrayJeu2[i].classList.contains("joueur1")){
		arrayJeu2[i].classList.remove("joueur1");
		arrayJeu2[i].classList.add("nonJoue");			
		}
		
		if(arrayJeu2[i].classList.contains("joueur2")){
		arrayJeu2[i].classList.remove("joueur2");
		arrayJeu2[i].classList.add("nonJoue");			
		}		
	}
	
	afficheScore.innerHTML='<p>Bleu : '+scoreP1+'  ||  Rouge : '+scoreP2+'</p>';

});
