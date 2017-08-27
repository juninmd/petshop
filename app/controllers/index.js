const UserModel = require('../models/user');

class IndexController{


    index(req, res){
        UserModel.list(req, res);
    }

    index2(req, res){
        UserModel.get(req, res);
    }

    create(req, res){
        UserModel.create(req, res);
    }

    update(req, res){
        UserModel.update(req, res);
    }

    delete(req, res){
        UserModel.delete(req, res);
    }

}

module.exports = () => new IndexController()