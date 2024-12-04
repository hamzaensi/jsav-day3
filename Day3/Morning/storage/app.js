//

// // Stocker des données dans LocalStorage
// localStorage.setItem('username', 'john_doe');
// localStorage.setItem('theme', 'dark');

// // Récupérer des données de LocalStorage
// let username = localStorage.getItem('username');
// let theme = localStorage.getItem('theme');
// console.log(username);  // john_doe
// console.log(theme);     // dark

// // Supprimer une donnée
// localStorage.removeItem('theme');

// // Effacer toutes les données
// localStorage.clear();




// Exemple d'utilisation de IndexedDB :


let db;

// Ouvrir la base de données IndexedDB
const openDB = () => {
    const request = indexedDB.open('usersDB', 1);

    request.onerror = (event) => {
        console.error('Database error:', event.target.errorCode);
    };

    request.onsuccess = (event) => {
        db = event.target.result;
        console.log('Database opened successfully');
    };

    // Créer l'object store si ce n'est pas déjà fait
    request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains('users')) {
            db.createObjectStore('users', { keyPath: 'id', autoIncrement: true });
        }
    };
};

// Ajouter un utilisateur à la base de données
const addUser = (user) => {
    if (!db) {
        console.log('Database is not open');
        return;
    }

    const transaction = db.transaction(['users'], 'readwrite');
    const objectStore = transaction.objectStore('users');

    const request = objectStore.add(user);

    request.onsuccess = () => {
        console.log('User added to the database');
    };

    request.onerror = (event) => {
        console.error('Error adding user:', event.target.errorCode);
    };
};

// Récupérer un utilisateur par son id
const getUser = (userId) => {
    if (!db) {
        console.log('Database is not open');
        return;
    }

    const transaction = db.transaction(['users'], 'readonly');
    const objectStore = transaction.objectStore('users');

    const request = objectStore.get(userId);

    request.onsuccess = () => {
        if (request.result) {
            console.log('User found:', request.result);
        } else {
            console.log('User not found');
        }
    };

    request.onerror = (event) => {
        console.error('Error getting user:', event.target.errorCode);
    };
};

// Exemple d'ajout d'un utilisateur
const user = { name: 'John Doe', email: 'john@example.com' };

// Ouvrir la base de données et ajouter un utilisateur
openDB();

// Ajouter un utilisateur après l'ouverture de la base de données
setTimeout(() => {
    addUser(user); // Ajouter un utilisateur
}, 1000); // Attendre que la base de données soit ouverte

// Récupérer l'utilisateur avec un id spécifique après un délai
setTimeout(() => {
    getUser(1); // Exemple de récupération de l'utilisateur avec id = 1
}, 2000); // Attendre un peu pour donner le temps à l'utilisateur d'être ajouté
