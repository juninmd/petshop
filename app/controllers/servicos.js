module.exports = (app) => {

    let ServicosModel = app.models.servicos;

    // Lista servicoss
    app.get('/servicos', (req, res, next) => {
        ServicosModel.list(req, res);
    });

    // Lista servicoss
    app.get('/servicos/:id', (req, res, next) => {
        ServicosModel.get(req, res);
    });

    // Cadastrar servicos
    app.post('/servicos', (req, res, next) => {
        ServicosModel.create(req, res);
    });

    // Editar servicos
    app.put('/servicos/:id', (req, res, next) => {
        ServicosModel.update(req, res);
    });

    // Deletar servicos
    app.delete('/servicos/:id', (req, res, next) => {
        ServicosModel.delete(req, res);
    });

}