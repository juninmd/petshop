const mongoose = require("mongoose");
const bcrypt = require('bcrypt-nodejs');

class Planos {

    constructor() {
        this.mongoose = mongoose;
        this.planos = this.createSchema();
    }

    // Monta o schema de usuário
    createSchema() {
        var Schema = this.mongoose.Schema;

        let PlanosSchema = new Schema({
            nome: { type: String, default: "" },
            quantidade: { type: Number, default: 0 },
            valor: { type: Number, default: 0 }
        });

        return this.mongoose.model("Planos", PlanosSchema);
    }

    // Lista todos os usuários
    list(req, res) {
        this.planos
            .find()
            .exec((err, planoss) => {

                if (err) {
                    res.json(err);
                }

                res.json(planoss);

            });
    }

    get(req, res) {

        let id = req.params.id;

        this.planos
            .findOne({ _id: id })
            .exec((err, planoss) => {
                if (err) {
                    res.json(err);
                }

                res.json(planoss);
            });
    }

    create(req, res) {

        let Planos = this.planos;
        let data = req.body;

        let dados = {
            nome: data.nome,
            quantidade: data.quantidade,            
            valor: data.valor       
        };

        let planos = new Planos(dados);

        planos
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

        this.planos
            .update({ _id: id }, data, (err, data) => {
                if (err) {
                    res.json(err);
                }

                res.json(data);
            });

    }

    delete(req, res) {
        let id = req.params.id;

        this.planos
            .remove({ _id: id }, (err, data) => {
                if (err) {
                    res.json(err);
                }

                res.json(data);
            });
    }

}

module.exports = new Planos()