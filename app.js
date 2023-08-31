const express = require('express')
const app = express()

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(require('./app/routes'));

app.listen(8080)

module.exports = app;