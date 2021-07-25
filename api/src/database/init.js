// Exporta o caminho do banco de dados
const Database = require("./config.js")

const initDb = {
  async init(){
    const db = await Database()

    await db.exec(`CREATE TABLE name_test( 
        id INTEGER PRIMARY KEY,
        pass TEXT
    )`);

    await db.close()
  }
}

initDb.init();
