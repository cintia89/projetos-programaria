/*Mais um exercício para você ficar craque no GET! 🥰
Crie o código para quando acessar o endereço localhost:3333/hora no navegador, você receba a hora local. Como você criaria uma rota e visualizaria essa informação na página do navegador?
Para te ajudar, esta é a função que captura o horário local:

function mostraHora(request, response) {

 const data = new Date()

 const hora = data.toLocaleTimeString('pt-BR')

 response.send(hora)
}

*/

const express = require("express")
const app = express()
const porta = 3333
const router = express.Router()

function mostraHora(request, response) {

    const data = new Date()
   
    const hora = data.toLocaleTimeString('pt-BR')
   
    response.send(hora)
   }
function mostraPorta () {
    console.log("servidor criado e rodando ", porta)
}

app.use(router.get('/hora', mostraHora))
app.listen(porta, mostraPorta)
