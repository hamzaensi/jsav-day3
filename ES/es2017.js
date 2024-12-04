// Exercice 1
/*
(String Padding)

String Padding permet d'ajouter des caractères
au début ou à la fin d'une chaîne pour atteindre 
une certaine longueur. La méthode padStart() ajoute du 
remplissage au début, tandis que padEnd() ajoute du 
remplissage à la fin de la chaîne.
Exemple : 
*/
let str = '5';
console.log(str.padStart(2, '0')); // '05'
console.log(str.padEnd(2, '0'));   // '50'

/*
Créez une fonction qui prend un nombre et le retourne sous forme de chaîne,
complétée avec des zéros pour garantir qu'elle a au moins 4 caractères.
Par exemple, padZero(42) devrait retourner '0042'.
*/



// Exercice 2
/*
La méthode Object.entries() renvoie un tableau des paires de propriétés [clé, valeur]
de l'objet, qui sont énumérables et propre à l'objet donné.
*/

// Exemple

const obj = { a: 1, b: 2 };
const entries = Object.entries(obj);
console.log(entries); // [['a', 1], ['b', 2]]
/*
Écrivez une fonction qui prend un objet et retourne un tableau de ses entrées.
Par exemple, getEntries({ x: 10, y: { x: 10, y: 20 } })
devrait retourner [["x", 10], ["y", [["x", 10], ["y", 20]]].
*/

// Exercice 3

/**
La méthode Object.values() renvoie un tableau des valeurs
des propriétés énumérables de l'objet donné.
 */

/*
Exemple
const obj = { x: 10, y: 20 };
const values = Object.values(obj);
console.log(values); // [10, 20]
*/
/*
Créez une fonction qui prend un objet et retourne un tableau de
ses valeurs si la valeur > 15.
Par exemple, getValues({ nb1: 15, nb2: 25 }) devrait retourner [25].
*/



// Exercice 4
/*
async et await sont utilisés pour gérer des opérations asynchrones en JavaScript.
Une fonction async retourne une promesse, et await est utilisé pour
 attendre que cette promesse soit résolue.
*/
/*
Exemple
async function fetchData() {
    return "Données récupérées";
}

fetchData().then(data => console.log(data)); // 'Données récupérées'

*/

/*
Écrivez une fonction async qui simule la récupération de données
(en utilisant setTimeout) et retourne un message.
Utilisez await pour attendre les données avant de les afficher.

*/



// Exercice 5
/**
Dans ES8, JavaScript permet d'utiliser des virgules finales dans les paramètres
et les appels de fonction.
Cela signifie que vous pouvez avoir une virgule après le dernier paramètre.

Exemple
function example(a, b,) {
    return a + b;
}

console.log(example(1, 2,)); // 3
*/

