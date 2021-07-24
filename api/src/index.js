const { response } = require('express')
const express = require('express')
const app = express()

require('dotenv/config')
app.use(express.json())


app.post("/", (require, response) => {
  return response.status(200).json({
    message: "Página Inicial do projeto"
  })
})

app.listen(process.env.BACKEND_PORT, () =>{
  console.log(`Server is Run on PORT`, process.env.API_PORT)
})