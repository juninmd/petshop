class Index{

    constructor( app ){
        this.app = app;
        this.controller = app.controllers.index;
    }

    routes(){

        this.app.get('/', 
            this.controller.index);
        
        this.app.get('/index/:id', 
            this.controller.index2);

        this.app.post('/create', 
            this.controller.create);

        this.app.put('/update/:id', 
            this.controller.update);
        
        this.app.delete('/delete/:id', 
            this.controller.delete);

    }

}


module.exports = (app) => new Index(app).routes()