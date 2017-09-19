const express = require('express');
const consign = require('consign');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

consign({ cwd: 'app' })
    .include('models/index.js')
    .then('models')
    .then('controllers')
    .into(app);

app.listen(3000, () => {
    console.log('Carregou')
})

module.exports = app;