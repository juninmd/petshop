const mongoose = require('mongoose');

// mongoose.createConnection("mongodb://localhost/petshop");
mongoose.Promise = global.Promise;
mongoose.connection.openUri("mongodb://localhost/petshop")
        .then( () => console.log('conexão realizada com sucesso') )
        .catch( err => console.log(`erro na conexão: ${err}`) );

exports.mongoose = mongoose;