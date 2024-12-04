// Exercice 1
/*
L'itération asynchrone vous permet d'utiliser for await...of 
pour itérer sur des objets itérables asynchrones, 
tels que des flux de données. Cela facilite le travail 
avec des données qui ne sont pas immédiatement disponibles.

*/

// Exemple

async function* asyncGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

(async () => {
    for await (const value of asyncGenerator()) {
        console.log(value); // Affiche : 1, 2, 3
    }
})();


/*
Créez une fonction génératrice asynchrone qui renvoie les nombres
 de 1 à 5 avec un délai d'1 seconde entre chaque nombre.
 Utilisez for await...of pour afficher chaque nombre dans
 la console.
*/


// Exercice 2

/*
La méthode finally d'une promesse permet d'exécuter du code 
après qu'une promesse soit résolue (remplie ou rejetée), 
quel que soit son résultat. Cela est utile pour des 
actions de nettoyage.

*/

const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Fait !"), 1000);
});

promise
    .then(result => console.log(result)) // Affiche : "Fait !"
    .catch(error => console.error(error))
    .finally(() => console.log("Nettoyage terminé !"));
// S'exécute indépendamment du résultat de la promesse

/*
Créez une promesse qui simule un échec après 2 secondes.
 Utilisez then, catch et finally pour gérer la promesse 
 et afficher des messages pour chaque partie.

*/


//Exercice 3

/*
Les propriétés rest d'objet vous permettent d'extraire 
des propriétés d'un objet et de regrouper les propriétés 
restantes dans un nouvel objet.
*/

const { a, b, ...rest } = { a: 1, b: 2, c: 3, d: 4 };
console.log(a); // Affiche : 1
console.log(b); // Affiche : 2
console.log(rest); // Affiche : { c: 3, d: 4 }

/*
Créez un objet avec cinq propriétés. Utilisez les propriétés rest d'objet pour extraire deux propriétés et afficher les propriétés restantes sous forme de nouvel objet.
*/