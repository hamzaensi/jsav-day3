/*

Exercice 1 : Addition de nombres
Créez une fonction add qui prend un ou plusieurs arguments :

Si un seul nombre est passé, retournez ce nombre.
Si plusieurs nombres sont passés, retournez leur somme.



// Tests
console.log(add(5));             // 5
console.log(add(1, 2, 3, 4));    // 10
console.log(add());              // 0 (aucun argument)






Exercice 2 : Gestion des arguments par type
Créez une fonction describe qui accepte un argument unique et :

Affiche "C'est une chaîne" si c'est une chaîne.
Affiche "C'est un nombre" si c'est un nombre.
Affiche "Type non reconnu" dans les autres cas.




// Tests
console.log(describe("Bonjour"));  // C'est une chaîne
console.log(describe(42));         // C'est un nombre
console.log(describe(true));       // Type non reconnu
console.log(describe(null));       // Type non reconnu




Exercice 3 : Combinaison de paramètres fixes et rest
Créez une fonction introduce qui prend un argument 
fixe name suivi d'un nombre variable d'amis. 
La fonction doit afficher un message :

Exemple : introduce("Alice", "Bob", "Charlie") 
devrait afficher : "Alice knows Bob, Charlie."




// Tests
console.log(introduce("Alice", "Bob", "Charlie")); // Alice knows Bob, Charlie.
console.log(introduce("Alice"));                  // Alice has no friends.
console.log(introduce("John", "Emma"));           // John knows Emma.


*/