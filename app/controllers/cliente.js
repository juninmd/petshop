module.exports = (app) => {

    let ClienteModel = app.models.cliente;

    // Lista clientes
    app.get('/cliente', (req, res, next) => {
        ClienteModel.list(req, res);
    });

    // Lista clientes
    app.get('/cliente/:id', (req, res, next) => {
        ClienteModel.get(req, res);
    });

    // Cadastrar cliente
    app.post('/cliente', (req, res, next) => {
        ClienteModel.create(req, res);
    });

    // Editar cliente
    app.put('/cliente/:id', (req, res, next) => {
        ClienteModel.update(req, res);
    });

    // Deletar cliente
    app.delete('/cliente/:id', (req, res, next) => {
        ClienteModel.delete(req, res);
    });

}