class Index{

    constructor( app ){
        this.app = app;
        this.controller = app.controllers.index;
    }

    routes(){

        this.app.get('/user', 
            this.controller.list);
        
        this.app.get('/user/:id', 
            this.controller.get);

        this.app.post('/user', 
            this.controller.create);

        this.app.put('/user/:id', 
            this.controller.update);
        
        this.app.delete('/user/:id', 
            this.controller.delete);

    }

}


module.exports = (app) => new Index(app).routes()