 text = "Un homme nourrissait une chèvre et un âne. Or la chèvre devint envieuse de l’âne, parce qu’il était trop bien nourri. Et elle lui dit : \« Entre la meule à tourner et les fardeaux à porter, ta vie est un tourment sans fin, \» et elle lui conseillait de simuler l’épilepsie, et de se laisser tomber dans un trou pour avoir du repos. Il suivit le conseil, se laissa tomber et se froissa tout le corps. Son maître ayant fait venir le vétérinaire, lui demanda un remède pour le blessé. Le vétérinaire lui prescrivit d’infuser le poumon d’une chèvre ; ce remède lui rendrait la santé. En conséquence on immola la chèvre pour guérir l’âne. Quiconque machine des fourberies contre autrui devient le premier artisan de son malheur."

=begin
* Créer un hash pour stocker les mots
* Obtenir un tableau des mots split()
* Itérer sur le tableau précédent
  - Remplire le hash
* Afficher les informations

** Organiser les mots pour sortir les mots les plus fréquent
=end


#-création du hash
frequence = {}

#-Sur un seule ligne : mots = text.tr('.,"«»:;\'', '').downcase.split(' ')
text = text.tr('.,"«»:;\'', '') #-Remplacement des caractères .,""':; par rien (suppression)
mots = text.downcase #-Conversion de toute la chaîne en minuscule
mots = mots.split(' ') #-Conversion de la chaîne en tableau avec un espace comme séparateur


#-Boucle : Pour Remplir le hash avec des "mots uniques" en clé et leur associer un "compteur" en valeur
mots.each do |mot|

	if frequence[mot] #-Si le mot existe comme clé dans le tableau, ajoute 1 à sa valeur
		frequence[mot] +=1

	 else #-Sinon créé une nouvelle clé "mot" et affecte lui 1 en valeur
		frequence[mot] = 1
	end
end 

#-Boucle et méthode pour réorganiser le hash frequence
#- sort_by prend ici en paramètre le mot et sa valeur et on lui demande de ce servire de compteur pour réorganiser
#-ATTENTION : il retourne de base un tableau, cela fait donc DES tableau dans un tableau
frequence_trie =
frequence.sort_by do |mot, compteur|
	compteur
end
#- Peut de code dans le bloc, don peut aussi s'écrire : frequence_trie = frequence.sort_by { |mot, compteur| compteur}


#-sort_by retourne un "trie" croissant, nous avons donc besoin de "l'inverser"
frequence_trie = frequence_trie.reverse
#-Peut aussi s'écrire : frequence_trie.reverse!  évite le "frequence_trie = "

puts "\n****************************************************************************"
puts "le mot le plus utilisé est \"#{frequence_trie.first[0]}\", il est utilisé #{frequence_trie.first[1]} fois."
puts "============================================================================"


#-Boucle : Pour afficher les mots et le nombre de fois où ils apparaissent
frequence_trie.each do |mot|
puts "le mot \"#{mot[0]}\" est utilisé #{mot[1]} fois" #- .to_s pour être sûr que le l'integer compteur est bien converti en string
end

puts "------------------------------------------"



#puts frequence.inspect


