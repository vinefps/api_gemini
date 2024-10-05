const axios = require('axios');

const BASE_URL = 'https://parallelum.com.br/fipe/api/v1/carros';

const getMarcas = async () => {
    const response = await axios.get(`${BASE_URL}/marcas`);
    return response.data;
};

const getModelos = async (marcaId) => {
    const response = await axios.get(`${BASE_URL}/marcas/${marcaId}/modelos`);
    return response.data;
};

const getAnos = async (marcaId, modeloId) => {
    const response = await axios.get(`${BASE_URL}/marcas/${marcaId}/modelos/${modeloId}/anos`);
    return response.data;
};

const getValor = async (marcaId, modeloId, anoId) => {
    const response = await axios.get(`${BASE_URL}/marcas/${marcaId}/modelos/${modeloId}/anos/${anoId}`);
    return response.data;
};

module.exports = {
    getMarcas,
    getModelos,
    getAnos,
    getValor,
};
