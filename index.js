const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

class Application{

    constructor(){
        this.app = express();       
        this.loader();
        this.use();
        this.app.listen(3000, () => console.log('Carregou') );
    }

    loader(){
        consign({ cwd : 'app' })
            .include('models')
            .then('controllers')
            .then('routes')
            .into(this.app);
    }

    use(){

        this.app.use(bodyParser.json())
        this.app.use(bodyParser.urlencoded({ extended: false }));

    }

}

const server = new Application()

module.exports = server.app;