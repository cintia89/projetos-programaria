const express = require('express')
const router = express.Router()
const app = express()
const porta = 3333

//funcao fazer get da mulher e seus atributos
function mostrarMulher(request, response){
    response.json({
        nome:'Cíntia de Oliveira',
        imagem: 'https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png',
        minibio: 'Desenvolvedora FullStack'
    })
}

//funcao mostrar que servidor esta rodando na porta 
function mostrarPorta(){
    console.log('servidor rodado', porta)
}

app.listen(porta , mostrarPorta)
app.use(router.get('/mulher', mostrarMulher))