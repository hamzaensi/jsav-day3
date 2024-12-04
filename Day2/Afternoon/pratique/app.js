/*
Modularisation avec Require.js

Require.js est un gestionnaire de modules JavaScript 
qui permet de structurer le code en séparant 
les différentes parties de l'application en modules. 
Cela permet d'éviter des conflits globaux et facilite 
la maintenance, tout en offrant des fonctionnalités 
comme le chargement asynchrone des modules.

********************************
1. Introduction au concept de modularisation avec Require.js
Dans ce travail pratique, les apprenants apprendront à :

Créer et utiliser des modules avec Require.js.
Charger des modules de manière asynchrone.
Organiser le code en modules réutilisables.
Prérequis :

Avoir une structure de dossier pour l’application.
Avoir Require.js installé ou intégré dans 
le projet (via CDN ou téléchargement).


2. Étape 1 : Installation de Require.js

1.1 Via CDN :
Dans votre fichier index.html, ajoutez le script Require.js à 
l'intérieur de la balise <head> :


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Exemple Require.js</title>
    <script data-main="js/main" src="https://cdnjs.cloudflare.com/ajax/libs/require.js/2.3.6/require.min.js"></script>
</head>
<body>
    <h1>Modularisation avec Require.js</h1>
    <div id="output"></div>
</body>
</html>


1.2 Via téléchargement local :
Téléchargez require.js et placez-le dans le dossier libs/ de votre projet.

Dans votre index.html :

<script data-main="js/main" src="libs/require.js"></script>


3. Étape 2 : Structure du projet
Organisez votre projet en différents fichiers pour illustrer la modularisation. Par exemple, dans un dossier js/ :

/project-root
  ├── index.html
  └── js/
      ├── main.js
      ├── user.js
      ├── products.js
      └── services.js


4. Étape 3 : Création des modules
4.1 Module user.js
Le module user.js contiendra des informations sur un utilisateur et une fonction qui retourne un message de bienvenue.


// user.js
define([], function() {
    var user = {
        name: 'Alice',
        email: 'alice@example.com'
    };

    function getWelcomeMessage() {
        return `Bienvenue, ${user.name}!`;
    }

    return {
        user: user,
        getWelcomeMessage: getWelcomeMessage
    };
});



4.2 Module products.js
Le module products.js contient des informations sur des produits, ainsi qu'une fonction pour lister ces produits.


// products.js
define([], function() {
    var products = [
        { name: 'Produit A', price: 20 },
        { name: 'Produit B', price: 30 }
    ];

    function getProductsList() {
        return products.map(product => `${product.name} - ${product.price}€`);
    }

    return {
        getProductsList: getProductsList
    };
});



4.3 Module services.js
Le module services.js contient des fonctions qui simulent des appels API. Nous allons importer user.js et products.js dans ce module.


// services.js
define(['user', 'products'], function(userModule, productsModule) {
    function getUserAndProducts() {
        var welcomeMessage = userModule.getWelcomeMessage();
        var productList = productsModule.getProductsList();
        
        return {
            welcomeMessage: welcomeMessage,
            productList: productList
        };
    }

    return {
        getUserAndProducts: getUserAndProducts
    };
});




5. Étape 4 : Utilisation des modules dans main.js
Dans le fichier main.js, nous allons charger tous les modules précédemment créés à l'aide de Require.js et afficher les données dans la page.




// main.js
require(['services'], function(services) {
    var result = services.getUserAndProducts();
    
    var output = document.getElementById('output');
    output.innerHTML = `<h2>${result.welcomeMessage}</h2><ul>` +
        result.productList.map(product => `<li>${product}</li>`).join('') +
        '</ul>';
});



Explication du code :
define([]) :

Chaque module utilise define() pour définir un module et ses dépendances. Dans cet exemple, user.js et products.js n'ont pas de dépendances externes, donc nous passons un tableau vide [].
require([]) :

Dans main.js, nous utilisons require() pour charger le module services, qui à son tour charge user.js et products.js comme dépendances.
Modules et dépendances :

Le module services.js importe user.js et products.js, ce qui permet de combiner les informations des utilisateurs et des produits.



6. Étape 5 : Lancer l'application
Ouvrez votre fichier index.html dans le navigateur. Vous devriez voir le message de bienvenue pour l'utilisateur suivi de la liste des produits :


Bienvenue, Alice!
- Produit A - 20€
- Produit B - 30€














*/