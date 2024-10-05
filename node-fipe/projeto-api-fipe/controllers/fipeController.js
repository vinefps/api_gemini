const express = require('express');
const router = express.Router();
const fipeService = require('../services/fipeService');

// Rota para obter a lista de marcas
router.get('/marcas', async (req, res) => {
    try {
        const marcas = await fipeService.getMarcas();
        res.json(marcas);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter as marcas' });
    }
});

// Rota para obter os modelos de uma marca específica
router.get('/marcas/:marcaId/modelos', async (req, res) => {
    const { marcaId } = req.params;
    try {
        const modelos = await fipeService.getModelos(marcaId);
        res.json(modelos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter os modelos' });
    }
});

// Rota para obter os anos de um modelo específico
router.get('/marcas/:marcaId/modelos/:modeloId/anos', async (req, res) => {
    const { marcaId, modeloId } = req.params;
    try {
        const anos = await fipeService.getAnos(marcaId, modeloId);
        res.json(anos);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter os anos' });
    }
});

// Rota para obter o valor de um veículo específico
router.get('/marcas/:marcaId/modelos/:modeloId/anos/:anoId', async (req, res) => {
    const { marcaId, modeloId, anoId } = req.params;
    try {
        const valor = await fipeService.getValor(marcaId, modeloId, anoId);
        res.json(valor);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao obter o valor' });
    }
});

module.exports = router;
