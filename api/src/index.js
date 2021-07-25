const express = require('express')
const router   = require('./router')
const morgan = require('morgan')
const app = express()

/** VARIÁVEL DE AMBIENTE - Porta da Aplicação */
require('dotenv/config')
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(morgan('dev'))

/**Utiliza o arquivo ROUTER.JS para capturar as rotas */
app.use(router)

app.listen(process.env.API_PORT, () =>{
  console.log(`Server is Run on PORT`, process.env.API_PORT)
})