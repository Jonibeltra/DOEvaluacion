
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pagina1.html'));
});

app.get('/pagina2', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pagina2.html'));
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});