const express = require('express');
const app = express();
const port = 3000;

const fipeController = require('./projeto-api-fipe/controllers/fipeController');

// Endpoint "Hello World"
app.get('/hello/:name', (req, res) => {
    const { name } = req.params;
    res.send(`Hello, ${name}! Bem-vindo à nossa API.`);
});

// Usando o controller da FIPE
app.use('/fipe', fipeController);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
