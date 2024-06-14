const express = require('express');
const { poolPromise } = require('./config/db');

const app = express();

app.get('/', async (req, res) => {
    try {
        const pool = await poolPromise;
        res.send('Conectado a la base de datos!');
    } catch (err) {
        res.status(500).send('Error de conexión a la base de datos');
    }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});
