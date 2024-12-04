// Créer un objet WebSocket
let socket = new WebSocket('ws://example.com/socket');

// Ouvrir la connexion
socket.onopen = function (event) {
    console.log('Connexion WebSocket établie !');
    // Envoyer un message au serveur
    socket.send('Hello, server!');
};

// Recevoir un message du serveur
socket.onmessage = function (event) {
    console.log('Message reçu du serveur :', event.data);
};

// Gérer les erreurs
socket.onerror = function (error) {
    console.log('Erreur WebSocket:', error);
};

// Fermer la connexion WebSocket
socket.onclose = function (event) {
    console.log('Connexion WebSocket fermée', event);
};