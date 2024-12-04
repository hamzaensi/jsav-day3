// Exercice 1
/*
 String.trimStart()
La méthode trimStart() supprime les espaces blancs au début
 d'une chaîne de caractères.

 */
// Exemple 
const str = '   Bonjour, le monde !   ';
const trimmedStr = str.trimStart(); // 'Bonjour, le monde !   '
console.log(trimmedStr);

/*
Écrivez une fonction qui prend un tableau des chaînes
en argument et retourne les chaînes sans les espaces au début.
*/


// Exercice 2
/*
String.trimEnd()
La méthode trimEnd() supprime les espaces blancs à la fin d'une chaîne de caractères.
*/
const str1 = '   Bonjour, le monde !   ';
const trimmedStr1 = str1.trimEnd(); // '   Bonjour, le monde !'
console.log(trimmedStr1);


// Exercice 3

/*
Object.fromEntries
La méthode Object.fromEntries() transforme une liste de paires clé-valeur en un objet.
*/

const entries = [['nom', 'Alice'], ['âge', 25]];
const obj = Object.fromEntries(entries); // { nom: 'Alice', âge: 25 }
console.log(obj);


// Exercice 4
/***
Array.flat()
La méthode flat() crée un nouveau tableau avec tous les éléments des 
sous-tableaux concaténés en lui, de manière récursive jusqu'à 
la profondeur spécifiée.
 */

//Exemple

const arr = [1, 2, [3, 4, [5, 6]]];
const flattened = arr.flat(2); // [1, 2, 3, 4, 5, 6]
console.log(flattened);


// Exercice 5
/*
La méthode flatMap() mappe chaque élément en utilisant une fonction de mappage, 
puis aplatit le résultat en un nouveau tableau.
*/

const arr2 = [1, 2, 3];
const flattenedMapped = arr2.flatMap(x => [x, x * 2]); // [1, 2, 2, 4, 3, 6]
console.log(flattenedMapped);


// Exercice 6
// La méthode Array.prototype.sort() trie maintenant correctement les nombres.

const numbers = [10, 1, 21];
const sorted = numbers.sort((a, b) => a - b); // [1, 10, 21]
console.log(sorted);



// Exercice 7
/*
La méthode Function.prototype.toString() 
retourne maintenant le code source exact de la fonction.
*/
function add(a, b) {
    return a + b;
}
console.log(add.toString()); // 'function add(a, b) { return a + b; }'