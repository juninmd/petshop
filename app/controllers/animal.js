module.exports = (app) => {

    let animaisModel = app.models.animal;

    app.get('/animais', (req, res, next) => {
        animaisModel.list(req, res);
    });

    app.get('/animais/:id', (req, res, next) => {
        animaisModel.get(req, res);
    });

    app.post('/animais', (req, res, next) => {
        animaisModel.create(req, res);
    });

    app.put('/animais/:id', (req, res, next) => {
        animaisModel.update(req, res);
    });

    app.delete('/animais/:id', (req, res, next) => {
        animaisModel.delete(req, res);
    });

}