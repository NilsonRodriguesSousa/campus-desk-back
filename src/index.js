const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3333;

// Infraestrutura já fornecida: JSON e acesso do frontend em outro domínio.
// CORS aberto somente para esta API didática pública, sem autenticação.
app.use(cors());
app.use(express.json());

const tickets = [];
let nextId = 1;

// Complete as seis rotas. O 501 identifica uma rota ainda não implementada.
// Substitua cada resposta 501 por sua lógica e pelas respostas do contrato.

app.get('/api/summary', (request, response) => {
    // TODO: contar todos os chamados por situação e retornar total + contagens.
    return response.status(501).json({ message: 'Resumo ainda não implementado.' });
});

app.get('/api/tickets', (request, response) => {
    const { search, status, category, priority, sort } = request.query;
    // TODO: validar filtros, combinar busca/filtros e ordenar uma cópia do array.
    return response.status(501).json({ message: 'Listagem ainda não implementada.' });
});

app.get('/api/tickets/:id', (request, response) => {
    const { id } = request.params;
    // TODO: validar id, localizar chamado e retornar 200, 400 ou 404.
    return response.status(501).json({ message: 'Consulta ainda não implementada.' });
});

app.post('/api/tickets', (request, response) => {
    const { title, description, requester, category, priority } = request.body ?? {};
    // TODO: validar antes de alterar tickets; gerar id com nextId++, createdAt e status aberto.
    // TODO: inserir e retornar o objeto criado com status 201.
    return response.status(501).json({ message: 'Cadastro ainda não implementado.' });
});

app.put('/api/tickets/:id', (request, response) => {
    const { id } = request.params;
    const { title, description, requester, category, priority, status } = request.body ?? {};
    // TODO: localizar, validar os seis campos e atualizar preservando id e createdAt.
    return response.status(501).json({ message: 'Atualização ainda não implementada.' });
});

app.delete('/api/tickets/:id', (request, response) => {
    const { id } = request.params;
    // TODO: validar/localizar, permitir exclusão somente se resolvido e retornar message.
    return response.status(501).json({ message: 'Exclusão ainda não implementada.' });
});

app.listen(port, () => {
    console.log(`API disponível na porta ${port}`);
});
