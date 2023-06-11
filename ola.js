const express = require('express')
const app = express()
const router = express.Router() //Route funcao que vem de dentro do express

function mostrarOla (request, response) {
    response.send("olá, Mundo!")
}

const porta = 3333

function mostrarPorta (){
    console.log("servidor rodando ", porta)
}

app.use(router.get('/ola', mostrarOla))
app.listen(porta, mostrarPorta)
