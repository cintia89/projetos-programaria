const express = require('express') //AQUI INICIO O EXPRESS
const app = express() //AQUI ESTOU INICIANDO O APP
const router = express.Router() //AQUI CONFIGURO A PRIMEIRA PARTE DA ROTA
const cors = require('cors')//aqui estou tranxendo o pacote cors que permite consumir
app.use(express.json())
const conectaBancoDeDados = require('./BancoDeDados')//ligando o banco de dados ao arquivo
conectaBancoDeDados() // estou chamando a funcao que conecta o banco de dados
const Mulher = require('./mulhermodel')
const porta = 3333 // AQUI PORTA
app.use(cors())


//GET
async function mostraMulheres (resquest, response) {
    try {
      const mulheresVindasDoBancoDeDados = await Mulher.find()

      response.json(mulheresVindasDoBancoDeDados)
    }catch (erro) {
      console.log(erro)
    }
    response.json()
}

//POST
async function criaMulher (request, response){
  const novaMulher = new Mulher({
    nome: request.body.nome,
    imagem:request.body.imagem,
    minibio: request.body.minibio,
    citacao: request.body.citacao
  })

  try {
    const mulherCriada = await novaMulher.save()
    response.status(201).json(mulherCriada)
  } catch (erro) {
      console.log(erro)
  }
  
}  

//PATCH
async function corrigeMulher(request,response){
    try {
      const mulherEncontrada = await Mulher.findById(request.params.id)
      if (request.body.nome){
        mulherEncontrada.nome = request.body.nome
      }
      if (request.body.imagem){
        mulherEncontrada.imagem = request.body.imagem
      }
      if (request.body.minibio){
        mulherEncontrada.minibio = request.body.minibio
      }
      if (request.body.citacao){
        mulherEncontrada.citacao = request.body.citacao
      }

      const mulherAtualizadaNoBancoDeDados = await mulherEncontrada.save()

      response.json(mulherAtualizadaNoBancoDeDados)
    } catch (erro) {
        console.log(erro)
    }
}

//delete
async  function deletaMulher(request,response){
    try {
      await Mulher.findByIdAndDelete(request.params.id)
      response.json({mensagem: 'Mulher deletada com sucesso!'})
    } catch(erro) {
      console.log(erro)
    }
    }
//PORTA
function mostrarPorta () {
    console.log("servidor criado e rodando ", porta)
}


app.use(router.get('/mulheres', mostraMulheres)) //CONFIGURACAO ROTAGET /MULHERES
app.use(router.post('/mulheres', criaMulher))//rota post
app.use(router.patch('/mulheres/:id', corrigeMulher)) //configurei rota patch mulher
app.use(router.delete('/mulheres/:id', deletaMulher)) //configurei rota delete mulher
app.listen(porta, mostrarPorta) //SERVIDOR OUVINDO A PORTA




