// // // Création d'une promesse
// function attendre(ms) {
//     return new Promise((resolve, reject) => {
//         if (ms < 0) {
//             reject("Le délai ne peut pas être négatif."); // En cas d'erreur
//         } else {
//             setTimeout(() => {
//                 resolve(`Attendu ${ms} millisecondes.`); // Résultat réussi
//             }, ms);
//         }
//     });
// }

// // // Utilisation de la promesse
// attendre(-5)
//     .then((message) => {
//         console.log(message); // "Attendu 2000 millisecondes."
//     })
//     .catch((erreur) => {
//         console.error("Erreur :", erreur);
//     });

// Récupérer des données d'une API publique

// Fonction pour faire une requête réseau

// function obtenirUtilisateur(id) {
//     return new Promise((resolve, reject) => {
//         fetch(`https://jsonplaceholder.typicode.com/users4545/${id}`)
//             .then((response) => {
//                 if (!response.ok) {
//                     reject(`Erreur : Statut ${response.status}`);
//                 }
//                 return response.json(); // Transformer la réponse en JSON
//             })
//             .then((data) => {
//                 resolve(data); // Résoudre la promesse avec les données
//             })
//             .catch((error) => {
//                 reject(`Erreur réseau : ${error}`);
//             });
//     });
// }

// // // Utilisation de la promesse
// obtenirUtilisateur(1)
//     .then((utilisateur) => {
//         console.log("Utilisateur récupéré :", utilisateur);
//     })
//     .catch((erreur) => {
//         console.error(erreur);
//     });


// /****
//  * Async Await
//  *  */

// async function fetchData() {
//     try {
//         const data = await fetch('https://api.example.com/data');
//         const json = await data.json();
//         console.log(json);
//     } catch (error) {
//         console.error("Erreur lors de la récupération :", error);
//     }
// }
// fetchData();


// // Fetch

// fetch('https://api.example.com/data')
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("Erreur HTTP !");
//         }
//         return response.json();
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error("Erreur :", error));

// // Utilisation avancée avec async/await
async function getData() {
    try {
        const response = await fetch('https://api.example.com/data');
        if (!response.ok) throw new Error("Erreur HTTP !");
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Erreur :", error);
    }
}
getData();



