document.addEventListener('DOMContentLoaded', function () {
    const socket = new WebSocket('ws://localhost:3000');
    const messageList = document.getElementById('messages');
    const messageInput = document.getElementById('messageInput');
    const sendMessageButton = document.getElementById('sendMessageButton');

    // Affichage des messages reçus du serveur
    socket.onmessage = (event) => {
        const message = event.data;

        // Vérifiez si le message est un Blob
        if (message instanceof Blob) {
            const reader = new FileReader();

            reader.onload = function () {
                const textMessage = reader.result; // Le message transformé en texte
                const newMessage = document.createElement('li');
                newMessage.textContent = textMessage;  // Affichage du message texte
                messageList.appendChild(newMessage);

                // Faire défiler vers le bas
                messageList.scrollTop = messageList.scrollHeight;
            };

            // Lire le Blob comme texte
            reader.readAsText(message);
        } else {
            // Si ce n'est pas un Blob, affichez-le directement
            const newMessage = document.createElement('li');
            newMessage.textContent = message;  // Affichage du message
            messageList.appendChild(newMessage);

            // Faire défiler vers le bas
            messageList.scrollTop = messageList.scrollHeight;
        }
    };

    // Fonction pour envoyer un message
    sendMessageButton.addEventListener('click', function () {
        const message = messageInput.value;

        if (message) {
            socket.send(message);  // Envoi du message au serveur
            messageInput.value = '';  // Effacer le champ de saisie
        }
    });
});