const connection = require("./index");
const bcrypt = require('bcrypt-nodejs');

class Cliente {

    constructor() {
        this.mongoose = connection.mongoose;
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
            animais: { type: Object, default: {} },
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

    // Show Animais
    getAnimais(req, res){
        let id = req.params.id;

        this.cliente
            .findOne({ _id : id })
            .exec( (err, cliente) => {
                if( err ){
                    res.json(err)
                }

                res.json( cliente.animais );                
            })
    }

    // Show Animal
    getAnimal(req, res){
        let id = req.params.id;
        let animalId = req.params.animais;

        this.cliente
            .findOne({ _id : id })
            .exec( (err, cliente) => {
                if( err ){
                    res.json(err)
                }        
            
                // Verifica se existe animal
                if( Object.keys(cliente.animais).length !== 0 ){

                    res.json( cliente.animais[animalId] );
                }

                res.json({status: "400", mensagem: "nao foi encontrado nenhuma animal"});
                
            })
    }

    // Cadastra um animal
    createAnimal(req, res){

        let id = req.params.id;
        let data = req.body;

        // Gera o ID
        let animalId = bcrypt.hashSync( JSON.stringify(new Date()) );

        // Dados do formulário
        let dados = {
            id: animalId,
            name: data.name,          
            age: data.age,            
            size: data.size,            
            breed: data.breed,            
            species: data.species    
        };
        
        // Cria o primeiro objeto para animal
        let animal = {}
        animal[animalId.substring(1, 30)] = dados

        // Busca o cliente
        this.cliente
        .findOne({ _id : id })
        .exec( (err, cliente) => {

            if( err ){
                res.json(err)
            }

            // Verifica se tem algum animal
            if( Object.keys(cliente.animais).length !== 0 ){   
                animal = Object.assign( cliente.animais, animal );
            }            

            // Faz o update com o novo animal
            this.cliente
            .update({ _id: id }, {animais: animal}, (err, data) => {
                if (err) { 
                    res.json(err);
                }

                res.json(data);
            });
        
        })

    }

    editAnimal( req, res ){

        let id = req.params.id;
        let data = req.body;
        let animalId = req.params.animais

        // Dados do formulário
        let dados = {
            id: animalId,
            name: data.name,          
            age: data.age,            
            size: data.size,            
            breed: data.breed,            
            species: data.species    
        };

        let animal = {}

        this.cliente
        .findOne({ _id : id })
        .exec( (err, cliente) => {

            if( err ) {
                res.json(err);
            }

            // Guarda os animais
            let animais = cliente.animais;

            // Deleta o usuário atual
            delete animais[animalId]
            
            // Salva os novos dados
            animal[animalId] = dados;

            animais = Object.assign( animal, animais );

            // Faz o update com o novo animal
            this.cliente
            .update({ _id: id }, {animais: animais}, (err, data) => {
                if (err) { 
                    res.json(err);
                }

                res.json(data);
            });

        })

    }

    // Deleta Animal
    deleteAnimal( req, res ){

        let id = req.params.id;
        let animalId = req.params.animais

        this.cliente
        .findOne({ _id : id })
        .exec( (err, cliente) => {

            if( err ) {
                res.json(err);
            }

            // Guarda os animais
            let animais = cliente.animais;

            // Deleta o usuário atual
            delete animais[animalId]

            // Faz o update com o novo animal
            this.cliente
            .update({ _id: id }, {animais: animais}, (err, data) => {
                if (err) { 
                    res.json(err);
                }

                res.json(data);
            });

        })

    }

}

module.exports = new Cliente()