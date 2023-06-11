const express = require("express")
const app = express()
const porta = 3333
const router = express.Router()

//array de mulheres
const mulheres = 
    [

    {
   
      nome: 'Simara Conceição',
   
      imagem: 'https://bit.ly/3LJIyOF',
   
      minibio: 'Desenvolvedora e instrutora',
   
    },
   
    {
   
      nome: 'Iana Chan',
   
      imagem: 'https://bit.ly/3JCXBqP',
   
      minibio: 'CEO & Founder da PrograMaria',
   
    },
   
    {
   
      nome: 'Luana Pimentel',
   
      imagem: 'https://bit.ly/3FKpFaz',
   
      minibio: 'Senior Staff Software Engineer',
   
    }
   
   ]

function mostraMulheres (resquest, response) {
    response.json(mulheres)
}

function mostrarPorta () {
    console.log("servidor criado e rodando ", porta)
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostrarPorta)




