/*
Array.prototype.findLast()
Description: Cette méthode renvoie le dernier élément d'un 
tableau qui satisfait une fonction de test fournie. 
Si aucun élément ne passe le test, elle renvoie undefined.

Exercice: Écrivez une fonction qui utilise findLast() 
pour trouver le dernier nombre impair dans un tableau donné.

*/

const numbers = [2, 4, 6, 8, 7, 10, 11];
const lastOdd = numbers.findLast(num => num % 2 !== 0);
console.log(lastOdd); // Devrait afficher ?

/*
Array.prototype.findLastIndex()
Description: Cette méthode renvoie l'index du dernier élément 
d'un tableau qui satisfait une fonction de test fournie. 
Si aucun élément ne passe le test, elle renvoie -1.

Exercice: Écrivez une fonction qui utilise findLastIndex()
 pour trouver l'index du dernier nombre impair dans un 
 tableau donné.
*/

const numbers1 = [2, 4, 6, 8, 7, 10, 11];
const lastOddIndex = numbers1.findLastIndex(num => num % 2 !== 0);
console.log(lastOddIndex); // Devrait afficher ?


/*
Array.prototype.toReversed()
Description: Cette méthode renvoie un nouveau tableau 
contenant les éléments du tableau d'origine dans l'ordre inverse.


Exercice: Écrivez une fonction qui utilise toReversed() pour 
inverser un tableau de chaînes de caractères.

*/

const fruits = ["apple", "banana", "cherry"];
const reversedFruits = fruits.toReversed();
console.log(reversedFruits); // Devrait afficher  ?


/*
Array.prototype.toSorted()
Description: Cette méthode renvoie un nouveau tableau contenant
 les éléments 
triés selon l'ordre spécifié.

Exercice: Écrivez une fonction qui utilise toSorted() pour 
trier un tableau de nombres.
*/

const numbers2 = [5, 2, 9, 1, 5, 6];
const sortedNumbers = numbers2.toSorted((a, b) => a - b);
console.log(sortedNumbers); // Devrait afficher [1, 2, 5, 5, 6, 9]


/*
Array.prototype.toSpliced()
Description: Cette méthode renvoie un nouveau tableau après avoir 
ajouté ou retiré des éléments de l'original.

Exercice: Écrivez une fonction qui utilise toSpliced() 
pour supprimer le deuxième élément d'un tableau.
*/

const numbers4 = [1, 2, 3, 4, 5];
const newNumbers = numbers4.toSpliced(1, 1); // Supprime l'élément à l'index 1
console.log(newNumbers); // Devrait afficher ?



/*
Array.prototype.with()
Description: Cette méthode renvoie un nouveau tableau avec un élément remplacé 
par un nouvel élément à l'index spécifié.

Exercice: Écrivez une fonction qui utilise with() pour remplacer 
le troisième élément d'un tableau de nombres par un nouveau nombre.
*/

const numbers5 = [1, 2, 3, 4, 5];
const updatedNumbers = numbers5.with(2, 10); // Remplace l'élément à l'index 2 par 10
console.log(updatedNumbers); // Devrait afficher [1, 2, 10, 4, 5]


/**
#! (Shebang)
Description: Le shebang est une ligne qui se trouve au début
d'un script et qui indique quel interpréteur
doit être utilisé pour exécuter le script.
C'est souvent utilisé dans les scripts shell.

Exercice: Écrivez un script simple en Node.js
et incluez une ligne shebang pour qu'il puisse être exécuté directement
à partir de la ligne de commande.
 */

// #!/usr/bin/env node
// console.log("Hello, world!");