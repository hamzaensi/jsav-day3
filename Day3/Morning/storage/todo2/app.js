let db;

// Ouvrir ou créer la base de données
const openDB = () => {
    const request = indexedDB.open('cartDB', 1);

    request.onerror = (event) => {
        console.error('Erreur de la base de données :', event.target.errorCode);
    };

    request.onsuccess = (event) => {
        db = event.target.result;
        console.log('Base de données ouverte avec succès');
        updateCart(); // Met à jour le panier dès que la base de données est ouverte
    };

    // Créer l'object store pour les produits du panier
    request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains('cart')) {
            const objectStore = db.createObjectStore('cart', { keyPath: 'id', autoIncrement: true });
            objectStore.createIndex('name', 'name', { unique: false });
            objectStore.createIndex('price', 'price', { unique: false });
        }
    };
};

// Ajouter un produit au panier
const addToCart = (name, price) => {
    if (!db) {
        console.log('La base de données n\'est pas encore ouverte');
        return;
    }

    const transaction = db.transaction(['cart'], 'readwrite');
    const objectStore = transaction.objectStore('cart');

    const product = { name, price };

    const request = objectStore.add(product);

    request.onsuccess = () => {
        console.log('Produit ajouté au panier');
        updateCart(); // Met à jour le panier après ajout
    };

    request.onerror = (event) => {
        console.error('Erreur d\'ajout du produit:', event.target.errorCode);
    };
};

// Mettre à jour l'affichage du panier et du total
const updateCart = () => {
    if (!db) {
        console.log('La base de données n\'est pas encore ouverte');
        return;
    }

    const transaction = db.transaction(['cart'], 'readonly');
    const objectStore = transaction.objectStore('cart');
    const request = objectStore.getAll(); // Récupère tous les produits du panier

    request.onsuccess = (event) => {
        const cart = event.target.result;

        const cartItemsList = document.getElementById('cartItems');
        cartItemsList.innerHTML = ''; // Réinitialiser la liste avant de la remplir

        let total = 0;

        cart.forEach((product) => {
            const listItem = document.createElement('li');
            listItem.textContent = `${product.name} - ${product.price}€`;
            cartItemsList.appendChild(listItem);

            // Ajouter le prix au total
            total += product.price;
        });

        // Afficher le total
        document.getElementById('totalPrice').textContent = total;
    };

    request.onerror = (event) => {
        console.error('Erreur de récupération des produits:', event.target.errorCode);
    };
};

// Initialiser la base de données au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    openDB();
});
