const mongoose = require('mongoose');

// mongoose.createConnection("mongodb://localhost/petshop");
mongoose.connect("mongodb://localhost/petshop");

var db = mongoose.connection;

db.on("error", (err) => {
    console.log("Erro durante a conexão: ", err);
});

db.once("open", () => {
    console.log("conexão realizada com sucesso");
});

exports.mongoose = mongoose;