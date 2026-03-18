# 🚀 API REST de Produtos - Node.js + Express

API completa de gerenciamento de produtos.

## 📡 Endpoints

### GET /produtos
Lista todos os produtos

### POST /produtos
Cria um novo produto

**Body:**
\`\`\`json
{
    "nome": "Nome do produto",
    "preco": 100,
    "estoque": 50
}
\`\`\`

### DELETE /produtos/:id
Deleta um produto por ID

## 🛠️ Tecnologias

- Node.js
- Express
- CORS

## 🚀 Como rodar

\`\`\`bash
npm install
npm run dev
\`\`\`

API roda em: http://localhost:3000
