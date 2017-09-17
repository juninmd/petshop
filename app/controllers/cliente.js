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

    /** Listagem de animais */
    app.get('/cliente/:id/animais', (req, res, next) => {
        ClienteModel.getAnimais(req, res);
    });

    /** Lista de animal */
    app.get('/cliente/:id/animais/:animais', (req, res, next) => {
        ClienteModel.getAnimal(req, res);
    });

    app.put('/cliente/:id/animais', (req, res, next) => {
        ClienteModel.createAnimal(req, res);
    });

    app.put('/cliente/:id/animais/:animais', (req, res, next) => {
        ClienteModel.editAnimal(req, res);
    });

    app.delete('/cliente/:id/animais/:animais', (req, res, next) => {
        ClienteModel.deleteAnimal(req, res);
    });
}