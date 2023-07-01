//Dados ficam guardados namemoria do computador.
// const express = require('express') //AQUI INICIO O EXPRESS
// const app = express() //AQUI ESTOU INICIANDO O APP
// const router = express.Router() //AQUI CONFIGURO A PRIMEIRA PARTE DA ROTA
// const {v4: uuidv4} = require('uuid'); //instalada e chamada biblioteca uuid que gera id automatico
// app.use(express.json())

// const porta = 3333 // AQUI PORTA

// //array de mulheres - CRIANDO LISTA inicial de MULHERES
// const mulheres = 
//     [

//     {
//       id: '1',

//       nome: 'Simara Conceição',
   
//       imagem: 'https://bit.ly/3LJIyOF',
   
//       minibio: 'Desenvolvedora e instrutora',
   
//     },
   
//     {
//       id: '2',

//       nome: 'Iana Chan',
   
//       imagem: 'https://bit.ly/3JCXBqP',
   
//       minibio: 'CEO & Founder da PrograMaria',
   
//     },
   
//     {
//       id: '3',

//       nome: 'Luana Pimentel',
   
//       imagem: 'https://bit.ly/3FKpFaz',
   
//       minibio: 'Senior Staff Software Engineer',
   
//     }
   
//    ]
// //GET
// function mostraMulheres (resquest, response) {
//     response.json(mulheres)
// }

// //POST
// function criaMulher (request, response){
//   const novaMulher = {
//     id: uuidv4(),
//     nome: request.body.nome,
//     imagem:request.body.imagem,
//     minibio: request.body.minibio
//   }

//   mulheres.push(novaMulher)//push empura novamulher para a lista 
//   response.json(mulheres)//mostre a novamulher na lista
// }

// //PATCH
//     function corrigeMulher(request,response){
//       function encontraMulher(mulher) {
//         if (mulher.id === request.params.id) {
//           return mulher 
//         }
//       }
//       const mulherEncontrada = mulheres.find(encontraMulher)

//       if (request.body.nome){
//         mulherEncontrada.nome = request.body.nome
//       }
//       if (request.body.imagem){
//         mulherEncontrada.imagem = request.body.imagem
//       }
//       if (request.body.minibio){
//         mulherEncontrada.minibio = request.body.minibio
//       }
//       response.json(mulheres)
// }

// //delete
//     function deletaMulher(request,response){
//       function todasMenosEla(mulher) {
//         if(mulher.id !== request.params.id) {
//           return mulher
//         }
//       }
//       const mulheresQueFicam = mulheres.filter(todasMenosEla)
//       response.json(mulheresQueFicam)
//     }
// //PORTA
// function mostrarPorta () {
//     console.log("servidor criado e rodando ", porta)
// }


// app.use(router.get('/mulheres', mostraMulheres)) //CONFIGURACAO ROTAGET /MULHERES
// app.use(router.post('/mulheres', criaMulher))//rota post
// app.use(router.patch('/mulheres/:id', corrigeMulher)) //configurei rota patch mulher
// app.use(router.delete('/mulheres/:id', deletaMulher)) //configurei rota delete mulher
// app.listen(porta, mostrarPorta) //SERVIDOR OUVINDO A PORTA




