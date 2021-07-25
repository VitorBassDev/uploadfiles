// Utiliza o banco sqlite3
const sqlite3 = require('sqlite3');

// Utiliza a função para abrir a conexão com o banco sqlite
const { open } = require("sqlite")

// Atribui o caminho do banco de dados dos e o tipo de Driver
module.exports = () => 
  open({
    filename: './src/database/upFile.sqlite',
    driver: sqlite3.Database,
  });