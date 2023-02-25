const mongoose = require("mongoose");

// estrutura da base de dados
const AnnotationDataSchema = new mongoose.Schema({
    title: String,
    notes: String,
    priority: Boolean
});

// exportacao do moduls
// atribui um nome a estrutura da base de dados criada
module.exports = mongoose.model("Annotations", AnnotationDataSchema);

