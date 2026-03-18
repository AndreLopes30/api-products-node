const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())
app.use(express.json())

let produtos = [
    { id: 1, nome: 'Notebook', preco: 3500, estoque: 10 },
    { id: 2, nome: 'Mouse', preco: 50, estoque: 25 }
]

app.get('/', (req,res) => {
    res.json("API funcionando! Chama")
})

app.get('/produtos', (req, res) => {
    res.json(produtos)
})

app.post('/produtos', (req,res) => {
    const novoProduto = {
        id : Date.now(),
        nome : req.body.nome,
        preco : req.body.preco,
        estoque : req.body.estoque        
    }
    produtos.push(novoProduto)
    res.status(201).json(novoProduto)
})

app.delete('/produtos/:id', (req,res) => {
    const deletar = Number(req.params.id)
    produtos = produtos.filter(produto => produto.id !== deletar)
    res.status(204).send()
})

app.listen(3000, () => {
    console.log('Tudo ok!')
})