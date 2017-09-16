module.exports = (app) => {

    let UserModel = app.models.user;

    // Lista usuarios
    app.get('/user', (req, res, next) => {
        UserModel.list(req, res);
    });

    // Lista usuario
    app.get('/user/:id', (req, res, next) => {
        UserModel.get(req, res);
    });

    app.post('/user', (req, res, next) => {
        UserModel.create(req, res);
    });

    app.put('/user/:id', (req, res, next) => {
        UserModel.update(req, res);
    });

    app.delete('/user/:id', (req, res, next) => {
        UserModel.delete(req, res);
    });

}