const http = require("http");

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Application Web Node.js</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            background: linear-gradient(135deg, #007BFF, #6C63FF);
            color: white;
        }
        h1 {
            margin-bottom: 20px;
        }
        .button-container {
            display: grid;
            grid-template-columns: repeat(2, 150px);
            gap: 20px;
        }
        button {
            padding: 15px;
            font-size: 16px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background 0.3s, transform 0.3s;
        }
        button:hover {
            background-color: rgba(255, 255, 255, 0.2);
            transform: scale(1.05);
        }
    </style>
</head>
<body>
    <h1>Bienvenue sur l'Application Web</h1>
    <div class="button-container">
        <button onclick="alert('Bouton 1 : Fonctionnalité 1')">Fonction 1</button>
        <button onclick="alert('Bouton 2 : Fonctionnalité 2')">Fonction 2</button>
        <button onclick="alert('Bouton 3 : Fonctionnalité 3')">Fonction 3</button>
        <button onclick="alert('Bouton 4 : Fonctionnalité 4')">Fonction 4</button>
    </div>
</body>
</html>
`;

// Création d'un serveur Node.js
const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(htmlContent);
});

// Démarrage du serveur sur le port 3000
const PORT = 3001;
server.listen(PORT, () => {
    console.log(`Serveur démarré sur http://localhost:${PORT}`);
});
