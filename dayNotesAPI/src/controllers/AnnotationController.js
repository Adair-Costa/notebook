// importacao do model de Schema da base de dados criada
const Annotations = require("../models/AnnotationData");

module.exports = {
    // retorna todas as informacoes da base de dados
    async read(req, res) {
        const annotationList = await Annotations.find();

        return res.json(annotationList);
    },

    // cria elementos na base de dados
    // temos que passar um corpo na requisicao(pedido)
    async create(req, res) {
        const { title, notes, priority } = req.body;

        if (!notes || !title) {
            return res.status(400).json({ error: "Necessário um titulo/anotaçao!" });
        }
        const annotationsCreated = await Annotations.create({
            title,
            notes,
            priority
        })

        return res.json(annotationsCreated);
    },

    // deleta elementos na base de dados
    // temos que passar um id na requisicao(pedido)
    async delete(req, res) {
        const { id } = req.params;

        const annotationsDeleted = await Annotations.findOneAndDelete({ _id: id});

        if (annotationsDeleted) {
            return res.json(annotationsDeleted);
        }
        return res.status(401).json({ error: "Nao foi encontrado o registro para deletar!" });
    }
}