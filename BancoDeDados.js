const mongoose = require('mongoose')
require('dotenv').config()

async function conectaBancoDeDados() {
    try{
        console.log('conexão com o banco iniciou')

    await mongoose.connect(process.env.MONGO_URL)//STRING DE CONEXAO DO BANCO DE DADOS

    console.log('conexão com o banco de dados feita com sucesso!')
    } catch(erro) {
        console.log(erro)
    }
}

module.exports = conectaBancoDeDados
