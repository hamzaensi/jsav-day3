
// // 1. Fonction déclarée 


// function nomDeLaFonction(param1, param2) {
//     return param1 + param2;
// }

// //Exemple : 

// console.log(add(2, 3)); // 5 (hoisting)

// function add(a, b) {
//     return a + b;
// }


// //2. Fonction exprimée (Function Expression)

// const nomDeLaVariable2 = function (param1, param2) {
//     return param1 + param2;
// };

// //Exemple : 

// const multiplier = function (a, b) {
//     return a * b;
// };

// console.log(multiplier(4, 5)); // 20



// //3. Fonction fléchée (Arrow Function) ES6


// const nomDeLaVariable = (param1, param2) => param1 + param2;

// // exemple 
// const soustraire = (a, b) => a - b;
// console.log(soustraire(10, 3)); // 7


// //4. Fonction anonyme // callback

// setTimeout(function () {
//     console.log("Je suis une fonction anonyme !");
// }, 1000);


// callback ?



//     //5. Fonction constructeur (Constructor Function)

//     function Personne(nom, age) {
//         this.nom = nom;
//         this.age = age;
//     }

// const personne1 = new Personne("Alice", 25);
// console.log(personne1.nom); // Alice


// //6. Fonction asynchrone (Async Function)


// async function nomDeLaFonction() {
//     const resultat = await unePromesse();
//     console.log(resultat);
// }

// // Exemple

// async function fetchData() {
//     const response = await fetch("https://api.example.com/data");
//     const data = await response.json();
//     console.log(data);
// }

// fetchData();

// //7. Fonction immédiatement invoquée(IIFE)


// (function () {
//     console.log("IIFE exécutée immédiatement !");
// })();



/**** TODO1
 *
 * */

//  ******* La redéfinition ************

// Redéfinir une méthode d'un objet
// const personne = {
//     name: "Pierre",
//     direBonjour() {
//         return "Bonjour ..."
//     }
// }

// console.log(personne.direBonjour())

// personne.direBonjour = function () {
//     return "Hello"
// }

// console.log(personne.direBonjour())

// // Redéfinir une fonction globale

// let direBonjour = function () {
//     console.log("Bonjour")
// }

// direBonjour()

// direBonjour = function () {
//     console.log("Hello")
// }

// direBonjour();


// // Redéfinir une méthode native , push ,

// const originalConcat = Array.prototype.concat;

// // Redéfinition de la méthode concat
// Array.prototype.concat = function (...args) {
//     console.log(`Concaténation avec : ${args}`);

//     // Appeler la méthode concat originale pour conserver son comportement
//     return originalConcat.apply(this, args);
// };

// const array1 = [1, 2, 3];
// const array2 = [4, 5];
// const result = array1.concat(array2, [6, 7]);
// console.log(result);
// console.log(array1);





// Étendre un prototype


// E. Redéfinir une classe ou son comportement : ES6

// class Animal {

//     eat() {
//         return "Animal is eating"
//     }
// }

// const a = new Animal();

// console.log(a.eat())

// a.eat = function () {

//     return "Animal ate"
// }

// console.log(a.eat())

/**** TODO2
 *
 * */

//******** surcharge ? ***********

// Exemples de surcharge simulée avec arguments


function bonjour(nom, age) {

    if (age)
        return ` j'ai ${age}`
    return ` Bonjour ${nom}`

}

console.log(bonjour("Alain", 25))
console.log(bonjour("Alain"))

//Gérer un nombre variable d'arguments

function somme() {
    let s = 0;
    for (let i = 0; i < arguments.length; i++) {
        s += arguments[i]

    }
    return s
}

// console.log(somme(1, 2, 3))
// console.log(somme(1, 2))
// console.log(somme())

//Comportement en fonction du type ou du nombre d'arguments
function nomFunction(data) {

    if (typeof data === "string")
        return "String"
    if (typeof data === "number")
        return "Number"
}

//console.log(nomFunction(6))

// Mélange d'arguments de différents types


// Alternatives modernes : Paramètres par défaut et Rest

function somme(...args) {

    return args.reduce((a, v) => a + v, 0)
}

console.log(somme(1, 2, 3, 4))
console.log(somme())


/**** TODO3
 *
 * */


// closure ?

/**** TODO4
 *
 * */




