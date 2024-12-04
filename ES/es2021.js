/*
Promise.any() prend un ensemble de Promises et retourne une 
nouvelle Promise qui est résolue dès qu'une des Promises 
est résolue. Si toutes les Promises échouent, 
elle est rejetée avec une AggregateError contenant 
toutes les erreurs.

*/

const promise1 = Promise.reject('Erreur 1');
const promise2 = Promise.reject('Erreur 2');
const promise3 = new Promise((resolve) => setTimeout(resolve, 100, 'Résultat 3'));

Promise.any([promise1, promise2, promise3])
    .then((result) => {
        console.log(result); // Affiche : ?
    })
    .catch((err) => {
        console.log(err); // ? 
    });

/*
String.prototype.replaceAll() permet de remplacer
 toutes les occurrences d'une sous-chaîne dans une 
 chaîne de caractères. Cela fonctionne avec une chaîne 
 ou une expression régulière.
*/

const text = "Bonjour, monde! Bonjour encore!";
const newText = text.replaceAll("Bonjour", "Salut");
console.log(newText); // Affiche : ?

/*
Les séparateurs numériques (_) permettent de rendre 
les grands nombres plus lisibles en ajoutant des underscores.
Cela n'affecte pas la valeur du nombre.


*/

const largeNumber = 1_000_000; // Un million
const anotherNumber = 0.000_001; // Un millionième

console.log(largeNumber); // Affiche : ?
console.log(anotherNumber); // Affiche : ?