// Exercice 1 
//Écrire une fonction qui valide si un
// numéro est au format(200) 563 - 9999

const validatePhone = (phone) => /^\ code here $/.test(phone);

console.log(validatePhone("(123) 456-7890")); // true
console.log(validatePhone("123-456-7890"));   // false
console.log(validatePhone("(123)456-7890"));  // false


/* solution
const validatePhone = (phone) => /^\(\d{3}\) \d{3}-\d{4}$/.test(phone);

console.log(validatePhone("(123) 456-7890")); // true
console.log(validatePhone("123-456-7890"));   // false
console.log(validatePhone("(123)456-7890"));  // false


*/


// Exercice 2
/* 
Écrire une fonction qui renvoie true si une chaîne contient uniquement des lettres 
(majuscules et minuscules). */

const isOnlyLetters = (str) => /^$/.test(str);

console.log(isOnlyLetters("Hello"));    // true
console.log(isOnlyLetters("Hello123")); // false
console.log(isOnlyLetters(""));         // false

/*
const isOnlyLetters = (str) => /^[a-zA-Z]+$/.test(str);

console.log(isOnlyLetters("Hello"));    // true
console.log(isOnlyLetters("Hello123")); // false
console.log(isOnlyLetters(""));         // false

*/


// Exercice 3

// Écrire une fonction qui extrait tous les
// chiffres d'une chaîne donnée.
/*
La méthode str.match() en JavaScript est utilisée pour 
rechercher des correspondances entre une chaîne de 
caractères et une expression régulière. 
Elle retourne un résultat sous forme de tableau 
ou null si aucune correspondance n’est trouvée.
*/
const extractNumbers = (str) => str.match(//) || [];

    console.log(extractNumbers("abc123def456")); // ["123", "456"]
console.log(extractNumbers("no numbers"));   // []
console.log(extractNumbers("42 is the answer")); // ["42"]


/*
Solution
const extractNumbers = (str) => str.match(/\d+/g) || [];

console.log(extractNumbers("abc123def456")); // ["123", "456"]
console.log(extractNumbers("no numbers"));   // []
console.log(extractNumbers("42 is the answer")); // ["42"]
*/


// Exercice 4
/*
Écrire une fonction qui remplace tous les 
espaces dans une chaîne par des underscores (_).
*/

const replaceSpaces = (str) => str.replace(, "_");

console.log(replaceSpaces("Hello World"));     // "Hello_World"
console.log(replaceSpaces("  Many   spaces "));// "_Many___spaces_"
console.log(replaceSpaces("NoSpacesHere"));    // "NoSpacesHere"



/*
Solution
const replaceSpaces = (str) => str.replace(/\s+/g, "_");

console.log(replaceSpaces("Hello World"));     // "Hello_World"
console.log(replaceSpaces("  Many   spaces "));// "_Many___spaces_"
console.log(replaceSpaces("NoSpacesHere"));    // "NoSpacesHere"

*/
