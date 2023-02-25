const Annotations = require("../models/AnnotationData");

module.exports = {
    // atualiza o conteudo da nota
    // temos que passar um body
    async update(req, res) {
        const { id } = req.params;
        const { notes } = req.body;

        const annotation = await Annotations.findOne({ _id: id });

        if (notes) {
            annotation.notes = notes;

            await annotation.save();
        }
        return res.json(annotation);
    }
}