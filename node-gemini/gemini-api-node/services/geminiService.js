const axios = require('axios');

// Função para gerar conteúdo usando a API do Gemini
const generateContent = async () => {
    const url = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCvgbfN3ip7ZX-sBYDTZYd_77Q5RSVXZcA';

    // Corpo da requisição JSON
    const requestData = {
        contents: [{
            parts: [{
                text: "futebol"
            }]
        }]
    };

    try {
        // Requisição POST à API do Gemini
        const response = await axios.post(url, requestData, {
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Verifica se a resposta foi bem-sucedida e retorna o conteúdo
        if (response.status === 200) {
            const content = response.data.candidates[0].content.parts[0].text;
            return content;
        } else {
            return `Falha ao obter dados. Código de status: ${response.status}`;
        }

    } catch (error) {
        return `Erro ao fazer a requisição: ${error.message}`;
    }
};

module.exports = {
    generateContent
};
