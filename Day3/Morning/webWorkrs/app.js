
// Vérifie si le navigateur supporte les Web Workers
if (window.Worker) {
    let myWorker = new Worker('worker.js'); // path to worker.js

    const resultParagraph = document.getElementById('result');

    // Écoute le clic sur le bouton pour démarrer le Worker
    document.getElementById('startWorker').addEventListener('click', () => {
        // Envoie un message au Web Worker
        myWorker.postMessage('start');
        console.log('Message envoyé au Worker : start');
    });

    // Écoute les messages provenant du Worker
    myWorker.onmessage = function (e) {
        console.log('Message reçu du Worker :', e.data);
        resultParagraph.textContent = `Résultat : ${e.data}`;
    };

    // Écoute le clic sur le bouton pour arrêter le Worker
    document.getElementById('stopWorker').addEventListener('click', () => {
        myWorker.terminate();  // Arrête le Web Worker
        console.log('Worker arrêté');
        resultParagraph.textContent = 'Worker arrêté.';
    });
} else {
    console.log('Votre navigateur ne supporte pas les Web Workers.');
}
