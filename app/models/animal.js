const mongoose = require("mongoose");
const bcrypt = require('bcrypt-nodejs');

class Animal{

    constructor() {
        this.mongoose = mongoose;
        this.animal = this.createSchema();
    }

    // Monta o schema de usuário
    createSchema() {
        var Schema = this.mongoose.Schema;

        let AnimalSchema = new Schema({
            clienteId: { type: String },
            nome: { type: String, default: "" },
            idade: { type: Number, default: 0 },        
            tamanho: { type: Number, default: 0 },          
            raca: { type: String, default: "" },          
            especie: { type: String, default: "" },
        });

        return this.mongoose.model("Animal", AnimalSchema);
    }

    // Lista todos os usuários
    list(req, res) {
        this.animal
            .find()
            .exec((err, animais) => {

                if (err) {
                    res.json(err);
                }

                res.json(animais);

            });
    }

    get(req, res) {

        let id = req.params.id;

        this.animal
            .findOne({ _id: id })
            .exec((err, animais) => {
                if (err) {
                    res.json(err);
                }

                res.json(animais);
            });
    }

    create(req, res) {

        let Animal = this.animal;
        let data = req.body;

        let dados = {
            clienteId: data.clienteId,
            nome: data.nome,
            idade: data.idade,            
            tamanho: data.tamanho,            
            raca: data.raca,            
            especie: data.especie       
        };

        let animal = new Animal(dados);

        animal
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

        this.animal
            .update({ _id: id }, data, (err, data) => {
                if (err) {
                    res.json(err);
                }

                res.json(data);
            });

    }

    delete(req, res) {
        let id = req.params.id;

        this.animal
            .remove({ _id: id }, (err, data) => {
                if (err) {
                    res.json(err);
                }

                res.json(data);
            });
    }

}

module.exports = new Animal();