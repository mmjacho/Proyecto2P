const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());

// Ruta GET /usuarios con filtros por query
app.get('/usuarios', (req, res) => {
    const { nombre, edad, ciudad } = req.query;
    const dataPath = path.join(__dirname, 'usuarios.json');
    let usuarios = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

    if (nombre) {
        usuarios = usuarios.filter(u => u.nombre.toLowerCase() === nombre.toLowerCase());
    }
    if (edad) {
        usuarios = usuarios.filter(u => u.edad == edad);
    }
    if (ciudad) {
        usuarios = usuarios.filter(u => u.ciudad.toLowerCase() === ciudad.toLowerCase());
    }
    res.json(usuarios);
});

app.listen(PORT, () => {
    console.log(`Servidor Express escuchando en http://localhost:${PORT}`);
});
