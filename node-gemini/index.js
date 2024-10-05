const express = require('express');
const app = express();
const port = 3000;

const geminiController = require('./gemini-api-node/controllers/geminiController');

// Usando o controller do Gemini
app.use('/api', geminiController);

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
