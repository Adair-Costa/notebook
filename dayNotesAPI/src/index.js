//import o express
const express = require("express");
const routes = require("./routes");
const cors = require("cors");


// devolve os metodos do express
const app = express();

require("./config/dbConfig");

// permite enviar respostas json()
app.use(cors());
app.use(express.json());
app.use(routes);

// cria um servidor
// fica a ouvir na porta 3000
app.listen(3333, () => {
    console.log("Servidor Ativo!");
});