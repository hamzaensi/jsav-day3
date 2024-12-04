const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const cors = require('cors');

const app = express();
const PORT = 3000;
const DATA_FILE = './tasks.json';

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Charger les données du fichier JSON
const readData = () => {
    if (!fs.existsSync(DATA_FILE)) {
        fs.writeFileSync(DATA_FILE, JSON.stringify([]));
    }
    return JSON.parse(fs.readFileSync(DATA_FILE, 'utf8'));
};

// Sauvegarder les données dans le fichier JSON
const writeData = (data) => {
    fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2));
};

// Routes

// Obtenir toutes les tâches
app.get('/tasks', (req, res) => {
    const tasks = readData();
    res.json(tasks);
});

// Ajouter une tâche
app.post('/tasks', (req, res) => {
    const { title, description } = req.body;
    const tasks = readData();
    const newTask = {
        id: Date.now(),
        title,
        description,
        completed: false,
    };
    tasks.push(newTask);
    writeData(tasks);
    res.status(201).json(newTask);
});

// Mettre à jour une tâche
app.put('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const { title, description, completed } = req.body;
    const tasks = readData();
    const taskIndex = tasks.findIndex((task) => task.id == id);

    if (taskIndex === -1) {
        return res.status(404).json({ message: 'Tâche non trouvée' });
    }

    tasks[taskIndex] = { ...tasks[taskIndex], title, description, completed };
    writeData(tasks);
    res.json(tasks[taskIndex]);
});

// Supprimer une tâche
app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;
    const tasks = readData();
    const filteredTasks = tasks.filter((task) => task.id != id);

    if (tasks.length === filteredTasks.length) {
        return res.status(404).json({ message: 'Tâche non trouvée' });
    }

    writeData(filteredTasks);
    res.json({ message: 'Tâche supprimée avec succès' });
});

// Démarrer le serveur
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur le port ${PORT}`);
});
