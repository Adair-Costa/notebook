const mongoose = require("mongoose");

// a url do mongodb na web
// trocar a passord
const dbConfig = "mongodb+srv://Adair-Costa:first*database@cluster0.okfoued.mongodb.net/?retryWrites=true&w=majority";

// utiliza o mongoose para conectar a app e o mongodb na web
const connection = mongoose.connect(dbConfig, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// exportacao do moodule para usar em toda a app
module.exports = connection;