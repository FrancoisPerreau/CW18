#----------------------
# jeu du plus ou moins
#----------------------

# Variables globales
$computer_number
$user_number
$nombre_tour = 0



#Génére un nombre aléatoir entre 1 et 100 et stocke le dans $computer_number
def computer
  $computer_number = rand(1..100)
end


#Demande un nombre à l'utilisateur et stocke le dans $user_number
#Et on lance la comparaison
def user
  puts 'Choisissez un nombre entre 1 et 100'
  $user_number = gets.to_i #Convertit le String en Number
  $nombre_tour +=1 #Compte le nombre de tours (+1 à chaque saisie utilisateur)
  compare
end


#Affichage du nombre de tours pour trouver le bon numéro
def combien_de_tour
  if $nombre_tour == 1
    puts "C'est louche, vous avez trouvé en #{$nombre_tour} tour"
  
  else
  puts "Vous avez trouvez en #{$nombre_tour} tours"
  end

end


#Comparaisons------------------------------------------------
def compare
  if $user_number < $computer_number
    puts 'Votre nombre est trop petit, réessayez'
    user #On relance le choix user
  end
  #----------------------------------------
  if $user_number > $computer_number
    puts 'Votre nombre est trop grand, réessayez'
    user #On relance le choix user
  end
  #----------------------------------------
  if $user_number==$computer_number
    puts 'BRAVO !!!'
    puts 'On recommence ?'

    combien_de_tour #On lance l'affichage du nombre de tours en cas de victoire
    $nombre_tour = 0 #On réinitialise le nombre de tours à 0
    computer #On réinitialise le jeu avec un choix aléatoir
    user #On relance le choix user
  end
end

computer #On lance le premier choix aléatoir
user #On lance le premier choix user
