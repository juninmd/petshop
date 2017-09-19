module.exports = (app) => {

    let PlanosModel = app.models.planos;

    // Lista planoss
    app.get('/planos', (req, res, next) => {
        PlanosModel.list(req, res);
    });

    // Lista planoss
    app.get('/planos/:id', (req, res, next) => {
        PlanosModel.get(req, res);
    });

    // Cadastrar planos
    app.post('/planos', (req, res, next) => {
        PlanosModel.create(req, res);
    });

    // Editar planos
    app.put('/planos/:id', (req, res, next) => {
        PlanosModel.update(req, res);
    });

    // Deletar planos
    app.delete('/planos/:id', (req, res, next) => {
        PlanosModel.delete(req, res);
    });

}