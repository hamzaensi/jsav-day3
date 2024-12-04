const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 3000 });

// Lorsque la connexion d'un client est établie
wss.on('connection', (ws) => {
    console.log('Un client est connecté');

    // Lorsque le serveur reçoit un message d'un client
    ws.on('message', (message) => {
        console.log('Reçu du client: ' + message);

        // Diffuser le message à tous les autres clients
        wss.clients.forEach(client => {
            if (client !== ws && client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    });

    // Envoyer un message de bienvenue au client
    ws.send('Bienvenue sur le serveur de chat!');
});

console.log('Le serveur WebSocket écoute sur ws://localhost:3000');
