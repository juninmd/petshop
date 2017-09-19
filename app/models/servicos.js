const mongoose = require("mongoose");
const bcrypt = require('bcrypt-nodejs');

class Servicos {

    constructor() {
        this.mongoose = mongoose;
        this.servicos = this.createSchema();
    }

    // Monta o schema de usuário
    createSchema() {
        var Schema = this.mongoose.Schema;

        let ServicosSchema = new Schema({
            nome: { type: String, default: "" },
            tempo: { type: Number, default: 0 },
            valor: { type: Number, default: 0 }
        });

        return this.mongoose.model("Servicos", ServicosSchema);
    }

    // Lista todos os usuários
    list(req, res) {
        this.servicos
            .find()
            .exec((err, servicoss) => {

                if (err) {
                    res.json(err);
                }

                res.json(servicoss);

            });
    }

    get(req, res) {

        let id = req.params.id;

        this.servicos
            .findOne({ _id: id })
            .exec((err, servicoss) => {
                if (err) {
                    res.json(err);
                }

                res.json(servicoss);
            });
    }

    create(req, res) {

        let Servicos = this.servicos;
        let data = req.body;

        let dados = {
            nome: data.nome,
            tempo: data.tempo,            
            valor: data.valor       
        };

        let servicos = new Servicos(dados);

        servicos
            .save((err, data) => {
                if (err) {
                    res.json(err);
                }

                res.json(data);
            });
    }


    // Responsavel pelo update da aplicação
    update(req, res) {

        let id = req.params.id;
        let data = req.body;

        this.servicos
            .update({ _id: id }, data, (err, data) => {
                if (err) {
                    res.json(err);
                }

                res.json(data);
            });

    }

    delete(req, res) {
        let id = req.params.id;

        this.servicos
            .remove({ _id: id }, (err, data) => {
                if (err) {
                    res.json(err);
                }

                res.json(data);
            });
    }

}

module.exports = new Servicos()