const mongoose = require("mongoose");
const bcrypt = require('bcrypt-nodejs');

class Cliente {

    constructor() {
        this.mongoose = mongoose;
        this.cliente = this.createSchema();
    }

    // Monta o schema de usuário
    createSchema() {
        var Schema = this.mongoose.Schema;

        let ClienteSchema = new Schema({
            name: { type: String, default: "" },
            email: { type: String, default: "", unique: true },
            cpf: { type: String, default: "" },
            rg: { type: String, default: "" },
            dataNascimento: { type: Date, default: null },
            sexo: { type: String, default: "" },
            created_at: { type: Date, default: new Date() },
            updated_at: { type: Date, default: new Date() }
        });

        return this.mongoose.model("Cliente", ClienteSchema);
    }

    // Lista todos os usuários
    list(req, res) {
        this.cliente
            .find()
            .exec((err, clientes) => {

                if (err) {
                    res.json(err);
                }

                res.json(clientes);

            });
    }

    get(req, res) {

        let id = req.params.id;

        this.cliente
            .findOne({ _id: id })
            .exec((err, clientes) => {
                if (err) {
                    res.json(err);
                }

                res.json(clientes);
            });
    }

    create(req, res) {

        let Cliente = this.cliente;
        let data = req.body;

        let dados = {
            name: data.name,
            email: data.email,            
            cpf: data.cpf,            
            rg: data.rg,            
            dataNascimento: data.dataNascimento,            
            sexo: data.sexo,   
            animais: {}         
        };

        let cliente = new Cliente(dados);

        cliente
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
        let data = Object.assign({ updated_at: new Date() }, req.body);
        console.log(data);

        this.cliente
            .update({ _id: id }, data, (err, data) => {
                if (err) {
                    res.json(err);
                }

                res.json(data);
            });

    }

    delete(req, res) {
        let id = req.params.id;

        this.cliente
            .remove({ _id: id }, (err, data) => {
                if (err) {
                    res.json(err);
                }

                res.json(data);
            });
    }

}

module.exports = new Cliente()