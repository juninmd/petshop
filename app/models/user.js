const mongoose = require("mongoose");
const gerarSenha = require('../service/encriptar')

class User {

    constructor() {
        this.mongoose = mongoose;
        this.user = this.createSchema();
    }

    // Monta o schema de usuário
    createSchema() {
        var Schema = this.mongoose.Schema;

        let UserSchema = new Schema({
            name: { type: String, default: "" },
            email: { type: String, default: "", unique: true },
            password: { type: String, default: "" },
            created_at: { type: Date, default: new Date() },
            updated_at: { type: Date, default: new Date() }
        });

        return this.mongoose.model("User", UserSchema);
    }

    // Lista todos os usuários
    list(req, res) {
        this.user
            .find()
            .exec((err, users) => {

                if (err) {
                    res.json(err);
                }

                res.json(users);

            });
    }

    get(req, res) {

        let id = req.params.id;

        this.user
            .findOne({ _id: id })
            .exec((err, users) => {
                if (err) {
                    res.json(err);
                }

                res.json(users);
            });
    }

    create(req, res) {

        let Usuario = this.user;
        let data = req.body;
        
        let senha = gerarSenha
                        .getPassword(data.password)
                        .then( res => res.message)
        
        res.json( senha );

        let dados = {
            name: data.name,
            email: data.email,
            password: data.password,
        };

        let user = new Usuario(dados);

        user
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

        this.user
            .update({ _id: id }, data, (err, data) => {
                if (err) {
                    res.json(err);
                }

                res.json(data);
            });

    }

    delete(req, res) {
        let id = req.params.id;

        this.user
            .remove({ _id: id }, (err, data) => {
                if (err) {
                    res.json(err);
                }

                res.json(data);
            });
    }

}

module.exports = new User()