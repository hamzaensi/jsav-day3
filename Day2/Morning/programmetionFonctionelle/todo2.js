/*
Exercice 1 : Redéfinir une méthode d'objet
Énoncé :
Créez un objet calculator avec une méthode add(a, b) 
qui retourne la somme. Redéfinissez cette méthode pour 
afficher un message avant de retourner le résultat.
*/
// Création de l'objet avec la méthode initiale
const calculator = {
    add(a, b) {
        return a + b;
    }
};

// Test de la méthode originale
console.log(calculator.add(2, 3)); // 5

// Redéfinition de la méthode


// Test après redéfinition
console.log(calculator.add(4, 6));




/*
Exercice 2 : Redéfinir une méthode native
Énoncé :
Redéfinissez la méthode toUpperCase() des chaînes de caractères pour 
toujours retourner "MODIFIED".
*/

// Sauvegarder la méthode originale pour éviter les conflits dans d'autres parties

// Redéfinir la méthode

// Test de la redéfinition
console.log("hello".toUpperCase()); // MODIFIED
console.log("world".toUpperCase()); // MODIFIED

// Restauration de la méthode originale (meilleure pratique)


// Test après restauration
console.log("hello".toUpperCase()); // HELLO


/*
Exercice 3 : Étendre un prototype
Énoncé :
Ajoutez une méthode isPalindrome() à String.prototype pour 
vérifier si une chaîne est un palindrome.
*/

// Ajout de la méthode au prototype String


// Test avec des chaînes
console.log("radar".isPalindrome());         // true
console.log("hello".isPalindrome());         // false
console.log("A man, a plan, a canal: Panama".isPalindrome()); // true





