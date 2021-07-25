const express = require('express')
const router   = require('./router')
const app = express()

/** VARIÁVEL DE AMBIENTE - Porta da Aplicação */
require('dotenv/config')
app.use(express.json())

/**Utiliza o arquivo ROUTER.JS para capturar as rotas */
app.use(router)

app.listen(process.env.API_PORT, () =>{
  console.log(`Server is Run on PORT`, process.env.API_PORT)
})