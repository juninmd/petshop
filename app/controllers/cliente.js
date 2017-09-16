module.exports = (app) => {

    let ClienteModel = app.models.cliente;

    // Lista usuarios
    app.get('/cliente', (req, res, next) => {
        ClienteModel.list(req, res);
    });

    // Lista usuario
    app.get('/cliente/:id', (req, res, next) => {
        ClienteModel.get(req, res);
    });

    app.post('/cliente', (req, res, next) => {
        ClienteModel.create(req, res);
    });

    app.put('/cliente/:id', (req, res, next) => {
        ClienteModel.update(req, res);
    });

    app.delete('/cliente/:id', (req, res, next) => {
        ClienteModel.delete(req, res);
    });

}