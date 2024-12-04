// Écoute les messages provenant du script principal
onmessage = function (e) {
    console.log('Message reçu du script principal :', e.data);

    if (e.data === 'start') {
        // Effectuer un calcul intensif 
        let result = 0;
        for (let i = 0; i < 1e8; i++) {
            result += i;
        }

        // Envoyer le résultat au script principal
        this.setTimeout()

        // Comment retarder l'envoi du résultat ? 


    }
};