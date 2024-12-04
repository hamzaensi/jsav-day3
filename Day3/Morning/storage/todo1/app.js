// Fonction pour ajouter un produit au panier
function addToCart(name, price) {
    // Récupérer le panier existant depuis localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Ajouter le produit au panier
    cart.push({ name, price });

    // Sauvegarder le panier dans localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    // Mettre à jour l'affichage du panier
    updateCart();
}

// Fonction pour mettre à jour l'affichage du panier et du total
function updateCart() {
    // Récupérer les produits du panier depuis localStorage
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Afficher les produits dans la liste du panier
    const cartItemsList = document.getElementById('cartItems');
    cartItemsList.innerHTML = ''; // Réinitialiser la liste avant de la remplir

    let total = 0;

    // Parcourir les produits du panier et les afficher
    cart.forEach((product) => {
        const listItem = document.createElement('li');
        listItem.textContent = `${product.name} - ${product.price}€`;
        cartItemsList.appendChild(listItem);

        // Ajouter le prix au total
        total += product.price;
    });

    // Afficher le total
    document.getElementById('totalPrice').textContent = total;
}

// Initialiser le panier à chaque chargement de la page
document.addEventListener('DOMContentLoaded', () => {
    updateCart();
});
