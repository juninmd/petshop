class IndexController{

    index(req, res){
        res.json('opa');
    }

    index2(req, res){
        res.json('opa2');
    }

}

module.exports = () => new IndexController()