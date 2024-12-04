/*
1. Fonction déclarée (Function Declaration)
Exercice :
Créez une fonction déclarée trouverPlusGrand 
qui prend trois nombres en entrée et retourne le plus grand.

*/



// Test
console.log(trouverPlusGrand(3, 7, 5)); // 7
console.log(trouverPlusGrand(10, 8, 12)); // 12

/*
2. Fonction exprimée (Function Expression)
Exercice :
Créez une fonction exprimée calculerMoyenne 
qui prend un tableau de nombres et retourne la moyenne.

use : array.reduce(callback, initialValue)
*/


// Test
console.log(calculerMoyenne([10, 20, 30])); // 20
console.log(calculerMoyenne([5, 15, 25, 35])); // 20



/* 
3. Fonction fléchée (Arrow Function)
Exercice :
Créez une fonction fléchée estPair qui prend un nombre 
en entrée et retourne true si le nombre est pair, sinon false.

*/



// Test
console.log(estPair(4)); // true
console.log(estPair(7)); // false

/* 
4. Fonction anonyme
Exercice :
Utilisez une fonction anonyme dans un tableau pour calculer la somme des nombres pairs uniquement.
use : array.reduce(callback, initialValue)
*/




/* 
5. Fonction constructeur (Constructor Function)
Exercice :
Créez une fonction constructeur Rectangle qui initialise la largeur et la hauteur. 
Ajoutez une méthode calculerSurface pour retourner la surface du rectangle.

*/



// Test
const rect = new Rectangle(5, 10);
console.log(rect.calculerSurface()); // 50


/* 
6. Fonction asynchrone (Async Function)
Exercice :
Créez une fonction asynchrone fetchDonnees 
qui simule l'appel d'une API et affiche un résultat après 2 secondes.

*/



// Test
afficherResultat(); // Affiche "Données reçues !" après 2 secondes


/*
7. Fonction immédiatement invoquée (IIFE)
Exercice :
Créez une IIFE qui calcule et affiche la somme de deux nombres donnés.

*/



