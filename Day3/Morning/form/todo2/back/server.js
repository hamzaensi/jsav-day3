const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

// Middleware pour parser le JSON dans les requêtes
app.use(bodyParser.json());

// Base de données fictive (tableau des utilisateurs)
const users = [
    { email: "user1@example.com" },
    { email: "user2@example.com" },
    { email: "user3@example.com" },
];

// Endpoint pour vérifier si un e-mail existe
app.post("/api/check-email", (req, res) => {
    const { email } = req.body;

    // Vérifier si l'email existe dans la "base de données"
    const user = users.find((user) => user.email === email);

    if (user) {
        return res.status(200).json({ exists: true, message: "Email exists." });
    } else {
        return res.status(404).json({ exists: false, message: "Email does not exist." });
    }
});

// Lancement du serveur
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
