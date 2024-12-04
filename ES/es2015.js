/*** ES6 = ES2015 */

// Exercice 1

/*  let ****

Le mot-clé let permet de déclarer des variables ayant
une portée de bloc, ce qui signifie qu'elles ne sont
accessibles que dans le bloc où elles sont définies.

*/

let x = 10;
if (true) {
    let x = 20;
    console.log(x); // Affiche : ?
}
console.log(x); // Affiche : ?



// Exercice 2

/** const ***
Le mot-clé const déclare des variables ayant une portée
de bloc qui ne peuvent pas être réassignées.
*/


const y = 30;
y = 40;
console.log(y); // Affiche : ?





// Exercice 3

/**
Les fonctions fléchées fournissent une syntaxe plus courte
pour écrire des expressions de fonction et n'ont pas leur
propre this.
*/


const add = (a, b) => a + b;
console.log(add(2, 3)); // Affiche : ?





// Exercice 4
/***
L'opérateur {a,b} = (Affectation par décomposition)
Cette syntaxe permet de décomposer des valeurs d'objets
en variables distinctes.
*/


const obj = { a: 1, b: 2 };
const { a, b } = obj;
console.log(a, b); // Affiche : ?



// Exercice 5
/**
L'opérateur [a,b] = (Décomposition de tableaux)
Similaire à la décomposition d'objets,
mais utilisée pour les tableaux.
 */


const arr7 = [1, 2];
const [first, second] = arr7;
console.log(first, second); // Affiche : ?




// Exercice 6
/**
L'opérateur ... (Opérateur de propagation)
L'opérateur de propagation permet d'étendre
un itérable (comme un tableau) là où zéro ou plusieurs
arguments sont attendus.
 */

const arr10 = [1, 2];
const arr22 = [3, 4];
const combined = [...arr10, ...arr20];
console.log(combined); // Affiche : ?





// Exercice 7
/**
Boucle For/Of
La boucle for...of itère sur des objets itérables,
comme des tableaux ou des chaînes de caractères.
*/

const iterable = [10, 20, 30];
for (const value of iterable) {
    console.log(value); // Affiche : ?
}




// Exercice 8
/**
Objets Map
Un Map est une collection d'éléments de données avec des clés,
similaire à un objet.
*/

const map = new Map();
map.set('a', 1);
map.set('b', 2);
console.log(map.get('a')); // Affiche : ?
console.log(map.get('b')); // Affiche : ?




// Exercice 9

/**
Objets Set
Un Set est une collection de valeurs où chaque valeur
doit être unique.
*/

const set = new Set();
set.add(1);
set.add(2);
set.add(1); // Ne sera pas ajouté
console.log(set); // Affiche : ?





// Exercice 10
/*
Classes
Les classes en JavaScript permettent de créer 
des objets et de définir des méthodes.
*/
class Person {
    constructor(name) {
        this.name = name;
    }
    greet() {
        console.log(`Bonjour, je m'appelle ${this.name}`);
    }
}

const alice = new Person('Alice');
alice.greet(); // Affiche : ?



// Exercice 11

/**
Promesses
Les promesses sont des objets représentant la réussite 
ou l'échec d'une opération asynchrone.

*/
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Opération réussie'), 1000);
});

myPromise.then(result => console.log(result));
// Affiche après 1 seconde : ?

// Exercice 12
/**
Paramètres par défaut
Les paramètres par défaut permettent de définir des valeurs
 par défaut pour les paramètres de fonction.
*/

function multiply(a, b = 1) {
    return a * b;
}
console.log(multiply(5)); // Affiche : ?

// Exercice 13

/**
Paramètre de reste (Rest Parameter)
Le paramètre de reste permet de regrouper un nombre indéfini
d'arguments en un tableau.
 */

function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
console.log(sum(1, 2, 3)); // Affiche : ?


// Exercice 14

/*
String.includes()
La méthode includes() vérifie si une chaîne de caractères contient une sous-chaîne.

*/

const str = "Bonjour le monde";
console.log(str.includes("monde")); // Affiche : ?



// Exercice 15
/**
String.startsWith()
La méthode startsWith() vérifie si une chaîne commence par une sous-chaîne donnée. 
*/
const str1 = "Bonjour";
console.log(str1.startsWith("Bon")); // Affiche : ?


// Exercice 16
/**
String.endsWith()
La méthode endsWith() vérifie si une chaîne se termine par une sous-chaîne donnée.
*/
const str3 = "Bonjour";
console.log(str3.endsWith("Jour")); // Affiche : ?





// Exercice 17
/**
Array.entries()
La méthode entries() renvoie un nouvel objet Array Iterator contenant 
les paires clé/valeur de chaque index du tableau.
 */
const arr = ['a', 'b', 'c'];
const iterator = arr.entries();
for (const [index, value] of iterator) {
    console.log(index, value); // Affiche : ?
}



// Exercice 18
/**
Array.from()
La méthode Array.from() crée un tableau à partir d'un objet semblable
à un tableau ou d'un itérable.
*/
const str4 = "Bonjour";
const arr1 = Array.from(str4);
console.log(arr1); // Affiche : ?


// Exercice 19
/*
Array.keys()
La méthode keys() renvoie un nouvel objet Array Iterator contenant
les clés (indices) du tableau.
*/


const arr2 = ['a', 'b', 'c'];
const iterator1 = arr2.keys();
for (const key of iterator1) {
    console.log(key); // Affiche : ?
}




// Exercice 20

/**
Array.find()
La méthode find() renvoie la première valeur d'un tableau qui satisfait
 une fonction de test fournie. 
 */
const arr5 = [5, 12, 8, 130, 44];
const found = arr5.find(element => element > 10);
console.log(found); // Affiche : 12