class Index{

    constructor( app ){
        this.app = app;
        this.controller = app.controllers.index;
    }

    routes(){

        this.app.get('/', 
            this.controller.index);
        
        this.app.get('/index', 
            this.controller.index2);

    }

}


module.exports = (app) => new Index(app).routes()