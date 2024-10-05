const express = require('express');
const router = express.Router();
const geminiService = require('../services/geminiService');

// Endpoint para gerar conteúdo usando a API do Gemini
router.get('/chatbot', async (req, res) => {
    try {
        const content = await geminiService.generateContent();
        res.send(content);
    } catch (error) {
        res.status(500).send(`Erro ao gerar conteúdo: ${error.message}`);
    }
});

module.exports = router;
