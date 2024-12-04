/*
Object.groupBy()
Explication : Object.groupBy() est une méthode qui 
permet de regrouper les objets d'un tableau en fonction d'une clé.
Il renvoie un objet où chaque clé correspond à un groupe d'objets.


Exercice : Créez un tableau d'objets représentant des personnes,
 puis utilisez Object.groupBy() pour les regrouper par âge.
*/

const personnes = [
    { nom: 'Alice', age: 25 },
    { nom: 'Bob', age: 30 },
    { nom: 'Charlie', age: 25 },
];

const groupes = Object.groupBy(personnes, personne => personne.age);
console.log(groupes);
/*
{
    25: [{ nom: 'Alice', age: 25 }, { nom: 'Charlie', age: 25 }],
    30: [{ nom: 'Bob', age: 30 }]
}
*/



/*
Map.groupBy()
Explication : Map.groupBy() fonctionne de manière similaire 
à Object.groupBy(), mais il est utilisé avec des objets Map. 
Cela permet de regrouper des éléments dans une carte.

Exercice : Créez une Map de produits avec leurs prix, 
puis utilisez Map.groupBy() pour regrouper les produits
 par catégorie.
*/

const produits = new Map([
    ['p1', { nom: 'Laptop', categorie: 'Electronics', prix: 1200 }],
    ['p2', { nom: 'Smartphone', categorie: 'Electronics', prix: 800 }],
    ['p3', { nom: 'Chaise', categorie: 'Furniture', prix: 150 }],
]);

const groupesProduits = Map.groupBy(produits, produit => produit.categorie);
console.log(groupesProduits);
/*
Map {
    'Electronics' => [ { nom: 'Laptop', categorie: 'Electronics', prix: 1200 }, { nom: 'Smartphone', categorie: 'Electronics', prix: 800 } ],
    'Furniture' => [ { nom: 'Chaise', categorie: 'Furniture', prix: 150 } ]
}
*/


/*

Temporal.PlainDate
Explication : Temporal.PlainDate représente une date sans 
fuseau horaire ni information sur l'heure. 
Il permet de manipuler les dates facilement.

Exercice : Créez une instance de Temporal.PlainDate 
pour la date actuelle, puis affichez-la au format YYYY-MM-DD.



*/

const dateActuelle = Temporal.PlainDate.from('2024-10-15');
console.log(dateActuelle.toString()); // ?


/*
Temporal.PlainTime
Explication : Temporal.PlainTime représente une heure, 
sans information de date ni fuseau horaire. 
Il est utile pour les opérations liées à l'heure.

Exercice : Créez une instance de Temporal.PlainTime 
pour une heure spécifique, puis affichez-la.

*/

const heureActuelle = Temporal.PlainTime.from('14:30:00');
console.log(heureActuelle.toString()); // ?


/*
Temporal.PlainMonthDay
Explication : Temporal.PlainMonthDay représente 
un jour et un mois sans année. 
Cela peut être utile pour des dates récurrentes, 
comme les anniversaires.

Exercice : Créez une instance de Temporal.PlainMonthDay 
pour un anniversaire et affichez-la.
*/

const anniversaire = Temporal.PlainMonthDay.from('10-15');
console.log(anniversaire.toString()); // ?


/*
Temporal.PlainYearMonth
Explication : Temporal.PlainYearMonth représente une 
année et un mois, sans jour ni fuseau horaire. 
C'est utile pour les opérations mensuelles.

Exercice : Créez une instance de Temporal.PlainYearMonth
pour un mois et une année spécifiques, puis affichez-la.
*/

const anneeMois = Temporal.PlainYearMonth.from('2024-10');
console.log(anneeMois.toString()); // ?

